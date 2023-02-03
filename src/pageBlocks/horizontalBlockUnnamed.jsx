import React from "react";

const HorizontalBlockUnnamed = ({ blockContent }) => {
    return (
        <div className="horizontalBlockUnnamed bborder">
            <div className="horizontalBlockUnnamed-textBlock fs-32 ">
                {blockContent.textBlock}
            </div>
        </div>
    );
};

export default HorizontalBlockUnnamed;
