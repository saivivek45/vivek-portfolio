// hooks/useActiveSection.ts
import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handler = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100) {
            setActive(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handler);
    handler(); // call on mount
    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds]);

  return active;
}
