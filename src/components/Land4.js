import React from "react";
import { useState } from "react";
import "../App.css";
import { Link, useParams } from "react-router-dom";

const land4 = [
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

function Land4() {
  let { idland1, idland2, idland3 } = useParams();
  const ZoneID = idland1 + idland2 + idland3;
  const [LandID, setLandID] = useState("");
  const ID = ZoneID + LandID;

  if (LandID !== "") {
    console.log("LAND_ID = ", ZoneID + LandID);
  } else {
    console.log("Zone_ID = ", ZoneID);
  }

  return (
    <center>
      <h1>Zone 4</h1>
      <div className="lgbox">
        {land4.map((zoneland, idx) => (
          <div
            key={idx}
            className="zone"
            id={zoneland.ID}
            onClick={() => setLandID(zoneland.ID)}
          >
            <div className="namezone">{zoneland.ID}</div>
          </div>
        ))}
      </div>
      <Link to={`/land3/${idland1}${idland2}`}>
        <button className="btnback">back to zone3</button>
      </Link>
      <br />
      <br />
      <h1>ID = {ID}</h1>
    </center>
  );
}

export default Land4;
