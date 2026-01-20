import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IslamicPattern from "@/components/IslamicPattern";

interface TeamMember {
  name: string;
  school: string;
}

const teamMembers: TeamMember[] = [
  { name: "Adrian", school: "DPS Sharjah" },
  { name: "Mithun", school: "DPS Dubai" },
  { name: "Joel", school: "Indian International School" },
  { name: "Layal", school: "Taryem American School" },
  { name: "Haiqa", school: "Ryan International School" },
];

const Team = () => {
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
                <Users className="w-6 h-6 text-primary animate-pulse" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
              </div>
            </div>

            <h2 className="font-amiri text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed">
              Meet <span className="text-primary">Our Team</span>
            </h2>
            
            <p className="text-muted-foreground font-arabic leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
              A dedicated group of students from across the UAE and beyond, united by their passion 
              for sharing the beautiful names of Allah with the world.
            </p>
          </div>
        </motion.section>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300">
                  <span className="font-amiri text-2xl text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                
                <h3 className="font-amiri text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                
                <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                  <GraduationCap className="w-4 h-4 text-primary/70" />
                  <span className="font-arabic">{member.school}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <div className="bg-card/50 border border-border rounded-xl p-8">
            <p className="font-amiri text-lg text-foreground/90 italic leading-relaxed">
              "Our mission is to make the learning of Allah's beautiful names accessible, 
              meaningful, and transformative for Muslims of all ages."
            </p>
            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <p className="mt-4 text-sm text-muted-foreground font-arabic">
              — The Bayt-Ul-Husna Team
            </p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
