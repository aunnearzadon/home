'use client';

import React, { useState } from 'react';
import { Timeline, workExperience } from "@/components/timeline";

export default function WorkExperience() {
  const [currentTab, setCurrentTab] = useState('softwareDevelopment')
  const [timeline, setTimeline] = useState(workExperience.softwareDevelopment)

  const setExperience = (event: React.FormEvent, key: 'softwareDevelopment' | 'writing') => {
    event.preventDefault()
    setCurrentTab(key)
    setTimeline(workExperience[key])
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center">
        <h1 className="font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">Work Experience</h1>
        <nav className="flex justify-center p-6" aria-label="Global">
          <div className="flex gap-x-12">
            <a href="#" onClick={(e) => setExperience(e, 'softwareDevelopment')} className={`${currentTab == 'softwareDevelopment' ? "font-black underline" : "font-semibold"} text-sm leading-6 text-gray-900`}>Software Development</a>
            <a href="#" onClick={(e) => setExperience(e, 'writing')} className={`${currentTab == 'writing' ? "font-black underline" : "font-semibold"} text-sm leading-6 text-gray-900`}>Writing</a>
          </div>
        </nav>
        
        <Timeline timeline={timeline.toReversed()} />
        
        {timeline.map((experience, index) => (
          <div id={experience.company} key={index} className="mt-6 text-lg leading-8 text-gray-600 text-justify">
            <h2 className="font-bold">{experience.title}</h2>
            <p>{experience.company}</p>
            <p>{experience.dateStart} - {experience.dateEnd}</p>
            <p>{experience.description}</p>
          </div>
        ))}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="/home/about-me" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">About me</a>
          <a href="/home/contact-me" className="text-sm font-semibold leading-6 text-gray-900">Contact me <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  )
}