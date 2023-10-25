import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// style
import "../style/canvas.css";

const CanvasItemWide = (props) => {

    return (
        <>
            <div className="grid-item-wide">
                <text className="item-title">
                    {props.title}
                </text>

                <div className="scroll-box">
                    <div className="scroll-box__wrapper">
                        <div className="scroll-box__container" role="list">
                            <text className="textbox" spellCheck="false">
                                {props.text}
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CanvasItemWide;