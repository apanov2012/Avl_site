import React from "react";

const LargeImage = ({ imageUrl }) => {
    return (
        <>
            <img
                src={imageUrl}
                alt="error"
                className="imageLargeBlock"
            />
        </>
    );
};

export default LargeImage;
