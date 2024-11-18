import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 bg-gray-100">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Ahmed Ali Kanhar
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold animate-colorChange">
          Web Developer
        </h2>
        <p className="mt-4 text-lg text-gray-600">
        I am Ahmed Ali a web developer specializing in dynamic responsive websites using Next.js TypeScript and Tailwind CSS.</p>
        <button className="mt-6 px-6 py-3 text-white font-medium rounded-lg shadow-lg animate-buttonColorChange transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 focus:outline-none focus:ring-4 focus:ring-blue-400 active:scale-95">
          Get in Touch
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Image
          src="/images/image.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
