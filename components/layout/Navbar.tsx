export default function Navbar() {
  return (
    <header className="fixed top-5 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-8 rounded-full bg-white/70 px-6 py-3 shadow-lg backdrop-blur-md">
        <a href="#" className="font-bold text-sky-500">
          Adriana
        </a>

        <a href="#about" className="hover:text-sky-500 transition-colors">
          About
        </a>

        <a href="#projects" className="hover:text-sky-500 transition-colors">
          Projects
        </a>

        <a href="#experience" className="hover:text-sky-500 transition-colors">
          Experience
        </a>

        <a href="#contact" className="hover:text-sky-500 transition-colors">
          Contact
        </a>
      </nav>
    </header>
  );
}