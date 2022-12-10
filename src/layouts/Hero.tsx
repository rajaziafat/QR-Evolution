function Hero() {
  return (
    <div>
      <div className="container relative z-10">
        <div className="lg:w-[50%] z-50 relative">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl text-gradient w-fit font-extrabold mb-6">
            <span>Evolution</span>
            <span className="font-arial-black">QR</span>
          </h1>

          <p
            className="text-xs sm:text-sm xl:text-base font-semibold text-Blue mb-8 lg:mb-10"
            style={{ lineHeight: 1.9 }}
          >
            EvolutionQR is a tech services solution that specializes in creating
            organic growth using customer relationship management for projects
            and businesses alike. We incentivise holders and customers to
            promote through word of mouth marketing while gaining rewards using
            unique QR codes.
          </p>

          <button className="button py-3 px-8 sm:px-10 xl:py-4 xl:px-20 text-white text-xs xl:text-sm font-semibold">
            Launch App
          </button>
        </div>

        {/* <img
          src="images/qr-code.png"
          className="w-full lg:w-[54%] lg:max-w-[700px] absolute sm:static lg:absolute top-[50%] sm:top-[54%] left-1/2 sm:left-[unset] sm:-right-20 -translate-x-1/2 sm:translate-x-0 sm:-translate-y-14 lg:-translate-y-1/2 -z-20 scale-150 sm:scale-100 opacity-[.3] sm:opacity-100"
          alt=""
        /> */}
        <img
          src="images/qr-code.png"
          className="w-full lg:w-[54%] lg:max-w-[700px] lg:absolute lg:-translate-y-1/2 -z-20 -right-20 top-[54%] scale-[1.8] sm:scale-100 mt-20 sm:mt-0"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
