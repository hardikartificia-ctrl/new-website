import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/30 bg-black/90 backdrop-blur-xl supports-[backdrop-filter]:bg-black/80 shadow-lg shadow-primary/10">
      <div className="container-custom flex h-20 items-center justify-between">
        <a href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
          <img src={logo} alt="Popey AI Business Solutions Logo" className="h-14 w-auto drop-shadow-[0_0_20px_rgba(79,136,73,0.6)] brightness-110" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-bold text-white hover:text-primary-light transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full">Services</a>
          <a href="#process" className="text-sm font-bold text-white hover:text-primary-light transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full">Process</a>
          <a href="#testimonials" className="text-sm font-bold text-white hover:text-primary-light transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full">Testimonials</a>
          <a href="#faq" className="text-sm font-bold text-white hover:text-primary-light transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full">FAQ</a>
          <a href="#contact" className="text-sm font-bold text-white hover:text-primary-light transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full">Contact</a>
        </nav>
      </div>
    </header>
  );
};
