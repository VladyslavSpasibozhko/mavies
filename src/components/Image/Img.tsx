import { useState } from "react";
import {
  Image as ChakraImage,
  ImageProps as ChakraImageProps,
  Skeleton,
} from "@chakra-ui/react";

type ImgProps = ChakraImageProps & {
  src: string;
  skeletonH?: string | number;
  skeletonW?: string | number;
};

export function Img({ src, skeletonH, skeletonW, ...rest }: ImgProps) {
  const [loading, setLoading] = useState(true);

  return (
    <Skeleton
      isLoaded={!loading}
      startColor="whiteAlpha.500"
      endColor="blackAlpha.500"
      w={skeletonW}
      h={skeletonH}
      fadeDuration={0.5}
    >
      <ChakraImage
        src={src}
        hidden={loading}
        onLoad={() => {
          setLoading(false);
        }}
        {...rest}
      />
    </Skeleton>
  );
}
