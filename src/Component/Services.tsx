"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

export default function Services() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate section title
    gsap.fromTo(
      "#services h2",
      { opacity: 0, y: 300 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#services h2",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate service cards
    (gsap.utils.toArray(".service-card") as HTMLElement[]).forEach(
      (card, index) => {
        const animationProps =
          index < 3 ? { opacity: 0, x: -700 } : { opacity: 0, x: 700 };

        gsap.fromTo(card, animationProps, {
          opacity: 1,
          x: 0,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        });
      }
    );

    // Animate "Know More" button
    // gsap.fromTo(
    //   ".services-know-more-btn",
    //   { opacity: 0, y: 200 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1.2,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: ".services-know-more-btn",
    //       start: "top 85%",
    //       toggleActions: "play none none reverse",
    //     },
    //   }
    // );

    // Smooth scroll (optional)
    const buttons = document.querySelectorAll(".scroll-to-services");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const element = document.getElementById("services");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  // Function to animate extra cards
  const animateExtraCards = () => {
    requestAnimationFrame(() => {
      const newCards = document.querySelectorAll(".extra-service-card");

      (gsap.utils.toArray(newCards) as HTMLElement[]).forEach((card, index) => {
        const fromProps =
          index < 3 ? { opacity: 0, x: -700 } : { opacity: 0, x: 700 };

        gsap.fromTo(card, fromProps, {
          opacity: 1,
          x: 0,
          duration: 1.8,
          ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });
  };
  
  return (
    <section
    id="services"
    className="scroll-mt-24 relative overflow-hidden bg-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-25 md:py-15 min-h-[90vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-sm sm:text-base text-gray-500 font-medium uppercase tracking-wide">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mt-1 sm:mt-2">
            We Provide Best Services
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Card 1 */}
         <Link href="/Service#s1">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6 text-center service-card">
              <div className="bg-yellow-200 rounded-2xl mb-4 sm:mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
                <img
                  src="/demand-generation.png"
                  alt="Demand Generation"
                  className="w-full h-full max-w-[180px] max-h-[180px] sm:max-w-[220px] sm:max-h-[220px] object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 sm:mb-3">
                Demand Generation
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Using the AIDA methodology (Attention, Interest, Desire, Action),
                we ensure every campaign captures attention, nurtures interest,
                builds desire, and drives measurable action.
              </p>
            </div>
          </Link>
          <Link href="/Service#s2">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6 text-center service-card">
              <div className="bg-yellow-200 rounded-2xl mb-4 sm:mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
                <img
                  src="/content-syndication.png"
                  alt="Content Syndication"
                  className="w-full h-full max-w-[180px] max-h-[180px] sm:max-w-[220px] sm:max-h-[220px] object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 sm:mb-3">
                Content Syndication
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We amplify your content’s reach by distributing it across trusted
                industry platforms, networks, and targeted databases.
              </p>
            </div>
          </Link>
          <Link href="/Service#s3">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6 text-center service-card">
              <div className="bg-yellow-200 rounded-2xl mb-4 sm:mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
                <img
                  src="/buyer-intent.png"
                  alt="Buyer Intent Leads"
                  className="w-full h-full max-w-[220px] max-h-[180px] object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 sm:mb-3">
                Buyer Intent Leads
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Through our proprietary publishing network, we gather verified
                first-party intent data by tracking clicks, downloads, and other
                behavioral signals that indicate buying readiness.
              </p>
            </div>
          </Link>
          <Link href="/Service#s4">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6 text-center service-card">
              <div className="bg-yellow-200 rounded-2xl mb-4 sm:mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
                <img
                  src="webinar.png"
                  alt="Event & Webinar Registrations"
                  className="w-full h-full max-w-[200px] max-h-[200px] object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 sm:mb-3">
                Event & Webinar Registrations
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We manage end-to-end attendee acquisition for your events and
                webinars, targeting professionals most likely to benefit from your
                solutions.
              </p>
            </div>
          </Link>

          {/* Card 5 */}
          <Link href="/Service#s5">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6 text-center service-card">
              <div className="bg-yellow-200 rounded-2xl mb-4 sm:mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
                <img
                  src="/abm.png"
                  alt="Account-Based Marketing"
                  className="w-full h-full max-w-[180px] max-h-[180px] object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 sm:mb-3">
                Account-Based Marketing (ABM)
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We develop personalized, high-touch campaigns aimed at your most
                valuable target accounts, aligning sales and marketing efforts for
                maximum impact.
              </p>
            </div>
          </Link>

          {/* Card 6 */}
          <Link href="/Service#s6">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6 text-center service-card">
              <div className="bg-yellow-200 rounded-2xl mb-4 sm:mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
                <img
                  src="software-dev.png"
                  alt="Software Development"
                  className="w-full h-full max-w-[200px] max-h-[150px] object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 sm:mb-3">
                Software Development
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Our team delivers custom, scalable, and secure software solutions
                — from modern web apps to enterprise systems that optimize your
                workflows and enable digital transformation.
              </p>
            </div>
          </Link>
        </div>

        {/* Button */}
        {/* Button */}
        {!showMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => {
                setShowMore(true);
                animateExtraCards(); // Animate after showing
              }}
              className="relative overflow-hidden px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg font-semibold text-white bg-[#1C1C57] w-full sm:w-auto group transition-all duration-500 services-know-more-btn"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                Know More
              </span>
              <span className="absolute inset-0 bg-yellow-300 top-full group-hover:top-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-t-[100%]"></span>
            </button>
          </div>
        )}

        {showMore && (
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 extra-service-section">
            {/* Digital Marketing */}
           <Link href="/Service#s7">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 text-center service-card extra-service-card">
                <div className="bg-yellow-200 rounded-2xl mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
                  <img
                    src="/CTA.png"
                    alt="Digital Marketing"
                    className="w-full h-full max-w-[200px] max-h-[200px] object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3">
                  Digital Marketing
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We run multi-platform campaigns across search, social, and programmatic
                  channels to boost visibility, capture attention, and drive conversions.
                  Our approach blends SEO, paid advertising, content marketing, and
                  analytics to deliver sustainable growth. Digital is where your customers
                  live—our strategies ensure you’re visible before your competitors.
                </p>
              </div>
          </Link>
          <Link href="/Service#s8">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 text-center service-card extra-service-card">
                <div className="bg-yellow-200 rounded-2xl mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
                  <img
                    src="/demand-generation.png"
                    alt="Lead Generation"
                    className="w-full h-full max-w-[200px] max-h-[200px] object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3">
                  Lead Generation
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We use precision targeting and value-driven outreach to attract, nurture,
                  and qualify leads. From top-of-funnel awareness to sales-ready
                  engagement, our process delivers warm, conversion-focused leads. Quality
                  leads mean your sales team spends less time chasing and more time
                  closing.
                </p>
              </div>
           </Link>
           <Link href="/Service#s9">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 text-center service-card extra-service-card">
                <div className="bg-yellow-200 rounded-2xl mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
                  <img
                    src="/CTA.png"
                    alt="Email Marketing"
                    className="w-full h-full max-w-[200px] max-h-[200px] object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3">
                  Email Marketing
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We design and execute personalized email campaigns that resonate with
                  your target audience—whether you’re nurturing existing relationships,
                  driving event attendance, or promoting content. Email remains the
                  highest ROI channel for B2B marketing—ours are built for engagement and
                  conversion.
                </p>
              </div>
            </Link>
            <Link href="/Service#s10">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 text-center service-card extra-service-card">
                <div className="bg-yellow-200 rounded-2xl mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
                  <img
                    src="/demand-generation.png"
                    alt="Appointment Generation"
                    className="w-full h-full max-w-[200px] max-h-[200px] object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3">
                  Appointment Generation
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We identify decision-makers, validate their interest, and set up
                  confirmed meetings with your sales team—removing the friction of cold
                  outreach. Your sales team stays focused on closing deals, while we
                  handle the time-consuming prospecting work.
              </p>
                </div>
            </Link>
            <Link href="/Service#s11">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 text-center service-card extra-service-card">
                <div className="bg-yellow-200 rounded-2xl mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
                  <img
                    src="/CTA.png"
                    alt="SDR-as-a-Service"
                    className="w-full h-full max-w-[200px] max-h-[200px] object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3">
                  SDR-as-a-Service
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Our in-house Sales Development Representatives (SDRs) operate as a
                  seamless extension of your sales team—driving consistent, high-quality
                  lead generation and appointment setting. We leverage your brand voice,
                  combined with our enriched data and proven outreach strategies, to
                  ensure every conversation adds value and builds your pipeline.
                </p>
                </div>
            </Link>

            {/* Onshore and Offshore Services */}
            <Link href="/Service#s12">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 text-center service-card extra-service-card">
                <div className="bg-yellow-200 rounded-2xl mb-5 flex items-center justify-center h-48 sm:h-60 overflow-hidden">
                  <img
                    src="/CTA.png"
                    alt="Onshore and Offshore Services"
                    className="w-full h-full max-w-[200px] max-h-[200px] object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3">
                  Onshore and Offshore Services
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We help businesses achieve efficiency and scalability through both
                  onshore and offshore services. Our onshore solutions ensure seamless
                  collaboratiocontextualize within your local market, while offshore services provide
                  access to global talent and cost advantages—delivering optimized,
                  sustainable growth.
                </p>
                </div>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
