import React from "react";

const PageHeadSubMenu = ({ subMenuList, openedSubMenu }) => {
    return (
        <div
            className="pageHeadSubMenu open-close"
            style={
                !openedSubMenu
                    ? {
                          transform: "scaleY(0)"
                      }
                    : {
                          transform: "scaleY(1)"
                      }
            }
        >
            {subMenuList.map((item, index) => (
                <div
                    className="pageHeadSubMenu-point fs-16"
                    key={index}
                >
                    <div className="pageHeadSubMenu-point-name cp">
                        <span>{index + 1}.</span>
                        <span>{item}</span>
                    </div>

                    <hr className="pageHeadSubMenu-point-hr" />
                </div>
            ))}
        </div>
    );
};

export default PageHeadSubMenu;
