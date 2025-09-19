const Hero = ({ handleTogglePopup }) => {
  return (
    <main className="w-full py-24 lg:py-40 padding-x">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col items-start gap-5 pt-20">
          <h1 className="hero-heading">
            Communities Thrive When They Trade Together
          </h1>
          <p className="hero-description">
            GiveXChange is a private, invite-only marketplace where neighbors,
            friends, and groups can buy, sell, and give back — all within the
            communities that matter most.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleTogglePopup()}
              className="primary-bg text-white px-4 md:px-6 md:text-base py-4 text-sm rounded-full font-semibold btn-shadow"
            >
              Join the Waitlist
            </button>
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
            src="/vecteezy_illustration-isometric-concept-safety-of-online-shopping-in_5638074.jpg"
            alt=""
            className="w-full md:w-[70%] lg:w-full h-full"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
