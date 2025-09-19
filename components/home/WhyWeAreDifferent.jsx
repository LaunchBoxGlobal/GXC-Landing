// import { UNIQUE_SELLING_POINTS } from "../../constants/UniqueSelltingPoints";

import { UNIQUE_SELLING_POINTS } from "@/constants/UniqueSelltingPoints";

const WhyWeAreDifferent = () => {
  return (
    <section
      id="why-we-are-different"
      className="w-full padding-x padding-y bg-white"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16 py-10">
        <div className="w-full relative">
          <div className="flex flex-col items-start justify-start gap-5 sticky top-32">
            <h2 className="section-heading leading-[1.1]">Why GiveXChange</h2>
            <div className="mt-4">
              <a
                href={`#contact`}
                className="px-6 py-4 border-2 border-[#4e9d4b] text-[#4e9d4b] font-semibold rounded-full hover:bg-[#4e9d4b] hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-y-8 lg:gap-y-20">
          {UNIQUE_SELLING_POINTS?.map((d, i) => {
            return (
              <div className="w-full flex flex-col items-start gap-3" key={i}>
                <h3 className="text-[1.8em] font-semibold leading-[1.1em]">
                  {d?.title}
                </h3>
                <p className="hero-description">{d?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreDifferent;
