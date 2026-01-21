import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, BookOpen, Heart, Moon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NameCard from "@/components/NameCard";
import NameModal from "@/components/NameModal";
import IslamicPattern from "@/components/IslamicPattern";
import { namesData, NameData } from "@/data/names";

const Index = () => {
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const names = namesData as Record<string, NameData>;

  const filteredNames = useMemo(() => {
    const entries = Object.entries(names);
    if (!searchQuery.trim()) return entries;
    
    const query = searchQuery.toLowerCase();
    return entries.filter(([_, data]) => 
      data.name.toLowerCase().includes(query) || 
      data.meaning.toLowerCase().includes(query)
    );
  }, [names, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <IslamicPattern />
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Decorative element */}
            <div className="flex justify-center">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
                <Moon className="w-6 h-6 text-primary animate-pulse" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
              </div>
            </div>

          <h2 className="font-amiri text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed">
              Discover the <span className="text-primary">33 Beautiful Names</span> of Allah
            </h2>
            
            <p className="text-muted-foreground font-arabic leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
              These selected names of Allah represent His divine attributes, each revealing His infinite mercy, 
              power, wisdom, and perfection. Understanding these names deepens our connection with the Creator 
              and transforms our daily worship and life.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-foreground">Qur'anic References</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-foreground">Daily Reflections</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-foreground">Spiritual Guidance</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-md mx-auto mb-10"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or meaning..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 font-arabic"
            />
          </div>
        </motion.div>

        {/* Names count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          {filteredNames.length === 33 ? (
            <>Showing all <span className="text-primary font-medium">33</span> names</>
          ) : (
            <>Found <span className="text-primary font-medium">{filteredNames.length}</span> name{filteredNames.length !== 1 ? 's' : ''}</>
          )}
        </motion.p>

        {/* Names Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredNames.map(([id, data], index) => (
            <NameCard
              key={id}
              id={id}
              name={data.name}
              arabic={data.arabic}
              meaning={data.meaning}
              onClick={() => setSelectedName(id)}
              index={index}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredNames.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground font-arabic">No names found matching "{searchQuery}"</p>
          </motion.div>
        )}
      </main>

      <Footer />

      {/* Name Detail Modal */}
      <NameModal
        isOpen={!!selectedName}
        onClose={() => setSelectedName(null)}
        nameData={selectedName ? names[selectedName] : null}
        nameId={selectedName || ""}
      />
    </div>
  );
};

export default Index;