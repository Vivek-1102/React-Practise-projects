import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App(){

  const [items,setItems]=useState([])

  function addItem(note){
    setItems((preItems)=>{
      return [...preItems,note]
          
    })
  }

  function deleteItem(id){
    setItems((prevItems)=>{
      return prevItems.filter((item,index)=>{
        return index!==id
      })
    })
  }

    return <div>
     <Header />
     <CreateArea 
     onAdd={addItem}
     />

     {items.map((item,index)=>{

      return  <Note
        id={index}
        key={index}
        title={item.title}
        content={item.content}
        onDelete={deleteItem}
     />
     })}
        
  
    <Footer />
    </div> 
}
export default App;