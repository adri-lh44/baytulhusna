import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, Loader2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  arabicText: string;
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const AudioPlayer = ({ arabicText, name, className = "", size = "md" }: AudioPlayerProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  const playPronunciation = async () => {
    if (isLoading) return;

    // If we have cached audio, just play it
    if (audioRef.current && audioUrlRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/pronounce-name`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ arabicText, name }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to generate audio: ${response.status}`);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      audioUrlRef.current = audioUrl;

      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onended = () => {
        setIsPlaying(false);
      };

      audio.onerror = () => {
        setError("Failed to play audio");
        setIsPlaying(false);
      };

      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.error("Error playing pronunciation:", err);
      setError("Failed to load pronunciation");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={playPronunciation}
      disabled={isLoading}
      className={`${sizeClasses[size]} rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-all duration-300 border border-primary/30 hover:border-primary/50 ${className}`}
      title={error || "Play pronunciation"}
    >
      {isLoading ? (
        <Loader2 className={`${iconSizes[size]} text-primary animate-spin`} />
      ) : error ? (
        <VolumeX className={`${iconSizes[size]} text-destructive`} />
      ) : (
        <motion.div
          animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
        >
          <Volume2 className={`${iconSizes[size]} text-primary`} />
        </motion.div>
      )}
    </motion.button>
  );
};

export default AudioPlayer;
