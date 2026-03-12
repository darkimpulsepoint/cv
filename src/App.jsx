import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";
import { Wrapper } from "./components/Wrapper.jsx";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education.jsx";
import { Languages } from "./components/Languages.jsx";
import { Works } from "./components/Works.jsx";
import { WorkExperience } from "./components/WorkExperience.jsx";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Wrapper>
        <Header />
        <div className="flex flex-col md:flex-row gap-8 mt-6 w-full">
          <div className="w-full md:flex-1">
            <Works />
          </div>

          <div className="flex flex-col gap-4 w-full md:w-80 lg:w-96">
            <WorkExperience />
            <Education />
            <Languages />
            <Skills />
          </div>
        </div>
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
