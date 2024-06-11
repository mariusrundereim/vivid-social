import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <h2>Header</h2>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
}

export default Layout;
