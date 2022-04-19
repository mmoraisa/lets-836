import { Menu as AntdMenu } from 'antd'
import { Link } from 'react-router-dom'
import routes from '../../defaults/Routes'

const Menu = () => (
  <AntdMenu mode="horizontal">
    {
      routes.map(
        route => (
          <AntdMenu.Item key={route.key}>
            <Link to={route.path}>
              {route.label}
            </Link>
          </AntdMenu.Item>
        )
      )
    }
  </AntdMenu>
)

export default Menu
