import React from "react";
import "./Header.scss";

const Header = () => {
    return (
        <div className="header_wrap">
            <div className="left_container">
                <div className="left__menu left__item"></div>
                <div className="left__home left__item"></div>
                <div className="left__boards_btn left__item"></div>
                <div className="left__search left__item"></div>
            </div>
            <div className="center_container"></div>
            <div className="right_container"></div>
        </div>
    )
}

export default Header;