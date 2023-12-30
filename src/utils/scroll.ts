export function scrollObserver(root: HTMLElement, callback: () => void) {
  let lastElement: HTMLElement | null;

  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) callback();
      });
    },
    { root, threshold: 0.1 }
  );

  const mutationObserver = new MutationObserver((records) => {
    console.log("mutation");
    const last = records[records.length - 1];
    const [element] = last.addedNodes;

    if (lastElement) {
      intersectionObserver.unobserve(lastElement);
    }

    lastElement = element as HTMLElement;
    intersectionObserver.observe(lastElement);
  });

  mutationObserver.observe(root, {
    childList: true,
  });

  return () => {
    mutationObserver.disconnect();
    intersectionObserver.disconnect();
  };
}
