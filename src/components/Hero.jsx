const Hero = () => {
  return (
    <header className="py-20 px-5">
      <div className="flex justify-between items-center max-w-6xl mx-auto gap-10">
        <div className="max-w-xl">
          <h1 className="mb-5 font-bold text-3xl">Frontend Mentor Projects</h1>
          <p className="mb-5 text-xl">
            Frontend Mentor challenges help you improve your coding skills by
            building realistic projects. This is a compilation of all the
            frontend mentor projects I have built.
          </p>
          <a
            href="https://www.frontendmentor.io/"
            target="_blank"
            rel="noreferrer"
            className=" bg-[#60dbfb] hover:bg-[#60dbfb]/60 py-2 px-7 inline-block rounded-md uppercase font-bold"
          >
            Visit frontend mentor
          </a>
        </div>
        <div className="hidden md:block">
          <img
            src="https://media.giphy.com/media/6DZ8k92zhbw5XGg5EL/giphy.gif"
            alt="gif"
            className="md:max-w-96"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
