import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-black">
      <section
        className="relative min-h-screen w-full px-4 text-white"
        style={{
          backgroundImage: "url('/skyline-bg-picture.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <header className="relative z-10">
          <nav className="mx-auto flex w-full max-w-6xl items-start justify-between pb-8 pt-0">
            <a href="#" className="relative h-38 w-38 cursor-pointer">
              <Image
                src="/JacksCapitalLogo.png"
                alt="Jack's Capital logo"
                fill
                className="object-contain"
                priority
              />
            </a>
            <div className="mt-8 flex items-center gap-8 text-[20px] font-bold tracking-wide">
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
        <div className="relative z-10 mx-auto mt-8 w-full max-w-6xl">
          <div className="ml-32 max-w-2xl text-left">
            <p className="text-[#FCE8B6] text-[43px] font-black leading-tight">
              Your entry point to Dubai
            </p>
            <p className="mt-2 pl-6 text-[#FCE8B6] text-[43px] font-black leading-tight">
              Business, Residencies, Growth
            </p>
          </div>
        </div>
        <div className="absolute bottom-20 left-1/2 z-10 w-full max-w-6xl -translate-x-1/2 px-4">
          <div className="flex flex-wrap justify-center gap-10">
            <a
              href="#contact"
              className="cursor-pointer rounded-full bg-[#F18B41] px-10 py-3 text-[18px] font-bold text-[#FAFAFA] transition-colors hover:bg-[#F2A05F]"
            >
              Book a Meeting
            </a>
            <a
              href="#services"
              className="cursor-pointer rounded-full border-2 border-[#FCE8B6] px-10 py-3 text-[18px] font-bold text-[#FCE8B6] transition-colors hover:border-[#FDEBCC] hover:text-[#FDEBCC]"
            >
              Our Services
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </section>
    </main>
  );
}
