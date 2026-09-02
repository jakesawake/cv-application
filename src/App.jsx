import IntroSection from "./components/IntroSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import "./styles/App.css";

function App() {
  return (
    <div className="cv">
      <header className="[grid-area:header]">
        <IntroSection />
      </header>
      <main className="[grid-area:main]">
        <ExperienceSection />
      </main>
      <ContactSection />
      <aside className="flex flex-col gap-1 [grid-area:sidebar]">
        <SkillsSection />
        <EducationSection />
      </aside>
    </div>
  );
}

export default App;
