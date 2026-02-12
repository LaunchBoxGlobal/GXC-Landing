const Hero = ({ handleTogglePopup, toggleFormType }) => {
  return (
    <main className="w-full py-24 lg:py-40 padding-x">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col items-start gap-5 pt-20">
          <h1 className="hero-heading">Part Sale. Part Donation. All Good.</h1>
          <p className="hero-description leading-[1.2]">
            giveXchange is an invite-only digital marketplace where people buy
            and sell items while effortlessly directing a portion of every sale
            to a collective fundraiser.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#consulation"
              onClick={() => toggleFormType("consultation")}
              className="primary-bg text-white px-4 md:px-6 md:text-base py-4 text-sm rounded-full font-semibold btn-shadow"
            >
              Request A Consult
            </a>
            <a
              href={`#workflow`}
              className="primary-bg text-white px-4 md:px-6 md:text-base py-4 text-sm rounded-full font-semibold btn-shadow"
            >
              See How It Works
            </a>
          </div>
        </div>
        <div className="flex items-start justify-center xl:px-5">
          <img
            src="/hero-section-image.jpg"
            alt=""
            className="w-full md:w-[75%] lg:w-full h-full"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
