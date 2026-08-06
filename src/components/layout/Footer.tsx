import { Github, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 bg-background relative z-10">
      <div className="container mx-auto px-6">

        <div className="flex justify-center gap-6 mb-6">

          <a
            href="https://github.com/jyhjgnzb2n-hue"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.instagram.com/mr_raakesh_bhajwad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-pink-500 transition-colors"
          >
            <Instagram size={22} />
          </a>

          <a
            href="https://youtube.com/@darktruthfilees?si=2TCjw04KKFSa-vdb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-red-500 transition-colors"
          >
            <Youtube size={22} />
          </a>

        </div>

        <p className="text-center text-sm text-muted-foreground">
          © 2026 <span className="text-white font-semibold">Rakesh Bhajwad</span>.
          All Rights Reserved.
        </p>

        <p className="text-center text-xs text-muted-foreground mt-2">
          Built with React • TypeScript • Tailwind CSS • Vercel
        </p>

      </div>
    </footer>
  );
}
