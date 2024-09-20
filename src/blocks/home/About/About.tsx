"use client"
import React, { useState, useEffect, useRef } from 'react'
import whoiam from "../../../assets/whoiam.jpg"
import { SlideIn, TextReveal, FadeIn } from '@/blocks/ui';
import { Newspaper, CalendarDays } from 'lucide-react';
import { About as AboutType } from '@/utils/interfaces';

interface AboutProps {
  aboutData: AboutType;
}

export default function AboutClient({ aboutData }: AboutProps) {
  const [yearsExperience, setYearsExperience] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const aboutRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    { label: "Who I am ?", icon: Newspaper, id: "#whoIam" },
    { label: "Experience", icon: CalendarDays, id: "#ourHistory" },
  ];

  const experiences = aboutData.experience.sort((a, b) => a.order - b.order);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const yearsInterval = setInterval(() => {
      setYearsExperience((prev) => {
        if (prev >= aboutData?.total_experience) {
          clearInterval(yearsInterval);
          return aboutData?.total_experience;
        }
        return prev + 1;
      });
    }, 100);

    const clientsInterval = setInterval(() => {
      setHappyClients((prev) => {
        if (prev >= aboutData.total_clients) {
          clearInterval(clientsInterval);
          return aboutData.total_clients;
        }
        return prev + 5;
      });
    }, 50);

  };

  return (
    <section
      className="relative bg-no-repeat min-h-screen h-auto lg:bg-none overflow-x-none pb-20"
      style={{
        backgroundImage: `url(${whoiam.src})`,
        backgroundPosition: 'right -150px top 5px',
      }}
      id="about"
    >
      <SlideIn className="flex flex-col justify-center ">
        <nav className="text-center  ">
          <ul className="inline-block bg-gray-100 rounded-full whitespace-nowrap overflow-auto max-w-full mb-10">
            {tabs.map((tab, index) => (
              <li key={index} className="inline-block m-1">
                <a
                  href={tab.id}
                  role="tab"
                  aria-expanded={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                  className={`relative font-semibold text-sm lg:px-10 lg:py-5 px-4 py-3 flex items-center rounded-full group ${index === activeIndex ? 'bg-white pointer-events-none text-black' : ''
                    }`}
                >
                  <tab.icon
                    className={`md:flex hidden md:text-4xl group-hover:text-primary ${index === activeIndex ? 'text-primary' : 'text-primary/50'
                      } lg:mr-4`}
                  />
                  <TextReveal className="group-hover:text-black">{tab.label}</TextReveal>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SlideIn>

      {/* About Me */}
      {activeIndex === 0 && (
        <FadeIn>
          <div className="tab-content1" ref={aboutRef}>
            <div
              role="tabpanel1"
              className="tab-pane fade active in  md:px-20 md:pt-16 md:pb-12"
              id="whoWeAre"
            >
              <div className="grid md:grid-cols-12 gap-4">
                <div className="md:col-span-7 flex flex-col justify-center p-4 z-10">
                  <h2 className="lg:text-4xl text-3xl text-center lg:text-left font-semibold text-black mb-8 leading-tight">
                    Over <em className="font-normal">{aboutData?.total_experience} years</em> Leading Innovation in Tech!
                  </h2>

                  <p className="text-paceBlue/60 mb-12 leading-relaxed lg:text-md text-justify">
                    {aboutData.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                    <div className="counter">
                      <span className="text-primary text-5xl font-bold">{yearsExperience}</span>
                      <h5 className="text-lg font-semibold text-paceBlue">Years of experience</h5>
                    </div>
                    <div
                      className="counter"
                      data-animation="fadeIn"
                      data-animation-delay="aboutData.total_clients"
                    >
                      <span className="text-primary text-5xl font-bold">{happyClients}+</span>
                      <h5 className="text-lg font-semibold text-paceBlue">Happy Clients</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      )}

      {/* History */}
      {activeIndex === 1 && (
        <FadeIn>
          <div className=" md:px-20 md:pt-16 md:pb-12">
            <div className="grid md:grid-cols-12 gap-4">
              <div className="md:col-span-8 flex flex-col justify-center p-4 z-10">
                <div className="grid md:grid-cols-2 gap-4 relative">
                  {experiences.map((exp,id) => (
                    <div key={id} className="relative flex flex-col px-3 py-4">
                      <div className="flex flex-col items-start">
                        <time className="text-primary text-2xl font-bold tracking-wide uppercase my-1">
                          {exp.start_date} - {exp.end_date}
                        </time>
                        <h3 className="text-lg font-semibold text-paceBlue tracking-wide">
                          {exp.role}
                        </h3>
                        {/* Display the company name */}
                        <div className="mt-1 text-sm text-paceBlue/60">{exp.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      )}

    </section>
  )
}
