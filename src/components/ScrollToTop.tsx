
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 rounded-full bg-portfolio-purple hover:bg-portfolio-darkpurple w-12 h-12 p-0 z-50 shadow-lg"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
