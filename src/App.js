import './App.css';
import { NewsContext } from './NewsContext';
import News from './components/News';

function App() {
  return (
    <div>
      <NewsContext>
        <News/>
      </NewsContext>
    </div>
  );
}

export default App;
