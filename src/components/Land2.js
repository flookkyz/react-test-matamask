import React from "react";
import "../App.css";
import { Link, useParams } from "react-router-dom";

const land2 = [
  {
    ID: 1,
  },
  {
    ID: 2,
  },
  {
    ID: 3,
  },
  { ID: 4 },
];

function Land2() {
  let { idland1 } = useParams();
  const ZoneID = idland1;
  console.log("ZoneID = ", ZoneID);
  return (
    <center>
      <h1>Zone 2</h1>
      <div className="lgbox">
        <center>
          {land2.map((zoneland, idx) => (
            <Link key={idx} to={`/land3/${idland1}${zoneland.ID}`}>
              <div className="zone">
                <div className="namezone">{zoneland.ID}</div>
              </div>
            </Link>
          ))}
        </center>
      </div>
      <Link to={"/"}>
        <button className="btnback">back to zone1</button>
      </Link>
    </center>
  );
}

export default Land2;
