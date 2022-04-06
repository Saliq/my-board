import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { MainBoard } from './components/MainBoard';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <MainBoard/>
    </div>
    </DndProvider>
  );
}

export default App;
