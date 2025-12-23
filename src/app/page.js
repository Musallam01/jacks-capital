 "use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const { overflow: htmlOverflow } = html.style;
    const { overflow: bodyOverflow } = document.body.style;
    if (menuOpen) {
      html.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      html.style.overflow = htmlOverflow;
      document.body.style.overflow = bodyOverflow;
    }

    return () => {
      html.style.overflow = htmlOverflow;
      document.body.style.overflow = bodyOverflow;
    };
  }, [menuOpen]);

  return (
    <main
      className={`min-h-screen w-full bg-[#FAFAFA] dark:bg-black ${
        menuOpen ? "overflow-hidden" : ""
      }`}
    >
      <section
        className="relative flex min-h-[80vh] w-full flex-col px-4 text-white sm:px-6 lg:px-10"
        style={{
          backgroundImage: "url('/skyline-bg-picture.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <header className="relative z-40">
          <nav className="flex w-full items-start justify-between pb-10 pt-0">
            <a
              href="#"
              className="relative z-40 h-24 w-24 cursor-pointer sm:h-32 sm:w-32 lg:h-38 lg:w-38"
            >
              <Image
                src="/JacksCapitalLogo.png"
                alt="Jack's Capital logo"
                fill
                className="object-contain"
                priority
              />
            </a>
            <button
              type="button"
              className="relative z-40 mt-6 flex h-10 w-10 items-center justify-center text-[#FCE8B6] sm:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              <span
                className={`relative flex h-10 w-10 items-center justify-center ${
                  menuOpen ? "text-[#00353A]" : ""
                }`}
              >
                <span
                  className={`absolute h-0.5 w-7 rounded-full bg-current transition-all duration-200 ${
                    menuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-7 rounded-full bg-current transition-all duration-200 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-7 rounded-full bg-current transition-all duration-200 ${
                    menuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
                  }`}
                />
              </span>
            </button>
            <div
              className={`fixed inset-0 z-20 bg-[#FAFAFA] transition-opacity duration-[300ms] ease-out ${
                menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />
            <div
              className={`fixed inset-0 z-20 flex flex-col items-center justify-center px-6 transition-opacity duration-[300ms] ease-out ${
                menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <nav className="flex w-full max-w-xs flex-col items-center text-[28px] font-bold tracking-wide text-[#00353A] sm:hidden">
                <a
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-6 text-center"
                >
                  Home
                </a>
                <div className="h-px w-full bg-[#F18B4150]" />
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-6 text-center"
                >
                  About
                </a>
                <div className="h-px w-full bg-[#F18B4150]" />
                <a
                  href="#blog"
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-6 text-center"
                >
                  Blog
                </a>
                <div className="h-px w-full bg-[#F18B4150]" />
                <a
                  href="#services"
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-6 text-center"
                >
                  Services
                </a>
                <div className="h-px w-full bg-[#F18B4150]" />
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-6 text-center"
                >
                  Get in Touch
                </a>
              </nav>
            </div>
            <div className="mt-8 hidden items-center gap-8 text-[20px] font-bold tracking-wide sm:flex">
              <a
                href="#home"
                className="relative text-[#FCE8B6] transition-colors after:absolute after:left-1/2 after:-bottom-2 after:h-1 after:w-[120%] after:-translate-x-1/2 after:origin-center after:scale-x-0 after:rounded-full after:bg-[#F18B41] after:transition-transform hover:text-[#F18B41] hover:after:scale-x-100"
              >
                Home
              </a>
              <a
                href="#about"
                className="relative text-[#FCE8B6] transition-colors after:absolute after:left-1/2 after:-bottom-2 after:h-1 after:w-[120%] after:-translate-x-1/2 after:origin-center after:scale-x-0 after:rounded-full after:bg-[#F18B41] after:transition-transform hover:text-[#F18B41] hover:after:scale-x-100"
              >
                About
              </a>
              <a
                href="#blog"
                className="relative text-[#FCE8B6] transition-colors after:absolute after:left-1/2 after:-bottom-2 after:h-1 after:w-[120%] after:-translate-x-1/2 after:origin-center after:scale-x-0 after:rounded-full after:bg-[#F18B41] after:transition-transform hover:text-[#F18B41] hover:after:scale-x-100"
              >
                Blog
              </a>
              <a
                href="#services"
                className="relative text-[#FCE8B6] transition-colors after:absolute after:left-1/2 after:-bottom-2 after:h-1 after:w-[120%] after:-translate-x-1/2 after:origin-center after:scale-x-0 after:rounded-full after:bg-[#F18B41] after:transition-transform hover:text-[#F18B41] hover:after:scale-x-100"
              >
                Services
              </a>
              <a
                href="#contact"
                className="relative text-[#FCE8B6] transition-colors after:absolute after:left-1/2 after:-bottom-2 after:h-1 after:w-[120%] after:-translate-x-1/2 after:origin-center after:scale-x-0 after:rounded-full after:bg-[#F18B41] after:transition-transform hover:text-[#F18B41] hover:after:scale-x-100"
              >
                Get in Touch
              </a>
            </div>
          </nav>
        </header>
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-start pt-20">
          <div className="ml-0 max-w-2xl text-left sm:ml-12 lg:ml-32">
            <p className="text-[#FCE8B6] text-[24px] font-black leading-tight sm:text-[36px] lg:text-[43px]">
              Your entry point to Dubai
            </p>
            <p className="mt-2 pl-3 text-[#FCE8B6] text-[24px] font-black leading-tight sm:pl-4 sm:text-[36px] lg:pl-6 lg:text-[43px]">
              Business, Residencies, Growth
            </p>
          </div>
        </div>
        <div className="absolute bottom-28 left-1/2 z-10 w-full max-w-6xl -translate-x-1/2 px-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-10">
            <a
              href="#contact"
              className="cursor-pointer rounded-full bg-[#F18B41] px-10 py-3 text-[18px] font-bold text-[#FAFAFA] transition-colors hover:bg-[#F2A05F]"
            >
              Book a Meeting
            </a>
            <a
              href="#services"
              className="cursor-pointer rounded-full border-2 border-[#FCE8B6] px-11 py-3 text-[18px] font-bold text-[#FCE8B6] transition-colors hover:border-[#FDEBCC] hover:text-[#FDEBCC]"
            >
              Our Services
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </section>
      <section className="relative flex min-h-screen w-full items-center justify-center bg-[#393939]">
        <button
          type="button"
          className="h-[100px] w-[100px] cursor-pointer bg-transparent"
          aria-label="Play video"
        >
          <svg
            viewBox="0 0 164 164"
            className="h-full w-full"
            aria-hidden="true"
          >
            <polygon
              points="16,12 16,152 148,82"
              fill="#FCE8B6"
              stroke="#FCE8B6"
              strokeWidth="24"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="absolute bottom-0 left-0 flex h-[160px] w-[90vw] translate-y-1/2 items-center bg-[#00353A] pl-4 sm:h-[180px] sm:w-[650px] sm:pl-6 lg:h-[229px] lg:w-[722px] lg:pl-10">
          <div className="max-w-xl text-left">
            <p className="text-[34px] font-bold leading-tight text-[#FCE8B6]">
              Your Trusted Partner for
            </p>
            <p className="mt-2 pl-11 text-[34px] font-bold leading-tight text-[#FCE8B6]">
              Entering and Thriving in Dubai
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full bg-[#FAFAFA] px-10 pb-16">
        <div className="flex w-full items-start justify-between gap-12 pt-30">
          <div className="w-full max-w-[49rem]">
            <p className="text-[20px] font-semibold leading-relaxed text-black">
             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
            <Image
              src="/jacksPictureWideTest.png"
              alt="Jack's Capital city view"
              width={1200}
              height={500}
              className="mt-10 h-auto w-full rounded-2xl object-cover"
            />
          </div>
          <div className="-mt-16 flex w-full max-w-md flex-col items-end">
            <Image
              src="/jacksPictureTest.jpg"
              alt="Jack's Capital team"
              width={500}
              height={600}
              className="h-auto w-full rounded-2xl object-cover"
            />
            <p className="mt-6 w-full text-[17px] font-semibold leading-relaxed text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
            </p>
          </div>
        </div>
      </section>
      <section className="flex h-[100px] w-full items-center bg-[#FCE8B6] px-10">
        <p className="text-[45px] font-bold text-[#00353A]">
          Kickstart or grow your business with our services
        </p>
      </section>
      <div className="h-16 w-full bg-[#FAFAFA]" />
      <section className="w-full bg-[#FAFAFA] px-10">
        <div className="grid w-full grid-cols-3 gap-6">
          <div className="aspect-[4/3] w-full rounded-[25px] bg-[#E5E5E5]" />
          <div className="aspect-[4/3] w-full rounded-[25px] bg-[#E5E5E5]" />
          <div className="aspect-[4/3] w-full rounded-[25px] bg-[#E5E5E5]" />
          <div className="aspect-[4/3] w-full rounded-[25px] bg-[#E5E5E5]" />
          <div className="aspect-[4/3] w-full rounded-[25px] bg-[#E5E5E5]" />
          <div className="aspect-[4/3] w-full rounded-[25px] bg-[#E5E5E5]" />
        </div>
      </section>
    </main>
  );
}
