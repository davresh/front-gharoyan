
import React, { useContext } from 'react';
import './style.scss'
import Product from '../product/Index';
import {MyContext} from '../../../myContext';


const Home = () =>{
    const {product} = useContext(MyContext)
    return (
        <main className='G-main-page'>
            {product.map(product => <Product key={product.id} product={product}/>)}
        </main>
    )
}

export default Home