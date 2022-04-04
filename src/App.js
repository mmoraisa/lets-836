import Counter from './components/Counter';
import Main from './components/Main';
import Menu from './components/Menu'

const App = () => (
  <div>
    {/* <h1>Teste</h1> */}
    <Counter step={5} />
    <Menu />
    <Main />
  </div>
);

export default App;
