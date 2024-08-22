import "./App.css";
import Info from "./components/Info/Info";
import Main from "./components/Main/Main";
import 'animate.css';


function App() {
  return (
    <div className="App">
      <header className="header">
        <section className="ul-section">
          <ul>
            <li>Read Comics</li>
            <li>Take a quiz</li>
            <li>View rankings</li>
            <li>Chat</li>
          </ul>
        </section>
      </header>
      <Main />
      <Info/>
      <footer className="footer">
        <span> © 2024 ProtecToons</span>
        <section className="link-section">
          <ul>
            <li>Inst</li>
            <li>Whatsapp</li>
            <li>Telegram</li>
            <li>Mail</li>
          </ul>
        </section>
        <button>Back to top</button>
      </footer>
    </div>
  );
}

export default App;
