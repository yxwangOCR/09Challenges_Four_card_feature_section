import "./App.css";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";

import styled from "styled-components";

const Application = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

function App() {
  return (
    <Application>
      <Hero />
      <Card />
    </Application>
  );
}

export default App;
