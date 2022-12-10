import React from "react";

const OutsideClickDetector = (handler: any) => {
  let domNode = React.useRef<any>(null);

  React.useEffect(() => {
    const func = (e: Event) => {
      const target: any = e.target;
      if (!domNode.current?.contains(target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", func);

    return () => {
      document.removeEventListener("mousedown", func);
    };
  });

  return domNode;
};

export default OutsideClickDetector;
