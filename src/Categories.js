import React from 'react';

const Categories = ({categoryName, filterItem}) => {
  return (
    <div className="btn-container">
       <button className="filter-btn" onClick={()=>filterItem('All')} >All</button>
        {
            categoryName.map(name =>{
                return(
                    <button className="filter-btn" onClick={() =>
                        filterItem(name)
                        }>{name}</button>
                )
            })
        }
    </div>
  )
};

export default Categories;
