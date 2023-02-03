import React, { useEffect, useState } from "react";
import DropdownMenu from "./dropdownMenu";
import MainPage from "./mainPage/mainPage";
import MenuBar from "./menuBar";

const AllBack = () => {
    const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
    const handeDropDownMenu = () => {
        setDropdownMenuOpen(!dropdownMenuOpen);
    };
    useEffect(() => {
        console.log("dropdownMenuOpen in AllBack", dropdownMenuOpen);
    }, [dropdownMenuOpen]);
    return (
        <div className="allBack">
            <MenuBar
                handeDropDownMenu={handeDropDownMenu}
                dropdownMenuOpen={dropdownMenuOpen}
            />
            <DropdownMenu dropdownMenuOpen={dropdownMenuOpen} />
            <MainPage />
        </div>
    );
};

export default AllBack;
