import React, {
  useState
} from 'react';
import './App.css';

const gardenElements = [{
    name: 'Rock',
    emoji: '🪨'
  },
  {
    name: 'Tree',
    emoji: '🌳'
  },
  {
    name: 'Flower',
    emoji: '🌸'
  },
  {
    name: 'Pond',
    emoji: '🏞️'
  },
  {
    name: 'Bench',
    emoji: '🪑'
  },
];

function App() {
  const [garden, setGarden] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const addElement = (element) => {
    setGarden([...garden, element]);
  };

  const clearGarden = () => {
    setGarden([]);
  };

  return ( <
    div className = "App" >
    <
    h1 > Zen Garden Planner < /h1> <
    div className = "element-selector" >
    <
    h2 > Select an element: < /h2> {
      gardenElements.map((element) => ( <
        button key = {
          element.name
        }
        onClick = {
          () => setSelectedElement(element)
        }
        className = {
          selectedElement === element ? 'selected' : ''
        } >
        {
          element.emoji
        } {
          element.name
        } <
        /button>
      ))
    } <
    /div> <
    div className = "garden" >
    <
    h2 > Your Garden: < /h2> <
    div className = "garden-grid" > {
      garden.map((element, index) => ( <
        span key = {
          index
        }
        className = "garden-element" > {
          element.emoji
        } <
        /span>
      ))
    } <
    /div> <
    button onClick = {
      () => selectedElement && addElement(selectedElement)
    } >
    Add Element <
    /button> <
    button onClick = {
      clearGarden
    } > Clear Garden < /button> <
    /div> <
    div className = "mindfulness-tip" >
    <
    h3 > Mindfulness Tip: < /h3> <
    p > Take a deep breath and imagine yourself in your zen garden.How does it make you feel ? < /p> <
    /div> <
    /div>
  );
}

export default App;