import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  const state = {
    sideDrawerOpen: false,
  };

  const drawerToggleClickHandler = () => {
    this.state((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  let sideDrawer;
  let backdrop;

  if (state.sideDrawerOpen) {
    sideDrawer = <SideDrawer />;
    backdrop = <Backdrop />;
  }
  return (
    <div style={{ height: "100%" }}>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />

      {sideDrawer}
      {backdrop}
      <main style={{ marginTop: "64px" }}>
        <p>This is some content</p>
      </main>
    </div>
  );
}

export default App;
