import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col m-auto py-10 w-[50vw] min-w-[700px] gap-3">
      <h1 className="text-5xl">Digital HQ of <b>Eva Killenberg</b></h1>
      <div className="flex gap-2">
        <a className="underline" href="https://github.com/evakill">Github</a> &middot;
        <a className="underline" href="https://www.linkedin.com/in/evakill/">LinkedIn</a>
      </div>
      <p>Hi, my name is Eva! Here you will find links to various things I am working on and have worked on. Wanna chat? You can reach me at evakillenberg@gmail.com. Have a great day!</p>
      <h2 className="text-3xl mt-3">Enter Here</h2>
      <a href="https://2025.evakillenberg.com">
        <div className="flex flex-col w-full hover:scale-101 transition-transform duration-600 ease-in-out border-4 border-black">
          <div className="w-full bg-green-600 text-white text-left p-2 text-xl">
            Check out my 2025 Portfolio
          </div>
          <Image
            src="/v2025-header.png"
            alt="My Website From 2025"
            width={800}
            height={432}
            style={{ width: "80vw", height: "auto", display: "block", margin: "0 auto" }}
            sizes="80vw"
          />
        </div>
      </a>
      <h2 className="text-3xl mt-3">The Archive</h2>
      <a href="http://evakillenberg.herokuapp.com">
        <div className="flex flex-col w-full hover:scale-101 transition-transform duration-600 ease-in-out border-4 border-black">
          <div className="w-full bg-evayellow text-white text-left p-2 text-xl">
            2020 Personal Site
          </div>
          <Image
            src="/v2020-header.png"
            alt="My Website From 2020"
            width={800}
            height={432}
            style={{ width: "80vw", height: "auto", display: "block", margin: "0 auto" }}
            sizes="80vw"
          />
        </div>
      </a>
    </div>
  );
}
