import React from "react";
import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

export default function App() {
  return (
    <div>
      <div>Personal Digital Assitants</div>
      <div className="container">
          <div className="section">
              <div className="columns">
                  <div className="column is-4">
                  <ProfileCard title="Alexa" handle="@alexa99" img={AlexaImage} />
                  </div>
                  <div className="column is-4">
                  <ProfileCard title="Cortana" handle="@cortana32" img={CortanaImage} />
                  </div>
                  <div className="column is-4">
                  <ProfileCard title="Siri" handle="@siri01" img={SiriImage} />
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}      

