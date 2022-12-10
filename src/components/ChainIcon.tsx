import { CSSProperties } from "react";

interface Props {
  color?: string;
  img?: string;
  imgWidth?: string | number;
  imgStyles?: CSSProperties;
  Component?: React.FC | null;
}

function ChainIcon({ color, img, imgWidth, imgStyles, Component }: Props) {
  return (
    <div className="relative z-10">
      <div className="bg-radial w-[140%] h-[140%] absolute top-0 left-0 -z-20"></div>

      {Component ? (
        <Component />
      ) : (
        <div
          className="w-[40px] sm:w-[60px] lg:w-[74px] h-[40px] sm:h-[60px] lg:h-[74px] z-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <img src={img} style={{ width: imgWidth, ...imgStyles }} alt="" />
        </div>
      )}
    </div>
  );
}

export default ChainIcon;
