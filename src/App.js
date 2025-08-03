import ContentComponent from "./components/Exercise/ContentComponent";
import FooterComponent from "./components/Exercise/FooterComponent";
import HeaderComponent from "./components/Exercise/HeaderComponent";
import HomeComponent from "./components/Exercise/HomeComponent";
import NavigationComponent from "./components/Exercise/NavigationComponent";
import ExerciseBinding from "./components/ExerciseBindingData/ExerciseBinding";
import DemoEvent from "./components/DemoEvent/DemoEvent";

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
      <ExerciseBinding />
      <DemoEvent />
    </div>
  );
}

export default App;
