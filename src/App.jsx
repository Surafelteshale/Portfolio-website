
import Header from "./layouts/headers/Header";
import HeroSection from "./sections/HeroSection";
import CountDownAreaOne from "./sections/CountDownAreaOne";
import Ticker from "./sections/Ticker";
import ProjectsSection from "./sections/ProjectsSection";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <>
      <Header />
      <CustomCursor />

      <main>
        <HeroSection />
        <Ticker />
        <CountDownAreaOne />
        <ProjectsSection />
      </main>
    </>
  );
}
