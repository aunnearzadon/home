export default function WorkExperience() {
  const workExperience = [
    {
      title: 'Web Developer',
      company: 'Arcanys',
      dateStart: 'November 2018',
      dateEnd: 'Present',
      description: `
        Spearheaded the migration of legacy systems to scalable cloud-based microservices on AWS for Nordic clientele.
        Developed innovative web applications and features leveraging Angularjs, Bootstrap, Vue.js, Serverless framework, Nodejs and AWS for both internal and external stakeholders.
      `
    },
    {
      title: 'Laravel Developer',
      company: 'createIT.pl',
      dateStart: 'August 2018',
      dateEnd: 'October 2018',
      description: `
        Enhanced and debugged a WordPress GDPR plugin, ensuring compliance and optimal performance.
        Refined a Laravel-based booking application for winter activity instructors, elevating user experience and functionality.
      `
    },
    {
      title: 'Application Development Analyst',
      company: 'Accenture',
      dateStart: 'January 2017',
      dateEnd: 'August 2018',
      description: `
        Collaborated with global Agile teams across the US, Australia, Bulgaria, and India to drive efficient project delivery.
        Improve product inventory management by creating automations in Microsoft Excel using VBA
        Spearheaded development of multinational E-commerce platforms utilizing Salesforce Commerce Cloud (SFCC).
        Delivered Level 2 technical support and proactive site monitoring for SFCC E-commerce properties.
        Innovated by designing reusable SFCC templates, enhancing service offerings and operational efficiency.
        Contributed to the successful redesign of the Accenture corporate website, showcasing technical and creative expertise.
        Led and facilitated training sessions in HTML, CSS, JavaScript, and Angularjs empowering team skill enhancement.
      `
    },
    {
      title: 'Senior Vice President of Product Development',
      company: 'Reminisense Corporation',
      dateStart: 'March 2014',
      dateEnd: 'December 2016',
      description: `
        Spearheaded the development of FeatherQ, a premier online queueing system, enhancing core business operations.
        Expertly utilized MVC design patterns and Laravel framework for robust application development.
        Crafted sophisticated backend controllers and models with PHP and MySQL to fortify system architecture.
        Engineered dynamic front-end functionalities employing HTML, CSS, JQuery, and AngularJS for an intuitive user experience.
        Optimized Agile development workflows, significantly boosting productivity and efficiency.
        Innovated application features, including a RESTful API, SMS integration, WebSocket implementation, and push notifications, to elevate user engagement and satisfaction.
      `
    },
    {
      title: 'Web Developer',
      company: 'PhotoUp',
      dateStart: 'January 2013',
      dateEnd: 'March 2014',
      description: `
        Developed a resilient core business application employing the MVC architecture for enhanced structure and maintainability.
        Converted complex design schematics into responsive, interactive user interfaces using HTML, CSS, and jQuery.
        Designed advanced backend features for models and controllers with PHP and MySQL integration.
      `
    },
    {
      title: 'Systems Engineer',
      company: 'Kyocera Document Solutions Philippines Inc.',
      dateStart: 'July 2012',
      dateEnd: 'January 2013',
      description: `
        Collaborated with an international team across US and Japan to enhance global operational efficiency.
        Engineered robust desktop solutions utilizing C#.NET to optimize client's print policy management.
        Help debug and improve innovative printer applications in JAVA for Multi-Functional Printers, enforcing stringent print restrictions and policies.
      `
    }
  ]
  
  return (
    <div className="max-w-2xl">
      <div className="text-center">
        <h1 className="font-bold tracking-tight text-gray-900 sm:text-6xl">Work Experience</h1>
        {workExperience.map((experience, index) => (
          <div key={index} className="mt-6 text-lg leading-8 text-gray-600 text-justify">
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