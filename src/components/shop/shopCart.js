import React, { Component } from 'react';

function CartButton({className, icon}) {
    return (
        <div className={`${className} cart-button`}>
            <i className={icon}/>
        </div>
    )
}

function ShopContent({className}) {
    return (
        <div className={`${className} cart-content`}>

        </div>
    )
}

class ShopProduct extends Component {
    render() {
        const { className } = this.props;
        return (
           <div className={`${className} shop-cart`}>
               <CartButton className='shop-cart__toggle' icon='fas fa-times'/>
               <ShopContent className='shop-cart__content'/>
           </div>
        )
    }
}

export default ShopProduct;