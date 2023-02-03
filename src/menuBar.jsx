import React from "react";

const MenuBar = ({ handeDropDownMenu, dropdownMenuOpen }) => {
    return (
        <menu className="ma">
            <div className="logo imgBack"></div>
            <div className="menuItemsBack">
                <div className="changeTheme imgBack cp mr-menu"></div>
                <div className="changeLang imgBack cp mr-menu"></div>
                <div className="newsLink cp mr-menu .fs-14">
                    Главные новости часа
                </div>
                <div className="phoneNum mr-menu cd .fs-14">
                    +7(499)393-00-15
                </div>
                <div className="email mr-menu cd .fs-14">info@avl.team</div>
                <div
                    className={
                        !dropdownMenuOpen
                            ? "menuBurger imgBack cp"
                            : "menuBurgerOpen imgBack cp"
                    }
                    onClick={() => handeDropDownMenu()}
                ></div>
            </div>
        </menu>
    );
};

export default MenuBar;
