import logo from './logo.svg';
import './App.css';
import Square from './componets/Square.js';
function App() {
  return (
    <div className="App">
      <div className="principal-c">
        <h1>This is what our students say about freeCodeCamp:</h1>

        <Square
          img="shawn"
          name="Shawn Wang"
          country="Singapur"
          position="Software Engineer"
          company="Amazon"
          text="It's scary to change careers. I only gained the confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a software engineer. freeCodeCamp changed my life"
        
        />

        <Square
          img="sarah"
          name="Sarah Chima"
          country="Nigeria"
          position="Software Engineer"
          company="ChatDesk"
          text="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my programming knowledge from a complete beginner level to a very confident level. It was everything I needed to land my first developer job at an amazing company."
        
        />

        <Square
          img="emma"
          name="Emma Bostian"
          country="Suecia"
          position="Software Engineer"
          company="Spotify"
          text="I've always had trouble learning JavaScript. I have taken many courses, but the freeCodeCamp course was the one that stuck. Studying JavaScript as well as data structures and algorithms at freeCodeCamp gave me the skills and confidence <strong>I needed to land my dream job as a software engineer at Spotify</strong>."
        />

        
      </div>
    </div>
  );
}

export default App;
