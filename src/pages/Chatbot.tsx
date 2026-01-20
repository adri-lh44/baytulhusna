import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IslamicPattern from "@/components/IslamicPattern";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // For now, we'll use a simulated response since Lovable Cloud isn't enabled yet
      // Once Cloud is enabled, this will connect to the AI edge function
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const assistantMessage: Message = {
        role: "assistant",
        content: getIslamicResponse(userMessage.content),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Temporary response generator - will be replaced with Lovable AI
  const getIslamicResponse = (question: string): string => {
    const lowerQ = question.toLowerCase();
    
    if (lowerQ.includes("ar-rahman") || lowerQ.includes("gracious")) {
      return "Ar-Rahman (The Most Gracious) is one of the most frequently mentioned names of Allah in the Qur'an. It signifies Allah's all-encompassing mercy that extends to all of creation - believers and non-believers alike. This name reminds us that Allah's mercy is vast and unlimited. In Surah Ar-Rahman, Allah repeatedly asks: 'Which of the favors of your Lord would you deny?' - reminding us to be grateful for His endless blessings.";
    }
    if (lowerQ.includes("99 names") || lowerQ.includes("asma") || lowerQ.includes("husna")) {
      return "The 99 Names of Allah, known as Asma-ul-Husna (The Beautiful Names), represent the divine attributes of Allah. Learning and reflecting upon these names is highly recommended in Islam. The Prophet ﷺ said: 'Allah has ninety-nine names. Whoever memorizes and understands them will enter Paradise.' Each name reveals an aspect of Allah's nature - His mercy, power, knowledge, and perfection.";
    }
    if (lowerQ.includes("mercy") || lowerQ.includes("forgive")) {
      return "Allah's mercy is a recurring theme in Islam. He describes Himself as Ar-Rahman (Most Gracious), Ar-Rahim (Most Merciful), Al-Ghafur (Ever-Forgiving), and At-Tawwab (Acceptor of Repentance). The Prophet ﷺ said: 'Allah divided mercy into one hundred parts. He kept ninety-nine parts with Him and sent down one part to earth.' This one part is the mercy we see in creation - a mother's love, compassion between people. Imagine then the 99 parts reserved with Allah!";
    }
    if (lowerQ.includes("pray") || lowerQ.includes("dua") || lowerQ.includes("supplication")) {
      return "Making dua (supplication) using Allah's names is highly encouraged. Allah says in the Qur'an: 'And to Allah belong the most beautiful names, so invoke Him by them' (7:180). When asking for provision, call upon Ar-Razzaq. When seeking forgiveness, invoke Al-Ghafur. When needing strength, remember Al-Qawiyy. This practice deepens our connection with Allah and shows our understanding of His attributes.";
    }
    
    return "JazakAllah khair for your question about Islam and Allah's beautiful names. The 99 Names of Allah are windows into understanding the Divine. Each name carries profound meaning and teaches us about Allah's relationship with His creation. I encourage you to explore these names deeply - memorize them, reflect upon their meanings, and call upon Allah using them in your daily prayers. May Allah guide you to beneficial knowledge. 🤲";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestedQuestions = [
    "What does Ar-Rahman mean?",
    "How can I benefit from the 99 Names?",
    "Tell me about Allah's mercy",
    "How should I make dua using these names?",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <IslamicPattern />
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground font-arabic">Islamic AI Assistant</span>
          </div>
          <h2 className="font-amiri text-2xl md:text-3xl text-foreground">
            Ask About <span className="text-primary">Allah's Names</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2 font-arabic">
            Learn about the beautiful names and attributes of Allah
          </p>
        </motion.div>

        {/* Chat Container */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
          {/* Messages Area */}
          <div className="h-[400px] md:h-[500px] overflow-y-auto p-4 md:p-6 space-y-4">
            {messages.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-arabic mb-2">Assalamu Alaikum! 🤲</p>
                  <p className="text-sm text-muted-foreground max-w-md">
                    I'm here to help you learn about the 99 Beautiful Names of Allah. 
                    Ask me anything about their meanings, significance, and how to apply them in your life.
                  </p>
                </div>
                
                {/* Suggested questions */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(q)}
                      className="px-3 py-1.5 text-xs bg-secondary hover:bg-primary/10 border border-border hover:border-primary/30 rounded-full text-muted-foreground hover:text-foreground transition-all duration-300"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <AnimatePresence>
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.role === "user" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl font-arabic text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-secondary text-foreground rounded-bl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
            
            {/* Loading indicator */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot size={16} className="text-primary" />
                </div>
                <div className="bg-secondary p-4 rounded-2xl rounded-bl-sm">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span className="text-sm text-muted-foreground">Thinking...</span>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-border p-4 bg-background/50">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Allah's Names..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 font-arabic disabled:opacity-50"
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="px-4 py-3 h-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-all duration-300 disabled:opacity-50"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Info note */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          This AI assistant provides educational information about Islamic concepts. 
          For religious rulings, please consult qualified scholars.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Chatbot;