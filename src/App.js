import Content from "./content";
import Footer from "./components/footer";
import Header from "./components/header";
import LeftNav from "./components/leftnav";
import Button from "./components/button";
import Counter from "./components/counter";
import { useState } from "react";

const App = () => {
  const  [count,updateCount]= useState(1);
  const onIncrement =(e)=>{
    updateCount(count+1);
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-md-2">
          <LeftNav />
        </div>
        <div className="col-md-10">
          {/* <Counter count={count} />
          <Button handleClick={onIncrement}/> */}
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
