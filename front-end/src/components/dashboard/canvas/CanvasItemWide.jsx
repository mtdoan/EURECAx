import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// style
import "../style/canvas.css";

const CanvasItemWide = (props) => {

    return (
        <>
            <div className="grid-item-wide">
                <div className="item-title">
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

export default CanvasItemWide;
