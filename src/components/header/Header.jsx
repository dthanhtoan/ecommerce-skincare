import React from 'react';
// import css ==>
import css from "./Header.module.css";
//import imgs ==>
import logo from "../../assets/logo.png"
// import react icons ==>
import {CgShoppingBag} from 'react-icons/cg';


const header = () => {
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={logo} alt="" />
            <span> dthanhtoan </span>
        </div>
        <div className={css.right}>
            <div className={css.menu}>
                <ul className={css.menu}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
            </div>

            <input type="text" placeholder='Search' className={css.search} />

            <CgShoppingBag className={css.cart} />

        </div>
    </div>
  )
}

export default header