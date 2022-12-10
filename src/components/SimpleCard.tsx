import React from "react";

interface Props {
  textArray: string[];
}

function SimpleCard({ textArray }: Props) {
  return (
    <div className="space-y-4 py-9 px-10 rounded-lg bg-purple-gradient-2">
      {textArray.map((text, index) => (
        <p key={index} className="text-white text-xs leading-1_8 font-normal">
          {text}
        </p>
      ))}
    </div>
  );
}

export default SimpleCard;
