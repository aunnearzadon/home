export default function AboutMe() {
  const paragraphs = [
    `I am a software developer, hailing from the beautiful islands of the Philippines and recently moved to The United Kingdom to follow my dreams and my family’s.`,
    `Throughout my career, I have developed a robust skill set that includes advanced proficiency in Vue.js, HTML5, CSS3, and JavaScript. I have participated in various projects that required building dynamic, responsive, and user-centric web applications. My experience with Vue.js has allowed me to create user-friendly web applications. Aside from Vue.js, I also have experience in other front-end platforms such as Angularjs and Angular 2 where I started my focus on doing frontend development.`,
    `In addition to my front-end experience, I have basic knowledge of Amazon Web Services (AWS), which I used in deploying and managing web applications in a cloud environment. This combination of skills enables me to not only develop compelling front-end solutions but also understand and contribute to the broader infrastructure and deployment process. Aside from developing AWS Lambda functions, I also have experience in PHP, Laravel, and MySQL for my background in back-end development.`,
    `One of my notable projects involved developing a parcels monitoring and management web application for a multinational logistics and postal company in the nordic region. Using Vue.js, I pioneered a team of developers to create a highly interactive and intuitive user interface. This project required close collaboration with back-end developers, UX/UI designers, and high level stakeholders, highlighting my ability to work effectively in cross-functional teams.`,
    `I also have experience in working across different types of industries and I have worked in different team and company sizes, such as startups, medium-scale outsourcing companies, and multinational corporations. I am confident that my technical skills and industry experience, combined with my passion for creating exceptional user experiences, will make me a valuable asset to any company.`,
    `One thing that sets me apart, however, is that I love solving problems. I believe that problems can be solved in many different ways. I do not consider myself to be the best technical person in all teams I take part of so I don’t want to say which technology can fix which problem. In fact, I would rather consider myself not knowledgeable if it means that I can learn more from what the users need and how I can deliver it to them. For me, any website can be created using any framework or platform and their value to stakeholders will still be the same. With that said, I enjoy putting the pieces together so that the users can be happy.`,
    `Thank you for taking the time to read through. I hope we get the chance to work together on projects soon.`,
    `In the meantime, please check out the rest of this site.`,
    `Best regards,`,
    `Aunne`,
  ]

  return (
    <div className="max-w-2xl">
      <div className="text-center">
        <h1 className="font-bold tracking-tight text-gray-900 sm:text-6xl">About Me</h1>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mt-6 text-lg leading-8 text-gray-600 text-justify">
            {paragraph}
          </p>
        ))}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="/home" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Home</a>
          <a href="/home/work-experience" className="text-sm font-semibold leading-6 text-gray-900">Work experience <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  )
}