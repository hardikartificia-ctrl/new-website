import footerBanner from "@/assets/footer-banner.jpg";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 relative overflow-hidden">
      <div className="container-custom relative">
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <img src={footerBanner} alt="Popey AI" className="max-w-full h-auto rounded-lg shadow-lg opacity-90 max-h-[300px] object-cover" />
          </div>
          <p className="text-lg font-bold mb-2">Popey AI Business Solutions</p>
          <p className="text-sm mb-4">
            Your Design Partner That Never Sleeps
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
            <a href="mailto:info@popeyai.com" className="hover:text-primary-light transition-colors">
              info@popeyai.com
            </a>
            <span>|</span>
            <a href="https://wa.me/919104488859" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
              +91 9104488859
            </a>
            <span>|</span>
            <span>Vadodara, Gujarat, India</span>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Serving USA | UK | Australia | Europe | Middle East | Singapore | © {new Date().getFullYear()}          Popey AI Business Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
