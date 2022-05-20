import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const land1 = [
  {
    ID: 1,
  },
];

function Land1() {
  return (
    <center>
      <h1>Zone 1</h1>
      <div className="lgbox">
        <center>
          {land1.map((zoneland, idx) => (
            <Link key={idx} to={`/land2/${zoneland.ID}`}>
              <div className="zone">
                <div className="namezone">{zoneland.ID}</div>
              </div>
            </Link>
          ))}
        </center>
      </div>
    </center>
  );
}

export default Land1;
