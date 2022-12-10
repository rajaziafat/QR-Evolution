import ChainIcon from "components/ChainIcon";
import React from "react";

function SupportedChains() {
  return (
    <div className="py-16 relative z-10">
      <img
        src="images/big-qr.png"
        className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
        alt=""
      />
      <div className="container">
        <h1 className="heading text-center mb-6 sm:mb-10 lg:mb-16 drop-shadow-effect-1">
          Supported Chains
        </h1>

        <div className="flex items-center justify-center space-x-5 sm:space-x-10 lg:space-x-16">
          <ChainIcon img="images/binance.png" color="#F0B90B" imgWidth="60%" />
          <ChainIcon img="images/etheruem.png" color="#627EEA" imgWidth="40%" />
          <ChainIcon
            img="images/avalanche.png"
            color="#E84142"
            imgWidth="50%"
            imgStyles={{ marginBottom: 8 }}
          />
          <ChainIcon
            Component={() => (
              <img
                src="images/polygon.png"
                className="w-[40px] sm:w-[60px] lg:w-[74px] z-20"
                alt=""
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default SupportedChains;
