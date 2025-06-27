import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SplashCursor from "@/components/ui/SplashCursor";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <SplashCursor />
        {children}</main>
      <Footer />
    </div>
  );
};
