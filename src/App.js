import ContentComponent from "./components/Exercise/ContentComponent";
import FooterComponent from "./components/Exercise/FooterComponent";
import HeaderComponent from "./components/Exercise/HeaderComponent";
import HomeComponent from "./components/Exercise/HomeComponent";
import NavigationComponent from "./components/Exercise/NavigationComponent";

// rcc command helps intialize a react component
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Header />
      <Footer />
      <Footer /> */}
      <HomeComponent />
      <HeaderComponent />
      <div className="row">
        <NavigationComponent />
        <ContentComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
