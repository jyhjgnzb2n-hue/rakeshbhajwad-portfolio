
import { Github, Instagram, ArrowUp } from 'lucide-react';
const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-background overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 pt-14 pb-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-3 text-xl font-bold text-white"
            >
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm">
                RB
              </span>
              Rakesh Bhajwad
            </a>

            <p className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-xs mx-auto md:mx-0">
              Learning, creating and building towards a future powered by technology and artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-sm font-semibold text-white mb-5">
              Quick Navigation
            </h3>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-sm font-semibold text-white mb-5">
              Connect With Me
            </h3>

            <div className="flex justify-center md:justify-end gap-3">
              <a
                href="https://github.com/jyhjgnzb2n-hue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.instagram.com/mr_raakesh_bhajwad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-pink-500 hover:border-pink-500/40 transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="flex justify-center my-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          <p className="text-xs text-muted-foreground text-center">
            © 2026 <span className="text-white font-semibold">Rakesh Bhajwad</span>.
            All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors group"
          >
            Back to Top
            <span className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
              <ArrowUp size={15} />
            </span>
          </button>

        </div>

        <p className="text-center text-xs text-muted-foreground/60 mt-6">
          Built with React • TypeScript • Tailwind CSS • Framer Motion
        </p>

      </div>
    </footer>
  );
}
