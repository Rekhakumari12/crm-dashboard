import './App.styles.js';
import Header from '../components/Header.jsx';
import Menu from '../components/Menu.jsx';
import Overview from '../components/overview/Overview.jsx';

function App() {
  return (
    <div className="App">
      <div className='shadow-md' style={{ backgroundColor: 'white' }}>
        <Header />
        <Menu />
      </div>
      <Overview />
    </div>
  );
}

export default App;
