import React, { useState } from "react";

const HorizontalBlockDropdown = ({ blockContent }) => {
    const [hideContent, setHideContent] = useState(true);
    const handleContent = () => {
        setHideContent(!hideContent);
    };
    return (
        <div
            className="horizontalBlockDropdown"
            style={
                hideContent ? { height: 150 + "px" } : { height: 350 + "px" }
            }
        >
            <div className="horizontalBlockDropdown-name fs-40          ">
                <div className="horizontalBlockSmall-left-arrow imgBack "></div>
                <span className="horizontalBlockDropdown-name-name cp fs-40">
                    {blockContent.name}
                </span>
            </div>
            <div
                className="horizontalBlockDropdown-textBlock fs-16 "
                style={
                    hideContent
                        ? { right: -25 + "%", height: 40 + "px" }
                        : { right: 0 + "px", height: 100 + "%" }
                }
            >
                {blockContent.textBlock1}
            </div>
            <div
                className="horizontalBlockDropdown-textBlock fs-16 "
                style={hideContent ? { right: -25 + "%" } : { right: 0 + "px" }}
            >
                {blockContent.textBlock2}
                <div className="horizontalBlockDropdown-textBlock-link fs-32 ">
                    <span className="horizontalBlockDropdown-textBlock-link-name cp">
                        {blockContent.linkName}
                    </span>
                    <div className="horizontalBlockDropdown-textBlock-link-arrow imgBack cp"></div>
                </div>
            </div>
            <div
                className="horizontalBlockDropdown-gradientBlock"
                style={
                    !hideContent ? { right: -200 + "px" } : { right: 0 + "px" }
                }
            ></div>
            <div
                className="horizontalBlockDropdown-open imgBack"
                onClick={() => handleContent()}
            ></div>
        </div>
    );
};

export default HorizontalBlockDropdown;
