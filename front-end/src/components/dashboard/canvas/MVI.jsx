import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// style
import "../style/canvas.css";

const MVI = (props) => {

    return (
        <>
            <div className="grid-item-mvi">
                <text className="item-title">
                    {props.title}
                </text>

                <div className="scroll-box">
                    <div className="scroll-box__wrapper">
                        <div className="scroll-box__container" role="list">
                            <text className="textbox" spellcheck="false">
                                {props.text}
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MVI;