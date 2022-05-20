import React from "react";
import "../App.css";
import { Link, useParams } from "react-router-dom";

const land3 = [
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

function Land3() {
  console.log(land3)
  let { idland1, idland2 } = useParams();
  const ZoneID = idland1 + idland2;
  console.log("ZoneID = ", ZoneID);
  return (
    <center>
      <h1>Zone 3</h1>
      <div className="lgbox">
        <center >
          {land3.map((zoneland, idx) => (
            <Link key={idx} to={`/land4/${idland1}${idland2}${zoneland.ID}`}>
              <div className="zone">
                <div className="namezone">{zoneland.ID}</div>
              </div>
            </Link>
          ))}
        </center>
      </div>
      <Link to={`/land2/${idland1}`}>
        <button className="btnback">back to zone2</button>
      </Link>
    </center>
  );
}

export default Land3;
