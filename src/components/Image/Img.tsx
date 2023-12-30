import { useEffect, useRef, useState } from "react";
import {
  Image as ChakraImage,
  ImageProps as ChakraImageProps,
  Skeleton,
} from "@chakra-ui/react";

class ImgLoader {
  private _src: string;
  private _abortController: AbortController | null = null;
  private _loading = false;

  constructor(src: string) {
    this._src = src;
  }

  public get isLoading() {
    return this._loading;
  }

  public abort = () => {
    if (this._abortController) {
      this._abortController.abort();
    }
  };

  public request = async (): Promise<string> => {
    const controller = new AbortController();

    this._abortController = controller;
    this._loading = true;

    return new Promise((resolve, reject) => {
      controller.signal.addEventListener("abort", () => {
        reject("Request aborted!");
        this._loading = false;
      });

      const img = new Image();
      img.onload = () => {
        resolve(this._src);
        this._loading = false;
      };
      img.src = this._src;
    });
  };
}

type ImgProps = ChakraImageProps & {
  src: string;
  skeletonH?: string | number;
  skeletonW?: string | number;
};

export function Img({ src, skeletonH, skeletonW, ...rest }: ImgProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const el = ref.current as HTMLDivElement;
    const loader = new ImgLoader(src);

    const intersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !loader.isLoading) {
          loader.request().then(setImgSrc);
        }
      });
    };

    const observer = new IntersectionObserver(intersection, {
      root: document.body,
    });

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      loader.abort();
    };
  }, [src]);

  return (
    <Skeleton
      ref={ref}
      isLoaded={!!imgSrc}
      startColor="whiteAlpha.500"
      endColor="blackAlpha.500"
      w="100%"
      h="100%"
      minH={skeletonH}
      minW={skeletonW}
      fadeDuration={0.5}
    >
      {imgSrc && <ChakraImage src={imgSrc} {...rest} />}
    </Skeleton>
  );
}
