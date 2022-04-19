import Home from "../screens/Home";
import ProductsList from "../screens/ProductsList"

export const ROUTE_HOME = '/';
export const ROUTE_PRODUCTS = '/products';

const routes = [
  {
    path: ROUTE_HOME,
    element: <Home />,
    key: 'home',
    label: 'Home'
  },
  {
    path: ROUTE_PRODUCTS,
    element: <ProductsList />,
    key: 'products',
    label: 'Products'
  }
]

export default routes
