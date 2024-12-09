import "./finding.css";
import nyarugenge from "/nyarugenge.jpg";
import nyanza from "/nyanza.webp";
import kigali from "/kigali.jpg";
import musanze from "/musanze.jpg";
import KCT from "/KCT.jpg";
import gisenyi from "/gisenyi.jpg";
import qw from "/qw.jpg";

const findings = () => {
  return (
    <div className="main-findings" id="place">
      <h3>Find Properties in These Cities</h3>
      <p>Based on your preferences, we have curated a selection of properties in these cities.</p>
      
      <div className="top-card">
        <div className="city-card large">
          <img src={qw} alt="Musanze" />
          <div className="city-info">
            <h4>8 Properties</h4>
            <p>Musanze</p>
          </div>
        </div>
      </div>

      <div className="bottom-cards">
        <div className="city-card">
          <img src={KCT} alt="Kigali City Tower" />
          <div className="city-info">
            <h4>5 Properties</h4>
            <p>Kigali City Tower</p>
          </div>
        </div>
        <div className="city-card">
          <img src={gisenyi} alt="Gisenyi" />
          <div className="city-info">
            <h4>3 Properties</h4>
            <p>Gisenyi</p>
          </div>
        </div>
        <div className="city-card">
          <img src={nyarugenge} alt="Nyarugenge" />
          <div className="city-info">
            <h4>4 Properties</h4>
            <p>Nyarugenge</p>
          </div>
        </div>
        <div className="city-card">
          <img src={nyanza} alt="Nyanza" />
          <div className="city-info">
            <h4>2 Properties</h4>
            <p>Nyanza</p>
          </div>
        </div>
        <div className="city-card">
          <img src={kigali} alt="Kigali" />
          <div className="city-info">
            <h4>6 Properties</h4>
            <p>Kigali</p>
          </div>
        </div>
        <div className="city-card">
          <img src={musanze} alt="Kigali" />
          <div className="city-info">
            <h4>6 Properties</h4>
            <p>Kigali</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default findings;
