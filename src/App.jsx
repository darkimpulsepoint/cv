import {Header} from './components/Header';
import {Footer} from './components/Footer';
import './App.css';
import {Wrapper} from "./components/Wrapper.jsx";
import {Skills} from "./components/Skills";
import {Education} from "./components/Education.jsx";
import {Languages} from "./components/Languages.jsx";
import {Works} from "./components/Works.jsx";
import {WorkExperience} from "./components/WorkExperience.jsx";

function App() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Wrapper>
                <Header />
                <div className="flex gap-8">
                    <Works />
                    <div className="flex flex-col gap-2 w-2/5">
                        <WorkExperience/>
                        <Education/>
                        <Languages/>
                        <Skills/>
                    </div>
                </div>
                <Footer/>
            </Wrapper>
        </div>
    );
}

export default App;
