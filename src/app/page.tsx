export default function Home() {
  return (
    <div className="max-w-2xl">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome to my site</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">Hi, my name is Aunne Rouie Arzadon. <br/> I am a Filipino Software Engineer now living in the UK</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="https://website.beacons.ai/aunnearzadon" target="_blank" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Blog</a>
          <a href="/about-me" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  );
}
