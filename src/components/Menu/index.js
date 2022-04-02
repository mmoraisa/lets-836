import { SearchOutlined } from '@ant-design/icons'
import { Button, Menu as AntdMenu } from 'antd'
import { BtnRound, BtnSearch } from './styles'

const Menu = () => (
  <AntdMenu mode="horizontal">
    <AntdMenu.Item key="home">
      Home
    </AntdMenu.Item>
    <AntdMenu.Item key="team">
      Equipe
    </AntdMenu.Item>
    <AntdMenu.Item key="about-us">
      Sobre nós
    </AntdMenu.Item>
    <AntdMenu.Item key="contact">
      Contato
    </AntdMenu.Item>
    <AntdMenu.Item key="search">
      <BtnRound icon={<SearchOutlined />} />
      <BtnRound icon={<SearchOutlined />} />
      <BtnRound icon={<SearchOutlined />} />
      <BtnRound icon={<SearchOutlined />} />
    </AntdMenu.Item>
  </AntdMenu>
)

export default Menu
