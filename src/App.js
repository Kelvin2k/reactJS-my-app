import DemoState from "./components/Demo State/DemoState";
import Exercise1 from "./components/Demo State/Exercise1";
import DemoCss from "./components/DemoCSS/DemoCss";
import DemoEvent from "./components/DemoEvent/DemoEvent";
import ContentComponent from "./components/Exercise/ContentComponent";
import FooterComponent from "./components/Exercise/FooterComponent";
import HeaderComponent from "./components/Exercise/HeaderComponent";
import HomeCommponent from "./components/Exercise/HomeCommponent";
import NavigationComponent from "./components/Exercise/NavigationComponent";
import BindingExercise from "./components/ExerciseBindingData/BindingExercise";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Header />
      <Footer /> */}
      {/* <HomeCommponent />
      <HeaderComponent />
      <div className="row">
        <NavigationComponent />
        <ContentComponent />
      </div>
      <FooterComponent />
      <BindingExercise />
      <DemoEvent />
      <DemoCss />
      <DemoState /> */}
      <Exercise1 />
    </div>
  );
}

export default App;
