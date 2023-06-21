import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {DistantWork} from "./distantWork/DistantWork";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <DistantWork/>
            <Contacts/>
            {/*<ContactForm/>*/}
            <Footer/>
        </div>
    );
}

export default App;
