const IslamicPattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 islamic-pattern opacity-100" />
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-background via-background/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-background via-background/80 to-transparent" />
      
      {/* Corner decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-primary/3 blur-3xl" />
      <div className="absolute bottom-40 left-1/4 w-64 h-64 rounded-full bg-primary/3 blur-3xl" />
    </div>
  );
};

export default IslamicPattern;