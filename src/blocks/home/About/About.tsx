"use client"
import React, { useState } from 'react'
import whoiam from "../../../assets/whoiam.jpg"
import { SlideIn, TextReveal, FadeIn } from '@/blocks/ui';
import { Newspaper, CalendarDays } from 'lucide-react';

export default function AboutClient({ aboutData }: { aboutData: any }) {
  console.log("data",aboutData)
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    { label: "Who I am ?", icon: Newspaper, id: "#whoIam" },
    { label: "Experience", icon: CalendarDays, id: "#ourHistory" },
  ];

  return (
    <section
      className="relative bg-no-repeat min-h-screen h-auto lg:bg-none overflow-x-none"
      style={{
        backgroundImage: `url(${whoiam.src})`, 
        backgroundPosition: 'right -150px top 5px',
      }}
      id="about"
    >
      <div className="flex flex-col justify-center">
        <nav className="text-center">
          <ul className="inline-block bg-gray-100 rounded-full whitespace-nowrap overflow-auto max-w-full mb-10">
            {tabs.map((tab, index) => (
              <li key={index} className="inline-block m-1">
                <a
                  href={tab.id}
                  role="tab"
                  aria-expanded={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                  className={`relative font-semibold text-sm lg:px-10 lg:py-5 px-4 py-3 flex items-center rounded-full group ${index === activeIndex ? 'bg-white pointer-events-none text-black' : ''}`}
                >
                  <tab.icon
                    className={`md:flex hidden md:text-4xl group-hover:text-primary ${index === activeIndex ? 'text-primary' : 'text-primary/50'} lg:mr-4`}
                  />
                  <TextReveal className="group-hover:text-black">{tab.label}</TextReveal>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* About Me */}
      {activeIndex === 0 && (
        <FadeIn>
          <div className="tab-content1">
            <div role="tabpanel1" className="tab-pane fade active in md:px-20 md:pt-16 md:pb-12" id="whoWeAre">
              <div className="grid md:grid-cols-12 gap-4">
                <div className="md:col-span-7 flex flex-col justify-center p-4 z-10">
                  <h2 className="lg:text-4xl text-3xl text-center lg:text-left font-semibold text-black mb-8 leading-tight">
                    Over <em className="font-normal">{aboutData?.total_experience} years</em> Leading Innovation in Tech!
                  </h2>

                  <p className="text-paceBlue/60 mb-12 leading-relaxed lg:text-lg text-justify">
                    {aboutData?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      )}
    </section>
  )
}
