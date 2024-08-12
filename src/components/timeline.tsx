import React from 'react';

export const Timeline: React.FC<{ timeline: any[] }> = ({ timeline }) => (
  <div className="relative flex justify-between items-center w-full my-8 px-4">
    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300"></div>
    {timeline.map((experience, index) => (
      <TimelineNode 
        key={index}
        dateStart={experience.dateStart}
        company={experience.company}
      />
    ))}
      <TimelineNode 
        dateStart="Present"
        company="-"
      />
  </div>
);

const TimelineNode: React.FC<{ dateStart: string; company: string }> = ({ dateStart, company }) => (
  <div className="flex flex-col items-center relative">
    <span className="mt-2 text-sm font-medium">{dateStart}</span>
    <div className={`w-4 h-4 rounded-full bg-indigo-600 z-10`}></div>
    <a className='mb-2 text-sm font-medium text-gray-600' href={`#${company}`}>{company}</a>
  </div>
);

const softwareDevelopment = [
  {
    title: 'Web Developer',
    company: 'Arcanys',
    dateStart: 'November 2018',
    dateEnd: 'Present',
    description: `
      I use Angular, Vuejs, Nodejs, Javascript, Bootstrap, Tailwind, Serverless framework, and AWS to create internal applications for a client in the nordic region.
    `
  },
  {
    title: 'Laravel Developer',
    company: 'createIT.pl',
    dateStart: 'August 2018',
    dateEnd: 'October 2018',
    description: `
      I used Wordpress, PHP, JQuery, Javascript, and Laravel to help enhance and debug a GDPR Wordpress plugin and also a ski instrutor booking application.
    `
  },
  {
    title: 'Application Development Analyst',
    company: 'Accenture',
    dateStart: 'January 2017',
    dateEnd: 'August 2018',
    description: `
      I used Salesforce Commerce Cloud (formerly Demandware) to help global brands with their e-commerce sites. 
      I provided level 2 technical support for some of these global brands that are using SFCC.
      I used VBA on Microsoft Excel to automate some processes for one of those global brands.
      I helped create reusable templates for SFCC.
      I was part of the company website redesign and rebranding team.
    `
  },
  {
    title: 'Senior Vice President of Product Development',
    company: 'Reminisense Corporation',
    dateStart: 'March 2014',
    dateEnd: 'December 2016',
    description: `
      I used PHP, MySQL, Laravel, Javascript, Jquery, Angularjs and AWS to create a robust online queueing system.
    `
  },
  {
    title: 'Web Developer',
    company: 'PhotoUp',
    dateStart: 'January 2013',
    dateEnd: 'March 2014',
    description: `
      I used Javascript, JQuery, PHP, and MySQL to help develop an online photo editing service website.
    `
  },
  {
    title: 'Systems Engineer',
    company: 'Kyocera Document Solutions',
    dateStart: 'July 2012',
    dateEnd: 'January 2013',
    description: `
      I used C# to help develop a desktop application for printer management and I used Java to help develop the application embedded on the printers to connect with the desktop application.
    `
  }
]

const writing = [
  {
    title: 'Author',
    company: 'The Moving Aunne Blog version 2',
    dateStart: '2024',
    dateEnd: 'Present',
    description: `
      I use Wix to create a new personal blog with more content about moving to the UK as a Filipino dependent immigrant.
    `
  },
  {
    title: 'Writer',
    company: 'Fiverr',
    dateStart: 'February 2013',
    dateEnd: 'May 2013',
    description: `
      I earned $10 doing 2 writing gigs on Fiverr
    `
  },
  {
    title: 'Author',
    company: 'The Moving Aunne Blog',
    dateStart: '2010',
    dateEnd: '2021',
    description: `
      I used Blogger to create my personal blog.
    `
  },
]

export const workExperience = { softwareDevelopment, writing }

