const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-10 py-5 bg-black relative">
      <img src="/images/icon.png" className="absolute left-5 w-10 h-10" />
      <h1 className="text-white ml-8 font-bold">My Portfolio</h1>

      <nav>
        <a className="text-white ml-5">About</a>
        <a className="text-white ml-5">Education</a>
        <a className="text-white ml-5">Skills</a>
        <a className="text-white ml-5">Contact</a>
      </nav>
    </header>
  );
};
export default Navbar;