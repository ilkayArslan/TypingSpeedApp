import './App.css';
import WordsArea from "./components/WordsArea"
import InputArea from "./components/InputArea"
import ScoreArea from "./components/ScoreArea"
import LangSelect from './components/LangSelect';


function App() {


  return (
    <div className=' container  ana d-flex justify-content-center align-items-center' >
      <div className=' w-100 h-50 bebe'>
        <LangSelect />
        <WordsArea />
        <InputArea />
        <ScoreArea />
      </div>
    </div>
  );
}

export default App;
