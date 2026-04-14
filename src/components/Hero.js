const Hero = () => {
  return (
    <section
      className="text-center py-24 text-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/hero.jpg')",
      }}
    >
      <h1 className="text-4xl font-bold">Hi, I'm Rei</h1>
      <p className="mt-3">Web Developer | React | Tailwind</p>

      <button className="mt-5 px-8 py-3 bg-red-600 hover:bg-red-700">
        View My Work
      </button>
    </section>
  );
};
export default Hero;