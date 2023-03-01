import React from 'react'
// import css ==>
import css from "./Hero.module.css"
// import imgs
import HeroImg from "../../assets/hero.png" 
// improt icons
import {RiShoppingBagFill} from "react-icons/ri"
import {BsArrowRight} from "react-icons/bs"

const Hero = () => {
  return (
    <div className={css.container}>

        {/* left side */}
        <div className={css.h_sides}>
           <span className={css.text_1} > Skin protection cream </span>

           <div className={css.text_2}>
                <span>Trendy Colection</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam inventore quaerat, dicta dolorum eius enim odit eveniet alias cumque ab eaque voluptas quasi blanditiis atque nesciunt laudantium minima aliquam?</span>
           </div>
        </div>

        {/* middle side hero images */}
        <div className={css.wrapper}>
            <div className={css.blueCircle}></div>
            <img src={HeroImg} alt="" width={600} />
            <div className={css.cart_2}>
                <RiShoppingBagFill/>

                <div className={css.signup}>
                    <span>Best Signup Offers</span>

                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </div>
        </div>

        {/* right side */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>Monthly Traffic</span>
            </div>
            <div className={css.customers}>
                <span>100k</span>
                <span>Happy Customers</span>
            </div>
        </div>

    </div>
  )
}

export default Hero