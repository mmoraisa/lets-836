import { Button, Menu } from 'antd'
import { MdCommute, MdAccessibility } from 'react-icons/md'

const App = () => {
  return (
    <div>
      <h1>Teste</h1>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          Home
        </Menu.Item>
        <Menu.Item key="team">
          Equipe
        </Menu.Item>
        <Menu.Item key="aboutus">
          Sobre nós
        </Menu.Item>
        <Menu.Item key="contact">
          Contato
        </Menu.Item>
      </Menu>
      <main>
        <h2>Listagem</h2>
        <Button icon={
          <>
            <MdCommute />
            <MdAccessibility />
          </>
        }>
          Cadastrar item
        </Button>
      </main>
    </div>
  );
}

export default App;
