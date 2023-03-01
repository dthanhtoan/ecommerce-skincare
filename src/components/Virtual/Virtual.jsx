import React from 'react'
// import css ==>
import css from "./Virtual.module.css"

// import imgs
import ReactCompareImage from 'react-compare-image'
import Shade from '../../assets/shade.png'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'


const Virtual = () => {
  return (
    <div className={css.Virtual}>
        <div className={css.left}>
            <span>Virtual Try-On</span>
            <span>Never Buy the weong Shade Again</span>
            <span>Truy now</span>
            <img src={Shade} alt="" />
        </div>

        <div className={css.right}>
            <div className={css.wrapper}>
                <ReactCompareImage leftImage={Before} rightImage={After} />
            </div>
        </div>

    </div>
  )
}

export default Virtual