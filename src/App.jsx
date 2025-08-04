import "./App.css";
import Timer from "./components/Timer";
import PersonDetails from "./components/PersonDetails.jsx";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function App() {
  return (
    <>
     <div className="container" data-bs-theme="dark">
      <Tabs defaultActiveKey="timer" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="timer" title="Timer">
      <div className="container" data-bs-theme="dark">
        <Timer />
      </div>
     
      </Tab>
      <Tab eventKey="personDetails" title="Person Details">
         <div className="container" data-bs-theme="dark">
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            Person Details
          </div>
          <div>
            <PersonDetails />
          </div>
        </div>
      </div>
      </Tab>
     </Tabs>
    </div>
    </>
  );
}

export default App;
