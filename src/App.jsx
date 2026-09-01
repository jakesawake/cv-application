import IntroSection from "./components/IntroSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import "./styles/App.css";

function App() {
  return (
    <div className="cv">
      <header className="cv-header">
        <IntroSection />
      </header>
      <main className="cv-main">
        <ExperienceSection />
      </main>
      <ContactSection />
      <aside className="cv-sidebar">
        <SkillsSection />
        <EducationSection />
      </aside>
    </div>
  );
}

export default App;
