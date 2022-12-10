import MobileCard from "components/MobileCard";
import SimpleCard from "components/SimpleCard";

function Work() {
  return (
    <div className="bg-LightBlue2 py-12 md:py-16">
      <div className="mb-20 sm:mb-24">
        <div className="container">
          <h1 className="heading mb-12 md:mb-16 text-center">
            How does it work?
          </h1>

          <div className="grid md:grid-cols-3 gap-12 md:gap-5">
            <MobileCard img="images/mobile1.png" title="Make a purchase" />
            <MobileCard
              img="images/mobile2.png"
              title="Claim & share your QR"
            />
            <MobileCard img="images/mobile3.png" title="Get rewarded" />
          </div>
        </div>
      </div>

      <div className="container grid lg:grid-cols-2 gap-5 lg:gap-10 xl:gap-14">
        <SimpleCard
          textArray={[
            "At EvolutionQR, we reward every person who brings in new investors and adopters of the project, by using a unique QR code generated when you make a minimum purchase amount that is set by the project. ",
            "You can now pass on your unique QR code to your friends, family, and social circles, and if one of them makes a physical purchase you will get rewarded by an amount that is set by the project owner.",
            "When the other person makes a minimum purchase using your QR code, they will also get a unique QR code for themselves to pass on to their circle of friends, and earn rewards whilst further exposing the project to new investors.",
          ]}
        />
        <SimpleCard
          textArray={[
            "The rewards are distributed by a fully automated service in the form of an airdrop, provided by ourselves at EvolutionQR. This is done on a weekly basis, secured using our fully audited smart contracts.",
            "We can tailor our product and services to meet the needs and demands of project owners.",
            "By incentivizing holders to promote and bring in new investment for the project, they will be rewarded, creating a true win-win situation for the holder and project owner alike.",
          ]}
        />
      </div>
    </div>
  );
}

export default Work;
