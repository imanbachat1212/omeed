import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews-section">
      <h1 className="reviews-title">
        APPRECIATION{" "}
        <img
          src={require("../images/icons8-good-quality1-ezgif.com-gif-maker.gif")}
          alt=""
        />{" "}
      </h1>
      <h4 className="reviews-title">Reviews From Our Clients</h4>
      <div className="demo">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                showIndicators={true}
              >
                <div className="testimonial">
                  <p className="description">
                    "I had the privilege of receiving executive coaching from
                    Omeed when I first joined Google. I had been in the
                    government sector for 20+ years in education policy and
                    joining Google was a big professional shift for me in every
                    aspect--cultural, organizational. Omeed was instrumental in
                    not only helping me navigate this new environment, but he
                    empowered me to find my voice and succeed in this new space
                    while never compromising myself in the process. Omeed's
                    superpower is his ability to connect the dots across
                    extremely ambiguous and complex spaces and to help me do the
                    same through his astute questioning and sharing of his own
                    applicable experiences. He transformed the way I approach my
                    work and professional relationships where I know I am
                    leaving an indelible mark in everything I do. If you are
                    looking to transform yourself, your team or your business,
                    Omeed is uniquely positioned to guide you through any
                    transformation you are seeking."
                  </p>
                  <h3 className="title">
                    Jessica Shean | L&D Strategist, Google
                  </h3>
                  <div className="pic">
                    <img src={require("../images/jessica.jpg")} alt="Jessica" />
                  </div>
                </div>
                <div className="testimonial">
                  <p className="description">
                    "Omeed was my coach when I was trying to take the next step
                    in my career at a time where I didn’t know what I wanted to
                    do or where I wanted to go. His approach to refining my
                    story went beyond surface-level edits of a resume, providing
                    strategic insights that elevated my understanding of
                    personal value and executive presence. Omeed's mentorship
                    helped me navigate imposter syndrome by highlighting my
                    strengths and fostering a strategic mindset. I now approach
                    professional challenges with confidence and clarity. Thanks
                    to his guidance, I transformed myself from an individual
                    contributor to an executive leader. If you are stuck framing
                    your story, even for yourself, call Omeed. He will guide you
                    through a transformative journey of self-discovery,
                    empowering you to craft a narrative that fills you with
                    pride. "
                  </p>
                  <h3 className="title">
                    Mohammed Hassan Eslami | Senior Manager, Deloitte
                  </h3>
                  <div className="pic">
                    <img src={require("../images/hassan.jpg")} alt="Hassan" />
                  </div>
                </div>
                <div className="testimonial">
                  <p className="description">
                    "Omeed was my Executive Coach at Google during a time when
                    my life was at a crossroads with respect to professional and
                    personal growth. Omeed became a catalyst, expertly guiding
                    me on an introspective journey and was pivotal for the
                    leader and person I am today, and continue to strive for.
                    Through insightful questioning and a safe space for
                    exploration, Omeed helped me unearth hidden values that
                    fueled not only my leadership style but also my core
                    identity. This newfound alignment became the compass guiding
                    my career and personal decisions both at Google, and later
                    on when I took on Executive roles at 2 other startups.
                    Omeed's unwavering support and powerful tools empowered me
                    to navigate change with confidence. Even today, years later,
                    I actively revisit notes from our sessions. They're more
                    than reminders; they're echoes of the "aha!" moments that
                    redefined my path. If you're seeking growth on any level,
                    personal or professional, look no further than Omeed. The
                    journey he guides you on might just change your life, as it
                    did mine."
                  </p>
                  <h3 className="title">Jeena James | Entrepreneur</h3>
                  <div className="pic">
                    <img src={require("../images/jeena.jpg")} alt="Jeena" />
                  </div>
                </div>
                <div className="testimonial">
                  <p className="description">
                    "As a serial entrepreneur and investor, I've engaged Omeed
                    both as an executive coach to think through the implications
                    of when making decisions does't just impact me, but others.
                    Omeed's secret sauce is his ability to expand the art of the
                    possible as a coach while driving practical execution as a
                    consultant. The ability to engage the same person in both
                    contexts has far exceeded my expectations. I have a
                    flourishing family, expanded company portfolio, and the
                    confidence to handle more with less. Work with Omeed if you
                    get the chance. You'll be glad you did."
                  </p>
                  <h3 className="title">
                    Mohammed Ali Eslami | Ph.D Chief Scientist, Co-founder
                    Netrias, LLC
                  </h3>
                  <div className="pic">
                    <img
                      src={require("../images/Mohammed.jpg")}
                      alt="Mohammed"
                    />
                  </div>
                </div>

                <div className="testimonial">
                  <p className="description">
                    "Omeed Rezaian is an exceptional coach. He listens actively
                    and asks insightful questions that ignite curiosity and
                    exploration. Omeed was critical to how our team formulated
                    and delivered on transformative proposals on the future of
                    the learning function within our business. My collaboration
                    with Omeed as a coach helped me gain greater clarity,
                    confidence, and self-assurance in my own leadership journey.
                    He has the expertise to know which seeds to plant and the
                    humility to guide you while you learn to make them grow. I
                    highly recommend Omeed Rezaiain to anyone who wants to
                    navigate change and unleash untapped potential."
                  </p>
                  <h3 className="title">
                    Jean-Michel Robiou | Business Program Manager Google
                  </h3>
                  <div className="pic">
                    <img src={require("../images/jean.jpg")} alt="Jean" />
                  </div>
                </div>

                <div className="testimonial">
                  <p className="description">
                    "Omeed is skilled at unlocking teams' potential - helping
                    them identify and explore the challenges before them and
                    strategically align on a path for the future. He shapes
                    individuals into a true team by helping members relate to
                    each other on a personal level and craft a set of shared
                    values and goals that lends identity and common purpose to
                    the group. While facilitating, he understands when to use a
                    light-hand to steer conversation and when to insert himself
                    to challenge groups to see past their assumptions. His
                    ability to build consensus around team norms supports both
                    output and organizational health, creating groups that
                    achieve at the highest levels."
                  </p>
                  <h3 className="title">
                    Tiffany Bartish-Katz | Operations Business Partner Google
                  </h3>
                  <div className="pic">
                    <img src={require("../images/tiffany.jpg")} alt="Tiffany" />
                  </div>
                </div>

                <div className="testimonial">
                  <p className="description">
                    "I met Omeed at just the right time - our business was
                    scaling to a new level, and as a leader I needed to grow
                    too. Omeed really helped me, the leadership team and whole
                    organization grow through a combination of proven frameworks
                    he’s an expert in with weekly coaching sessions that could
                    and would cover everything under the sun. What stands out
                    most about Omeed is his commitment to excellence. He’s a
                    true professional who holds himself to the highest
                    standards, not satisfied until he’s delivered incredible
                    value."
                  </p>
                  <h3 className="title">
                    Chris Blauvelt | Founder & CEO LaunchGood.com
                  </h3>
                  <div className="pic">
                    <img src={require("../images/chris.jpg")} alt="Chris" />
                  </div>
                </div>

                <div className="testimonial">
                  <p className="description">
                    "Our team is responsible for helping Google build a culture
                    of health and wellbeing. We first engaged Omeed to help
                    redesign our annual strategy. This resulted in a newly
                    articulated three year strategy, the robustness of which was
                    tested during the pandemic and has stood the test of time.
                    Since then, I’ve engaged Omeed as a thought partner on a
                    variety of topics, including transformation, organizational
                    structure, capability building and more. For every topic I
                    brought up, Omeed: Offered actionable advice, expertise,
                    and/or a “rule of thumb” Helped me define the context and
                    problem without making me feel talked down to Enabled me to
                    choose my next few moves to make progress, on my terms
                    Nothing about him is cookie-cutter. He speaks fluently at
                    the team and individual levels, and does so balanced with a
                    deep sense of humanity. This allowed him to meet us where we
                    are at and that has made all the difference"
                  </p>
                  <h3 className="title">
                    Newton Cheng |Director, Health and Performance Google
                  </h3>
                  <div className="pic">
                    <img src={require("../images/newton.jpg")} alt="newton" />
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
