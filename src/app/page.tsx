import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col px-[25vw] py-10 w-full gap-6">
      <h1 className="text-5xl">Digital HQ of <b>Eva Killenberg</b></h1>
      <p>Hi, my name is Eva! Here you will find links to various things I am working on and have worked on. Wanna chat? You can reach me at evakillenberg@gmail.com. Have a great day!</p>
      <h2 className="text-3xl">Enter Here</h2>
      <p> 2025 Site Coming Soon :)</p>
      <h2 className="text-3xl">The Archive</h2>
      <a href="https://evakillenberg.com">
        <div className="flex flex-col w-full hover:scale-101 transition-transform duration-600 ease-in-out border-4 border-black">
          <div className="w-full bg-evayellow text-white text-left p-2 text-xl">
            2020
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
