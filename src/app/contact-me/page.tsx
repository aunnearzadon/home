export default function ContactMe() {
  const contacts = {
    email: "aunnearzadon@outlook.com",
    website: "https://website.beacons.ai/aunnearzadon"
  }

  return (
    <div className="max-w-2xl">
      <div className="text-center">
        <h1 className="font-bold mb-6 tracking-tight text-gray-900 sm:text-6xl">Contact Me</h1>
        {Object.keys(contacts).map((key) => (
          <p key={key} className="text-lg leading-8 text-gray-600 text-justify">
            <span className="capitalize">{key}: </span>
            <span>{contacts[key]}</span>
          </p>
        ))}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="/work-experience" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Work experience</a>
          <a href="https://website.beacons.ai/aunnearzadon" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  )
}