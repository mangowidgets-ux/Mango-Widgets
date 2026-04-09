import { useEffect, useState } from "react";

interface WordRevealProps {
  baseText: string;
  animatedWords: string[];
  typingSpeed?: number;
  displayDuration?: number;
  className?: string;
}

export const WordReveal = ({
  baseText,
  animatedWords,
  typingSpeed = 50,
  displayDuration = 3000,
  className = "",
}: WordRevealProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<"typing" | "displaying" | "fading">("typing");

  const currentWord = animatedWords[currentWordIndex];

  // Main animation loop
  useEffect(() => {
    if (phase === "typing") {
      if (displayedText.length < currentWord.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        // Finished typing, move to displaying phase
        setPhase("displaying");
      }
    } else if (phase === "displaying") {
      // Display for the full duration, then fade
      const timer = setTimeout(() => {
        setPhase("fading");
      }, displayDuration);
      return () => clearTimeout(timer);
    } else if (phase === "fading") {
      // Fade out, then switch word
      setIsVisible(false);
      const timer = setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
        setDisplayedText("");
        setPhase("typing");
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [displayedText, phase, currentWord, typingSpeed, displayDuration, animatedWords.length]);

  return (
    <span className={className}>
      {baseText} 
      {/* <br/> */}
      {" "}
      <span
        className={`inline-block transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {displayedText}
      </span>
    </span>
  );
};
