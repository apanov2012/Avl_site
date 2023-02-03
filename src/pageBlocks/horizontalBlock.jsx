import React from "react";

const HorizontalBlock = ({ blockContent }) => {
    return (
        <div className="horizontalBlock">
            <div className="horizontalBlock-name fs-64 ">
                <span className="horizontalBlock-name-num fs-16 ">
                    {blockContent.num}.
                </span>
                <span className="horizontalBlock-name-name cp">
                    {blockContent.name}
                </span>
            </div>
            <div className="horizontalBlock-textBlock fs-16 ">
                {blockContent.textBlock1}
            </div>
            <div className="horizontalBlock-textBlock fs-16 ">
                {blockContent.textBlock2}
                <div className="horizontalBlock-textBlock-link fs-32 ">
                    <span className="horizontalBlock-textBlock-link-name cp">
                        {blockContent.linkName}
                    </span>
                    <div className="horizontalBlock-textBlock-link-arrow imgBack cp"></div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalBlock;
