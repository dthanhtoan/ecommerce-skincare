import React, { useState } from 'react'

// import css
import css from "./Products.module.css"

// import imgs
import Plane from "../../assets/plane.png"

// import products data
import { ProductsData } from '../../data/products'

//import AutoAnimation
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Products = () => {

    const [parent] = useAutoAnimate()

    const [MenuProducts, setMenuProducts] = useState(ProductsData)

    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product) => product.type === type))
    }

  return (
    <div className={css.container}>

        <img src={Plane} alt="" />
        <h1> Our Featured Products </h1>

        <div className={css.products}>
            <ul className={css.menu}>
                <li onClick={() => setMenuProducts(ProductsData)}>All</li>
                <li onClick={() => filter("skin care")}>Skin Care</li>
                <li onClick={() => filter("conditioner")}>Conditioners</li>
                <li onClick={() => filter("foundation")}>Foundations</li>
            </ul>

            <div className={css.list} ref={parent}>
                {
                    MenuProducts.map((product, i) => (
                        <div className={css.product}>
                            <div className={css.name}>
                                <span>{product.name}</span>
                            </div>

                            <span>{product.price}$</span>

                            <div>Show now</div>

                            <img src={product.img} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Products