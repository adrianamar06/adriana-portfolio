export default function Navbar() {
  return (
    <header className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-8 rounded-full bg-white/70 px-6 py-3 shadow-lg backdrop-blur-md">
        
        {/* Logo */}
        <a
          href="#"
          className="font-bold text-sky-500 transition-colors hover:text-sky-600"
        >
          Adriana
        </a>

        {/* Navigation */}
        <a
          href="#about"
          className="transition-colors hover:text-sky-500"
        >
          About
        </a>

        <a
          href="#projects"
          className="transition-colors hover:text-sky-500"
        >
          Projects
        </a>

        <a
          href="#experience"
          className="transition-colors hover:text-sky-500"
        >
          Experience
        </a>

        <a
          href="#interests"
          className="transition-colors hover:text-sky-500"
        >
          Interests
        </a>

        <a
          href="#contact"
          className="transition-colors hover:text-sky-500"
        >
          Contact
        </a>

      </nav>
    </header>
  );
}