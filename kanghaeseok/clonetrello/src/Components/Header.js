import React from "react";
import "./Header.scss";
import { faTh, faHome, faChartBar, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        
        <div className="header_wrap">
            <div className="left_container">
                <div className="left__menu left__item">
                    <FontAwesomeIcon icon={faTh} className="item__icon" />
                </div>
                <div className="left__home left__item">
                    <FontAwesomeIcon icon={faHome} className="item__icon" />
                </div>
                <div className="left__boards_btn left__item">
                    <FontAwesomeIcon icon={faChartBar} className="item__icon" />
                    <span className="item__icon item__text">Boards</span>
                </div>
                <div className="left__search left__item">
                    <input type="search" name="" id="input-search"/>
                    <FontAwesomeIcon icon={faSearch} className="item__icon search-icon" />
                </div>
            </div>
            <div className="center_container"></div>
            <div className="right_container"></div>
        </div>
    )
}

export default Header;