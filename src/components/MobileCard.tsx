import React from "react";

interface Props {
  title: string;
  img: string;
}

function MobileCard({ title, img }: Props) {
  return (
    <div>
      <img src={img} className="max-w-[252px] mx-auto w-full" alt="" />
      <p className="text-sm xl:text-lg text-center font-bold mt-5 drop-shadow-effect-1">
        {title}
      </p>
    </div>
  );
}

export default MobileCard;
