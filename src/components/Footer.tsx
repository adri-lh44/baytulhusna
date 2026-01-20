import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-auto border-t border-border bg-background/95">
      {/* Decorative top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {/* Islamic decorative element */}
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-primary font-amiri text-xl">۞</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <p className="text-muted-foreground font-arabic text-sm max-w-lg">
            "And to Allah belong the most beautiful names, so invoke Him by them."
          </p>
          <p className="text-xs text-muted-foreground">— Qur'an 7:180</p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            <span>for the Ummah</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;