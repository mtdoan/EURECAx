import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// style
import "../style/canvas.css";

// assets
import CanvasItem from "./CanvasItem";
import CanvasItem2 from "./CanvasItem2";
import MVI from "./MVI";
import CanvasItemWide from "./CanvasItemWide";
import KeyTimings from "./KeyTimings";

const Canvas = () => {

    return (
        <>
            <div className="canvas-container">
                
                {/* ROW 1 */}
                <div className="grid-row">
                    <CanvasItem title={"EVENT"} text={"How might we build a dashboard and local LLM that supports problem solving for planning and prototyping for Defence and their partners in order to accelerate outcomes."}/>
                    <CanvasItem title={"UNDERSTAND"} text={"The solution will have two main components. A dashboard and a learning language model. Other components include a database and an API."} />
                    <CanvasItem title={"REFINE"} text={"Dashboard login /registration, navigation menu, canvas, profile settings LLM local LLM selection, hosting requirements, training requirements, additional data requirements..."} />
                    <CanvasItem title={"EXPLORE"} text={"Dashboard login /registration, navigation menu, canvas, profile settings LLM local LLM selection, hosting requirements, training requirements, additional data requirements..."} />
                    <CanvasItem title={"CREATE"} text={"Dashboard login /registration, navigation menu, canvas, profile settings LLM local LLM selection, hosting requirements, training requirements, additional data requirements..."} />
                    <CanvasItem title={"ACTION"} text={"MVP, Action Plan, SOP, Transfer Plan, Engagement Plan, Return to Model, Action Statement: By October, we would have created an MVP for Defence and their partners that provid..."} />
                </div> 

                {/* ROW 2 */}
                <div className="grid-row">
                    <CanvasItem title={"INNOVATION WNGO"} text={""} />

                    <div className="grid-inner">
                        <div className="grid-inner-row">
                            <CanvasItem2 title={"Feasibility"} text={""} />
                            <CanvasItem2 title={"Viability"} text={""} />
                            <CanvasItem2 title={"Desirability"} text={""} />
                            <MVI title={"MINIMUM VIABLE IDEA"} text={""} />
                            <CanvasItem2 title={"Learn"} text={""} />
                            <CanvasItem2 title={"Build"} text={""} />
                            <CanvasItem2 title={"Measure"} text={""} />
                        </div>
                        
                        <div className="grid-inner-row-2">
                            <CanvasItemWide title={"VISION"} text={""} />
                            <CanvasItemWide title={"IMPACT"} text={""} />
                        </div>

                        <KeyTimings/>
                    </div>

                    <CanvasItem title={"INNOVATION OGRP"} text={""} />
                </div>                 
            </div>
        </>
    )
}

export default Canvas;