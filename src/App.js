import Content from "./content";
import Footer from "./components/footer";
import Header from "./components/header";
import LeftNav from "./components/lefnav";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-md-2">
          <LeftNav />
        </div>
        <div className="col-md-10">
          <Content />
        </div>
        <div className="offset-md-2 col-md-10">
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;
