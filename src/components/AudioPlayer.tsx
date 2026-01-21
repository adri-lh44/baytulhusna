import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, Loader2, VolumeX } from "lucide-react";

// Import all audio files
import recording13 from "@/assets/audio/recording-13.m4a";
import recording14 from "@/assets/audio/recording-14.m4a";
import recording15 from "@/assets/audio/recording-15.m4a";
import recording16 from "@/assets/audio/recording-16.m4a";
import recording17 from "@/assets/audio/recording-17.m4a";
import recording18 from "@/assets/audio/recording-18.m4a";
import recording19 from "@/assets/audio/recording-19.m4a";
import recording20 from "@/assets/audio/recording-20.m4a";
import recording21 from "@/assets/audio/recording-21.m4a";
import recording22 from "@/assets/audio/recording-22.m4a";

// Mapping: name number -> recording file (13=34, 14=35, etc.)
const audioMap: Record<number, string> = {
  34: recording13,
  35: recording14,
  36: recording15,
  37: recording16,
  38: recording17,
  39: recording18,
  40: recording19,
  41: recording20,
  42: recording21,
  43: recording22,
};

interface AudioPlayerProps {
  nameNumber: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const AudioPlayer = ({ nameNumber, className = "", size = "md" }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  const audioSrc = audioMap[nameNumber];

  const playPronunciation = () => {
    if (!audioSrc) {
      setError("Audio not available");
      return;
    }

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
      return;
    }

    const audio = new Audio(audioSrc);
    audioRef.current = audio;

    audio.onended = () => {
      setIsPlaying(false);
    };

    audio.onerror = () => {
      setError("Failed to play audio");
      setIsPlaying(false);
    };

    audio.play();
    setIsPlaying(true);
  };

  if (!audioSrc) {
    return null; // Don't show button if no audio available
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={playPronunciation}
      className={`${sizeClasses[size]} rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-all duration-300 border border-primary/30 hover:border-primary/50 ${className}`}
      title={error || "Play pronunciation"}
    >
      {error ? (
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
