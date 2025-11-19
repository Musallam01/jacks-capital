import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-black">
      <section
        className="relative min-h-screen w-full text-white"
        style={{
          backgroundImage: "url('/skyline-bg-picture.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <header className="relative z-10">
          <nav className="mx-auto flex w-full max-w-6xl items-start justify-between px-4 pb-8 pt-0">
            <div className="relative h-40 w-40">
              <Image
                src="/JacksCapitalLogo.png"
                alt="Jack's Capital logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-6 flex items-center gap-10 text-[22px] font-bold tracking-wide">
              <a
                href="#about"
                className="relative text-[#FCE8B6] transition-colors after:absolute after:left-1/2 after:-bottom-2 after:h-1 after:w-[120%] after:-translate-x-1/2 after:origin-center after:scale-x-0 after:rounded-full after:bg-[#F18B41] after:transition-transform hover:text-[#F18B41] hover:after:scale-x-100"
              >
                About
              </a>
              <a
                href="#portfolio"
                className="relative text-[#FCE8B6] transition-colors after:absolute after:left-1/2 after:-bottom-2 after:h-1 after:w-[120%] after:-translate-x-1/2 after:origin-center after:scale-x-0 after:rounded-full after:bg-[#F18B41] after:transition-transform hover:text-[#F18B41] hover:after:scale-x-100"
              >
                Approach
              </a>
              <a
                href="#services"
                className="relative text-[#FCE8B6] transition-colors after:absolute after:left-1/2 after:-bottom-2 after:h-1 after:w-[120%] after:-translate-x-1/2 after:origin-center after:scale-x-0 after:rounded-full after:bg-[#F18B41] after:transition-transform hover:text-[#F18B41] hover:after:scale-x-100"
              >
                Contact
              </a>
              <a
                href="#contact"
                className="relative text-[#FCE8B6] transition-colors after:absolute after:left-1/2 after:-bottom-2 after:h-1 after:w-[120%] after:-translate-x-1/2 after:origin-center after:scale-x-0 after:rounded-full after:bg-[#F18B41] after:transition-transform hover:text-[#F18B41] hover:after:scale-x-100"
              >
                Arabic
              </a>
            </div>
          </nav>
        </header>
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </section>
    </main>
  );
}
