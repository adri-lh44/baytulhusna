import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Sparkles, Heart, Sun, Moon, Star, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IslamicPattern from "@/components/IslamicPattern";
import { namesData } from "@/data/names";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SpiritualGuidance = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Get today's name based on the day of the year
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const namesArray = Object.entries(namesData);
  const todaysNameIndex = dayOfYear % namesArray.length;
  const [todaysId, todaysName] = namesArray[todaysNameIndex];

  const filteredNames = searchQuery.trim()
    ? namesArray.filter(([_, data]) => 
        data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.verse.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : namesArray;

  const guidanceCategories = [
    {
      title: "For Patience & Perseverance",
      icon: <Star className="w-5 h-5" />,
      names: ["Al-Hayy", "Al-Qayyum", "Al-Matin", "Al-Qawiyy"],
      description: "Call upon these names when facing trials and seeking steadfastness."
    },
    {
      title: "For Gratitude & Contentment",
      icon: <Heart className="w-5 h-5" />,
      names: ["Ash-Shakur", "Al-Karim", "Al-Wadud", "Al-Hamid"],
      description: "Reflect on these names to cultivate thankfulness and inner peace."
    },
    {
      title: "For Forgiveness & Mercy",
      icon: <Moon className="w-5 h-5" />,
      names: ["Al-Ghafur", "Al-Wasi'", "Al-Wakil"],
      description: "Turn to these names when seeking Allah's forgiveness and mercy."
    },
    {
      title: "For Strength & Protection",
      icon: <Sun className="w-5 h-5" />,
      names: ["Al-Hafiz", "Al-Wali", "Al-Qawiyy", "Al-Matin"],
      description: "Remember these names for protection and divine strength."
    }
  ];

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
          className="text-center mb-12"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
              </div>
            </div>

            <h1 className="font-amiri text-3xl md:text-4xl lg:text-5xl text-foreground">
              <span className="text-primary">Spiritual</span> Guidance
            </h1>
            
            <p className="text-muted-foreground font-arabic text-sm md:text-base max-w-2xl mx-auto">
              Daily reflections, Quranic references, and practical spiritual guidance based on the Beautiful Names of Allah.
            </p>
          </div>
        </motion.section>

        {/* Today's Name Highlight */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 overflow-hidden">
            <div className="absolute inset-0 islamic-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Sun className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Today's Reflection</span>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="font-amiri text-2xl text-primary">{todaysId}</span>
                </div>
                <div>
                  <h2 className="font-amiri text-2xl md:text-3xl text-gold-light">{todaysName.name}</h2>
                  <p className="text-lg text-primary font-arabic" style={{ direction: "rtl" }}>{todaysName.arabic}</p>
                  <p className="text-sm text-muted-foreground">{todaysName.meaning}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground font-arabic leading-relaxed mb-4">
                {todaysName.description}
              </p>
              
              <div className="p-4 rounded-lg bg-card/50 border border-border">
                <p className="text-sm text-muted-foreground italic font-arabic">
                  "{todaysName.verse}"
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tabs Section */}
        <Tabs defaultValue="reflections" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 gap-2 bg-card/50 p-1 rounded-xl border border-border mb-8">
            <TabsTrigger value="reflections" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all">
              <BookOpen className="w-4 h-4 mr-2" />
              Reflections
            </TabsTrigger>
            <TabsTrigger value="quran" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all">
              <Star className="w-4 h-4 mr-2" />
              Quranic Verses
            </TabsTrigger>
            <TabsTrigger value="guidance" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all">
              <Heart className="w-4 h-4 mr-2" />
              Guidance
            </TabsTrigger>
          </TabsList>

          {/* Daily Reflections Tab */}
          <TabsContent value="reflections" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="font-amiri text-2xl text-foreground mb-2">Daily Reflections</h2>
                <p className="text-muted-foreground text-sm">Contemplate the meanings and apply them in your daily life</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {namesArray.slice(0, 6).map(([id, data], index) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-primary font-medium">#{id}</span>
                      <h3 className="font-amiri text-lg text-gold-light group-hover:text-primary transition-colors">
                        {data.name}
                      </h3>
                      <span className="font-arabic text-primary text-sm" style={{ direction: "rtl" }}>
                        {data.arabic}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-arabic leading-relaxed">
                      {data.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Quranic Verses Tab */}
          <TabsContent value="quran" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="font-amiri text-2xl text-foreground mb-2">Quranic References</h2>
                <p className="text-muted-foreground text-sm">Verses from the Holy Quran mentioning these Beautiful Names</p>
              </div>

              {/* Search */}
              <div className="relative max-w-md mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search verses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-arabic"
                />
              </div>

              <div className="space-y-4">
                {filteredNames.map(([id, data], index) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">{id}</span>
                      </div>
                      <h3 className="font-amiri text-lg text-gold-light">{data.name}</h3>
                      <span className="text-sm text-muted-foreground">({data.meaning})</span>
                    </div>
                    <div className="pl-11">
                      <p className="text-muted-foreground font-arabic italic leading-relaxed">
                        "{data.verse}"
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Spiritual Guidance Tab */}
          <TabsContent value="guidance" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="font-amiri text-2xl text-foreground mb-2">Spiritual Guidance</h2>
                <p className="text-muted-foreground text-sm">Practical ways to connect with Allah through His Beautiful Names</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {guidanceCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                        {category.icon}
                      </div>
                      <h3 className="font-amiri text-lg text-foreground">{category.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-arabic mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.names.map(name => (
                        <span
                          key={name}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Morning & Evening Dhikr */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 border border-primary/20">
                <h3 className="font-amiri text-xl text-center text-foreground mb-6">Morning & Evening Dhikr</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-lg bg-card/50">
                    <Sun className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-amiri text-lg text-gold-light mb-2">Morning</h4>
                    <p className="text-sm text-muted-foreground font-arabic">
                      Begin your day by reciting "Ya Hayyu Ya Qayyum" (O Ever-Living, O Self-Subsisting) to seek Allah's sustenance and protection throughout the day.
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-card/50">
                    <Moon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-amiri text-lg text-gold-light mb-2">Evening</h4>
                    <p className="text-sm text-muted-foreground font-arabic">
                      End your day with "Ya Ghafur" (O Ever-Forgiving), seeking forgiveness for shortcomings and expressing gratitude for the day's blessings.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default SpiritualGuidance;
