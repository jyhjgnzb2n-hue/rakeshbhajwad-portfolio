export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-background text-center relative z-10">
      <div className="container mx-auto px-6">
        <p className="text-muted-foreground text-sm flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
          <span>© 2026 Rakesh Bhajwad.</span>
          <span className="hidden md:inline">•</span>
          <span>Built with passion while learning Web Development, AI, and Content Creation.</span>
        </p>
      </div>
    </footer>
  );
}
