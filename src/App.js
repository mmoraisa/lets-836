import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Menu from "./components/Menu";
import routes from "./defaults/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        {
          routes.map(
            route =>
              <Route
                key={route.key}
                path={route.path}
                element={route.element} />
          )
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
