import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Sparkles, Quote } from "lucide-react";

interface NameData {
  name: string;
  meaning: string;
  verse: string;
  description: string;
}

interface NameModalProps {
  isOpen: boolean;
  onClose: () => void;
  nameData: NameData | null;
  nameId: string;
}

const NameModal = ({ isOpen, onClose, nameData, nameId }: NameModalProps) => {
  if (!nameData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border p-0 overflow-hidden">
        {/* Decorative header */}
        <div className="relative bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 p-8">
          <div className="absolute inset-0 islamic-pattern opacity-30" />
          
          <DialogHeader className="relative z-10 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="font-amiri text-2xl text-primary">{nameId}</span>
              </div>
            </div>
            <DialogTitle className="font-amiri text-3xl md:text-4xl text-gold-light">
              {nameData.name}
            </DialogTitle>
            <p className="text-lg text-primary mt-2 font-arabic">{nameData.meaning}</p>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Qur'anic Verse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Quote className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-amiri text-lg text-foreground mb-2">Qur'anic Reference</h4>
                <p className="text-muted-foreground font-arabic leading-relaxed italic">
                  "{nameData.verse}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Daily Life Application */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-amiri text-lg text-foreground mb-2">Reflection & Application</h4>
                <p className="text-muted-foreground font-arabic leading-relaxed">
                  {nameData.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </DialogContent>
    </Dialog>
  );
};

export default NameModal;