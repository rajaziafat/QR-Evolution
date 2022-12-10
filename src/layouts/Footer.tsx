import SocialButton from "components/SocialButton";

function Footer() {
  return (
    <div className="bg-LightBlue2 py-12 lg:py-20">
      <div className="container">
        <div className="relative">
          <img
            src="images/logo.svg"
            className="lg:absolute mx-auto lg:mx-0 mb-14 lg:mb-0 -top-2 left-0 opacity-80 w-[100px] xl:w-[120px]"
            alt=""
          />

          <div className="mb-16 flex justify-center space-x-12 md:space-x-20">
            <div>
              <h4 className="text-BLueSocial text-base font-bold mb-5">
                Links
              </h4>

              <div className="space-y-4">
                <a href="/" className="text-xs text-link block w-fit">
                  Home
                </a>
                <a href="/" className="text-xs text-link block w-fit">
                  Roadmap
                </a>
                <a href="/" className="text-xs text-link block w-fit">
                  Socials
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-BLueSocial text-base font-bold mb-5">
                Quick Links
              </h4>

              <div className="space-y-4">
                <a href="/" className="text-xs text-link block w-fit">
                  About Us
                </a>
                <a href="/" className="text-xs text-link block w-fit">
                  Team
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-16">
          <p className="text-xs text-center text-black opacity-80">
            Disclaimer: Please be aware that there are always risks associated
            with smart contracts. Please use at your own risk Y-5 Finance is not
            regulated, a registered broker, financial analyst or investment
            advisory company. All of the information on this site is purely for
            guidance, informational and educational purposes.
          </p>
          <p className="text-xs text-center text-black opacity-80">
            Information contained herein should be independently verified and
            confirmed. Y-5 (the company) or any of its team members or
            associates do not accept any liability for any loss or damage
            whatsoever caused in reliance upon such information or services.
          </p>
          <p className="text-xs text-center text-black opacity-80">
            Please be aware of the risks involved with any form of investment or
            trading activity done in any financial market. Please do not trade
            with money that you cannot afford to lose and when in doubt, you
            should consult a qualified financial advisor before making any
            investment decisions.
          </p>
          <p className="text-xs text-center text-black opacity-80">
            It is important to read and understand the risks of this investment
            which are explained in detail in our legal section on our website.
          </p>
        </div>

        <div className="relative">
          <p className="text-center text-black opacity-80 text-xs">
            © EvolutionQR, all rights reserved
          </p>

          <div className="lg:absolute justify-center mt-6 lg:mt-0 top-1/2 lg:-translate-y-1/2 right-0 flex items-center space-x-3">
            <SocialButton
              link="/"
              Icon={() => <img src="images/twitter.svg" alt="" />}
            />
            <SocialButton
              link="/"
              Icon={() => <img src="images/telegram.svg" alt="" />}
            />
            <SocialButton
              link="/"
              Icon={() => <img src="images/discord.svg" alt="" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
