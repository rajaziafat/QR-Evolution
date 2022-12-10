interface Props {
  img?: any;
  desc: string;
}

function OfferCard({ img, desc }: Props) {
  return (
    <div className="shadow-effect-1 bg-LightWhite rounded-xl px-7 md:px-9 py-7 flex flex-col items-start relative z-10 overflow-hidden">
      <img src={img} className="w-8 mb-5" alt="" />
      <p className="text-xs xl:text-base font-medium leading-1_6 mb-6 flex-1">
        {desc}
      </p>

      <button className="h-[14px] rounded bg-BlueLight text-[7px] font-medium text-white flex items-center px-2 leading-1">
        Learn more
      </button>

      <div className="-z-10 absolute top-[-28px] right-[-24px] w-[80px] h-[50px] bg-[red] rotate-[34deg] bg-purple-gradient"></div>
    </div>
  );
}

export default OfferCard;
