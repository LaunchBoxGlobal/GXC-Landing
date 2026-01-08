export default function AboutUsPage() {
  return (
    <main className="bg-white ">
      {/* HERO SECTION */}
      <section className="relative bg-gray-50 padding-x pt-24 lg:pt-40">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              About giveXchange
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              A secure, invite-only community marketplace designed to help
              people buy, sell, and give with purpose.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="w-full h-80 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
            Image Placeholder (TBD by EOB 1/8)
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="padding-x w-full px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Our Mission</h2>
          <p className="mt-6 text-lg text-gray-600 lg:w-2/3 mx-auto text-center">
            Our mission is to provide a secure community marketplace that
            creates value for every participant, offering a platform to buy and
            sell with purpose.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Who We Are</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Founded by{" "}
              <span className="font-medium text-gray-800">Aly Nash</span> and{" "}
              <span className="font-medium text-gray-800">
                Danielle de Garcia
              </span>
              , giveXchange is built for people—not corporations.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are community leaders, parents, and neighbors who believe that
              when we trade together, our communities thrive together.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">
              Built on Community Values
            </h4>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>• Invite-only and trust-driven</li>
              <li>• Community-first fundraising</li>
              <li>• Safe, local, and purposeful transactions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY WE DO THIS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-semibold text-gray-900 text-center">
          Why We Are Doing This
        </h3>

        <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">
          We believe commerce and community should go hand-in-hand. giveXchange
          was born from a simple observation made by its founders.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Problem 1 */}
          <div className="p-8 border rounded-xl">
            <h4 className="text-xl font-semibold text-gray-900">
              Fundraising Fatigue
            </h4>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Schools and organizations are constantly asking for direct
              donations, which can be taxing for both organizers and donors.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="p-8 border rounded-xl">
            <h4 className="text-xl font-semibold text-gray-900">
              The Marketplace Gap
            </h4>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Existing platforms for selling pre-loved goods often involve
              ghosting, safety concerns, and a lack of genuine community
              connection.
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-10 text-center">
          <h4 className="text-2xl font-semibold text-gray-900">
            What If We Could Solve Both?
          </h4>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            By creating an invite-only digital marketplace, giveXchange enables
            people to buy and sell items they no longer need—while effortlessly
            directing a portion of every sale to a collective fundraiser.
          </p>
        </div>
      </section>
    </main>
  );
}
