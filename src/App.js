import "./App.css";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import styled from "styled-components";


const Application = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #f5f5f5;
`;


function App() {
  return (
    <Application>
      <Hero />
    </Application>
  );
}

export default App;
