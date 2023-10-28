import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// style
import "../style/canvas.css";

const MVI = (props) => {

    return (
        <>
            <div className="grid-item-mvi">
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

export default MVI;
