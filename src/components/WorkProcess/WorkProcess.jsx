import React from "react";
import "./WorkProcess.css";
import WorkProcessVid from "../../assets/videos/video.mp4";
import ReactPlayer from "react-player";

const WorkProcess = () => {
    return (
        <div className="workprocess section__padding">
            <div className="container">
                <div className="workprocess__content text__center">
                    <h2 className="section__title text__cap">Glimpse of our events</h2>
                    <p className="para__text">
                    <b>A Glimpse into Weal Health Tech Club | Events & Innovations at PES University</b>
                    </p>

                    <div className="vid__container">
                        <ReactPlayer url={WorkProcessVid} playing loop controls width="100%" height="auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;
