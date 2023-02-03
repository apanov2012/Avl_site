import React from "react";

const HorizontalBlockSmall = ({ blockContent }) => {
    return (
        <div className="horizontalBlock bborder">
            <div className="horizontalBlock-name fs-40 ">
                <div className="horizontalBlockSmall-left-arrow imgBack "></div>
                <span className="horizontalBlock-name-name cp">
                    {blockContent.name}
                </span>
            </div>
            {/* <div className="horizontalBlock-textBlock fs-16 ">
                {blockContent.textBlock1}
            </div> */}
            <div className="horizontalBlockSmall-textBlock fs-16 ">
                {blockContent.textBlock}
            </div>
        </div>
    );
};

export default HorizontalBlockSmall;
