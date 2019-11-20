import React from "react";
import "./style.css";

function Wrapper (props){
    return <article className="wrapper bg-primary">{props.children}</article>
}

export default Wrapper