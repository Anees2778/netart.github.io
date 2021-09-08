import log from "./images/log.png";
import image1 from "./images/image1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Form } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import home from "./components/Home";

function App() {
  return (
    <div className="mainbox">
      <div className="container">
        <div>
          <img className="logo" src={log}></img>
        </div>

        <div className="box">
          <Row>
            <Col sm="12" md="12" lg="12" xl="4" xxl="4">
              <img className="image1" src={image1}></img>
            </Col>
            <Col sm="12" md="12" lg="12" xl="8" xxl="8">
              <p className="heading">
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </p>
              <ul className="txt">
                <li>
                  <p className="listtxt">
                    C.R.I.'s energy efficient products are well recognized by
                    various Government Institutions, as trustworthy products for
                    various projects across the globe to save energy.
                  </p>
                </li>
                <li>
                  <p className="listtxt">
                    C.R.I.'s energy efficient products are well recognized by
                    various Government Institutions, as trustworthy products for
                    various projects across the globe to save energy.
                  </p>
                </li>
              </ul>
              <img className="img2" src={img2}></img>
              <p className="listtxt">
                Government of India has awarded the{" "}
                <b> "National Energy Conservation Award 2018"</b>. Mr. G.
                Selvaraj, Joint Managing Director of C.R.I. Group received the
                award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
                Raj Kumar Singh, Honorable Minister of State.
              </p>
            </Col>
          </Row>
        </div>
        <div>
          <p className="sectxt">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.{" "}
          </p>
          <img className="img3" src={img3}></img>
          <p className="imgtxt">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
        <div className="line"></div>
        <div className="foo">
          <p className="heading footertxt">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </p>
        </div>
        <div className="links">
          <a href="#kdkfjdhf">CHEMICALS & PROCESS</a>
          <a> POWER </a>
            <a href="#wdjskfhiwrehf">WATER & WASTE WATER </a>
            <a href="#dskfjdkhf">OILS & GAS</a>
            <a href="#wdjskfhiwrehf">PHARMA </a>
            <a href="#wdjskfhiwrehf"> SUGARS& DISTILLERIES </a>
            <a href="#wdjskfhiwrehf">PAPER & PULP </a>
            <a href="#wdjskfhiwrehf">MARINE & DEFENCE </a>
            <a href="#wdjskfhiwrehf">METAL & MINING </a>
            <a href="#wdjskfhiwrehf">FOOD & BEVERAGE </a>
            <a href="#wdjskfhiwrehf">PETROCHEMICAL & REFINERIES </a>
            <a href="#wdjskfhiwrehf">SOLAR</a>
            <a href="#wdjskfhiwrehf">BUILDING</a>
            <a href="#wdjskfhiwrehf">HVAC</a>
            <a href="#wdjskfhiwrehf">FIRE FIGHTING</a>
            <a href="#wdjskfhiwrehf">AGRICULTURE & RESIDENTIAL</a>
        </div>
        <div className="mediaicons">
          <Row>
          <Col className="bx" sm="12" md="12" lg="4" xl="4"><a href="#" class="fa fa-phone"></a><span>www.facebook.com/cripumps</span></Col>
            <Col  className="bx" sm="12" md="12" lg="4" xl="4"><a href="#" class="fa fa-facebook"></a><span>www.facebook.com/cripumps</span></Col>
            <Col  className="bx" sm="12" md="12" lg="4" xl="4"><a href="#" class="fa fa-globe"></a><span>www.facebook.com/cripumps</span></Col>
            
            
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
