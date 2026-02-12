export default function AboutUsPage() {
  return (
    <main className="bg-white pt-40">
      {/* HERO SECTION */}

      {/* MISSION SECTION */}
      <section className="padding-x w-full px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Our Mission</h2>
          <p className="mt-6 text-lg text-gray-600 lg:w-2/3 mx-auto text-center">
            Our mission is to make fundraising effortless, useful, and
            inclusive—by turning everyday buying and selling into a powerful way
            for communities to support what matters most.
          </p>
        </div>
      </section>

      <section className="w-full padding-x pb-10">
        <img
          src="/giveXchange_owner_image.jfif"
          alt="about-image"
          className="object-contain md:max-w-[40%] mx-auto"
        />
      </section>

      {/* WHO WE ARE */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div>
            <h3 className="text-3xl font-semibold text-gray-900">Who We Are</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We’re Aly and Dani—two moms with five kids between us, an
              impressive collection of mismatched socks, and calendars that look
              like a competitive sport. On any given day, you’ll find us
              shuttling kids between school, sports, and extracurriculars,
              answering emails in the carpool line, and wondering how the
              laundry multiplied again. We also happen to be two women with
              master’s degrees in management and business. Which means, in
              addition to running our households like well-oiled (slightly
              chaotic) operations, we know strategy, systems, and how to spot
              something that’s inefficient from a mile away.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              And traditional fundraisers? Let's just say we've seen enough
              coupon books, candy bars, and awkward asks to last a lifetime.
              Nevermind the fact that many platforms take more than they give!
              We believe fundraising shoudl work for real life - and not add to
              the chaos. It should be smart, simple, and respectful of people's
              time and energy. So we built something better: a solution designed
              by busy parents, for busy communities, that actually makes sense.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              The idea didn’t come to us in a boardroom—it showed up mid–closet
              clean-out, surrounded by outgrown jerseys, barely worn cleats, and
              piles of clothes that had somehow shrunk overnight. As we sorted
              “keep,” “donate,” and “why do we have five of these?” we were also
              writing yet another check for another fundraiser, for another
              cause we genuinely cared about. That’s when it clicked: all this
              value, all this effort, all these communities—yet none of it
              connected in a way that actually worked for everyone. There had to
              be a better solution—one that helped people recirculate what they
              already had, made fundraising feel less like a burden, and created
              wins for sellers, buyers, and organizations alike. So we stopped
              complaining, started sketching, and turned a very real, very messy
              moment of mom life into a smarter way to fundraise.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We're still working on a solution to the laundry mountain.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
