import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// style
import "../style/canvas.css";


const CanvasItem = (props) => {

    return (
        <>
            <div className="grid-item" onClick={props.onClick}>
                <div className="item-title top">
                    {props.title}
                </div>
                <div className="scroll-box">
                    <div className="scroll-box__wrapper">
                        {props.text}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CanvasItem;
