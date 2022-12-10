import React from "react";

interface Props {
  Icon: React.FC | null;
  link: "string" | "/";
}

function SocialButton({ Icon, link = "/" }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="bg-BLueSocial w-8 h-8 lg:w-9 lg:h-9 rounded flex items-center justify-center"
    >
      {Icon && <Icon />}
    </a>
  );
}

export default SocialButton;
