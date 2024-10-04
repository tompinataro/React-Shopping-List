import React from "react";

export default function ShoppingListRender(items){
    
 //   console.log('items ', items)

    return (
        <>
            <div className="shopping-list">
                <ul>
                    {items.allItems.map(item => {
                        // console.log('item names: ',item.name)
                        return ( <li key = {item.id}> {item.name}: ${item.unit} total amount: {item.quantity}  </li>)
                        
                    })
                
                }



                </ul>


            </div>
        
        
        
        </>



    )
    
}