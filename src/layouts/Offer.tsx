import OfferCard from "components/OfferCard";

function Offer() {
  return (
    <div>
      <div className="container">
        <h1 className="heading text-center mb-10 md:mb-14 xl:mb-20">
          What we offer
        </h1>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          <OfferCard
            img="images/money-recive.svg"
            desc="Secured distribution of rewards through our audited smart contracts."
          />
          <OfferCard
            img="images/card-receive.svg"
            desc="Your community can earn rewards by promoting their investment. Creating unique QR codes shareable across all social media apps. "
          />
          <OfferCard
            img="images/status-up.svg"
            desc="Owners can see organic growth and actual physical purchases, as well as gain project awareness using EvolutionQR."
          />
        </div>
      </div>
    </div>
  );
}

export default Offer;
