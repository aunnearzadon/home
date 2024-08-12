export default function AboutMe() {
  return (
    <div className="max-w-2xl">
      <div className="text-center">
        <h1 className="font-bold tracking-tight text-gray-900 sm:text-6xl">About Me</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
          I am a software developer, hailing from the beautiful islands of the Philippines and recently moved to The United Kingdom to follow my dreams and my family’s.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
          With over a decade of experience in software development and five years specializing in Vue.js, I am excited about the opportunity to contribute to your team and help drive your web development projects to new heights.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
          Throughout my career, I have developed a robust skill set that includes advanced proficiency in Vue.js, HTML5, CSS3, and JavaScript.
          I have successfully led and participated in various projects that required building dynamic, responsive, and user-centric web applications. 
          My hands-on experience with Vue.js has allowed me to create efficient, scalable, and maintainable code, ensuring optimal performance and a seamless user experience.
          Aside from Vue.js, I also have experience in other front-end platforms such as Angularjs and Angular 2 where I started my focus on doing frontend development.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
          In addition to my front-end expertise, I possess a basic knowledge of Amazon Web Services (AWS), which has proven invaluable in deploying and managing web applications in a cloud environment.
          This combination of skills enables me to not only develop compelling front-end solutions but also understand and contribute to the broader infrastructure and deployment process.
          I also have experience in PHP, Laravel, and MySQL for my background in back-end development.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
          One of my notable projects involved developing a comprehensive parcels monitoring and management web application for a multinational logistics and postal company in the Nordic region.
          Using Vue.js, I pioneered a team of developers to create a highly interactive and intuitive user interface. 
          This project required close collaboration with back-end developers, UX/UI designers, and high level stakeholders, highlighting my ability to work effectively in cross-functional teams.
          The success of this application was demonstrated by a significant use of the application with great feedback from different stakeholders and the many iterations of improvement throughout the years.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
          I also have experience in working across different types of industries and I have worked in different team and company sizes, such as startups, medium-scale outsourcing companies, and multinational corporations.
          I am confident that my technical skills and industry experience, combined with my passion for creating exceptional user experiences, will be of value to your company.
          I am eager to bring my expertise to your team and contribute to the development of cutting-edge web applications as well as continue to learn as this ever-changing technology industry continues to evolve over time.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
          I look forward to the possibility of discussing how my background, and skills can help you and your team.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="/home" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Home</a>
          <a href="/home/work-experience" className="text-sm font-semibold leading-6 text-gray-900">Work experience <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  )
}