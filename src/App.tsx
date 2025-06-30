import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <div>Navbar</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
}

export default App;
