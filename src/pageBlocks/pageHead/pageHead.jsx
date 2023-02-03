import React, { useState } from "react";
import PageHeadSubMenu from "./pageHeadSubMenu";

const PageHead = ({ pageName, subMenuList }) => {
    const [openedSubMenu, setOpenedSubMenu] = useState(false);
    const handleSubMenu = () => {
        setOpenedSubMenu(!openedSubMenu);
    };
    return (
        <div className="pageHead">
            <div className="pageHead-name fs-100 cd">{pageName}</div>
            <div
                className="pageHead-sideSlideMenuBack-closed-arrow  imgBack cp"
                style={
                    openedSubMenu
                        ? { transform: "rotate(-0.25turn)" }
                        : { transform: "rotate(0)" }
                }
                onClick={() => handleSubMenu()}
            ></div>
            <PageHeadSubMenu
                subMenuList={subMenuList}
                openedSubMenu={openedSubMenu}
            />
            <hr />
        </div>
    );
};

export default PageHead;
