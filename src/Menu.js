import React from 'react';

const Menu = ({title,price, img, desc}) => {
  return (
      <div className="menu-item">
        <img src={img} className="photo"/>
        <div className="item-info">
            <header >
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
            </header>
            <article className="item-text">{desc}</article>
        </div>
      </div>
  )
};

export default Menu;
