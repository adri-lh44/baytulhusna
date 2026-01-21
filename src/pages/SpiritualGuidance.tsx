import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Sparkles, Heart, Sun, Moon, Star, Search, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IslamicPattern from "@/components/IslamicPattern";
import { namesData } from "@/data/names";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Daily rotating quotes and messages about Allah
const dailyQuotes = [
  {
    quote: "Verily, with hardship comes ease.",
    source: "Qur'an 94:6",
    reflection: "Allah's promise reminds us that every difficulty carries within it the seeds of relief. Trust in His timing."
  },
  {
    quote: "And He is with you wherever you are.",
    source: "Qur'an 57:4",
    reflection: "Allah's presence is constant and unwavering. We are never truly alone in our struggles or joys."
  },
  {
    quote: "Call upon Me; I will respond to you.",
    source: "Qur'an 40:60",
    reflection: "The door of dua is always open. Allah invites us to communicate with Him, promising to answer."
  },
  {
    quote: "Allah does not burden a soul beyond that it can bear.",
    source: "Qur'an 2:286",
    reflection: "Every challenge we face is within our capacity. Allah knows our strength better than we know ourselves."
  },
  {
    quote: "So remember Me; I will remember you.",
    source: "Qur'an 2:152",
    reflection: "Dhikr creates a beautiful reciprocal relationship with Allah. When we remember Him, He remembers us."
  },
  {
    quote: "And whoever puts their trust in Allah, He will be enough for them.",
    source: "Qur'an 65:3",
    reflection: "Tawakkul is not passive—it's active trust. When we truly rely on Allah, He becomes our sufficiency."
  },
  {
    quote: "My mercy encompasses all things.",
    source: "Qur'an 7:156",
    reflection: "Allah's mercy is vast beyond comprehension. No sin is too great, no situation too hopeless for His mercy."
  }
];

const wisdomMessages = [
  {
    title: "The Power of Knowing Allah's Names",
    content: "Understanding Allah's Beautiful Names transforms our relationship with Him. Each name is a door to deeper connection, a lens through which we see His infinite attributes manifest in our lives."
  },
  {
    title: "Names as Daily Companions",
    content: "When we learn that Allah is Al-Wakīl (The Trustee), we can hand over our worries. When we know He is Al-Wadūd (The Loving), we feel His love even in solitude."
  },
  {
    title: "Practical Spirituality",
    content: "The names of Allah are not just for memorization—they are for living. Call upon Al-Shākur when grateful, Al-Ghafūr when seeking forgiveness, Al-Ḥafīẓ when seeking protection."
  },
  {
    title: "Healing Through Divine Names",
    content: "Many scholars recommend reciting specific names for spiritual healing. The names carry barakah and connecting with them brings peace to troubled hearts."
  }
];

const SpiritualGuidance = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentWisdomIndex, setCurrentWisdomIndex] = useState(0);
  
  // Get today's name based on the day of the year
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const namesArray = Object.entries(namesData);
  const todaysNameIndex = dayOfYear % namesArray.length;
  const [todaysId, todaysName] = namesArray[todaysNameIndex];

  // Set initial quote based on day
  useEffect(() => {
    setCurrentQuoteIndex(dayOfYear % dailyQuotes.length);
    setCurrentWisdomIndex(dayOfYear % wisdomMessages.length);
  }, [dayOfYear]);

  // Rotate quotes every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % dailyQuotes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Rotate wisdom messages every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWisdomIndex((prev) => (prev + 1) % wisdomMessages.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

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
      names: ["Al-Ḥayy", "Al-Qayyūm", "Al-Matīn", "Al-Qawiyy"],
      description: "Call upon these names when facing trials and seeking steadfastness."
    },
    {
      title: "For Gratitude & Contentment",
      icon: <Heart className="w-5 h-5" />,
      names: ["Ash-Shakūr", "Al-Karīm", "Al-Wadūd", "Al-Ḥamīd"],
      description: "Reflect on these names to cultivate thankfulness and inner peace."
    },
    {
      title: "For Forgiveness & Mercy",
      icon: <Moon className="w-5 h-5" />,
      names: ["Al-Ghafūr", "Al-Wāsiʿ", "Al-Wakīl"],
      description: "Turn to these names when seeking Allah's forgiveness and mercy."
    },
    {
      title: "For Strength & Protection",
      icon: <Sun className="w-5 h-5" />,
      names: ["Al-Ḥafīẓ", "Al-Waliyy", "Al-Qawiyy", "Al-Matīn"],
      description: "Remember these names for protection and divine strength."
    }
  ];

  const currentQuote = dailyQuotes[currentQuoteIndex];
  const currentWisdom = wisdomMessages[currentWisdomIndex];

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

        {/* Rotating Daily Quote */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-3xl mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border border-primary/20 overflow-hidden">
            <div className="absolute inset-0 islamic-pattern opacity-10" />
            <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/30" />
            <Quote className="absolute bottom-4 right-4 w-8 h-8 text-primary/30 rotate-180" />
            
            <div className="relative z-10 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuoteIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="font-amiri text-2xl md:text-3xl text-primary mb-3">
                    "{currentQuote.quote}"
                  </p>
                  <p className="text-sm text-gold-light mb-4">— {currentQuote.source}</p>
                  <p className="text-muted-foreground font-arabic text-sm md:text-base max-w-xl mx-auto">
                    {currentQuote.reflection}
                  </p>
                </motion.div>
              </AnimatePresence>
              
              {/* Quote indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {dailyQuotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuoteIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentQuoteIndex 
                        ? 'bg-primary w-6' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Rotating Wisdom Message */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto p-5 rounded-xl bg-card/50 border border-border overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentWisdomIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-amiri text-lg text-gold-light mb-2">{currentWisdom.title}</h3>
                    <p className="text-sm text-muted-foreground font-arabic">{currentWisdom.content}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Today's Name Highlight */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
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
                      Begin your day by reciting "Ya Ḥayyu Ya Qayyūm" (O Ever-Living, O Self-Subsisting) to seek Allah's sustenance and protection throughout the day.
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-card/50">
                    <Moon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-amiri text-lg text-gold-light mb-2">Evening</h4>
                    <p className="text-sm text-muted-foreground font-arabic">
                      End your day with "Ya Ghafūr" (O Ever-Forgiving), seeking forgiveness for shortcomings and expressing gratitude for the day's blessings.
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
