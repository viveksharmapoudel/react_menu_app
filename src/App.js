import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const categoryName= Array.from( new Set(items.map(item => item.category))) 
  
  const [displayItem, setDisplayItem]=useState(items)

  const filterItem = (catName) =>{
    (catName === "All")?
    setDisplayItem(items):
    setDisplayItem( items.filter(item => item.category === catName))
  }
  return (
    <main>
      <header className="title">
        <h3>Menu</h3>
        <div className="underline"></div>
      </header>
      <section>
          <Categories categoryName={ categoryName} filterItem={filterItem} />
          
          <div className="section-center">
            {
              displayItem.map(item =>
                <Menu key={item.id} {...item}/>
              )}
          </div>
      </section>
    </main>
  )
}

export default App;
