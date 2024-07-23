import React from "react";
import { useNavigate } from "react-router-dom";

function Errorpage() {
  const navigate = useNavigate();

  return (
    <div className="Error">
      <p>OOPSSS ! You were not supossed to be here</p>
      <p>404</p>
      <p>Let's go back home </p>
      <button className="btn-primary" onClick={() => navigate("/")}>
        Go Back To Home
      </button>
    </div>
  );
}

export default Errorpage;
