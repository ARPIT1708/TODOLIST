import React, {useState} from "react";
import ToDoList from './ToDoList.jsx';

const App = () => {
    const [inputlist,changeinput] = useState("");
    const [Items,setItems] = useState([]);

    const itemEvent = (event) => {
         changeinput(event.target.value);
    }
    const addList = () => {
        setItems((oldItems) => {
            return [...oldItems,inputlist];
        })
        changeinput('');
    }
    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrEle,index) => {
                 return index !== id ;
            });
        });
    }
    return (
        <>
        <div className = "main_div">
            <div className = "center_div">
              <br/>
                  <h1>TODO - LIST</h1>
              <br/>
              <input type="text" placeholder="Enter an Item" onChange = { itemEvent} value={inputlist}/>
              <button onClick={addList}>+</button>

              <ol>
                 {/*<li>{inputlist}</li>*/}
                 {
                     Items.map((itemval,index) => {
                        return <ToDoList key={index} 
                        id = {index}
                        text = {itemval}
                        onSelect = {deleteItem}
                        />;
                     })
                 }
              </ol>
            </div>
        </div>
        </>
    );
};

export default App;