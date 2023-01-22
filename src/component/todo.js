import { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/todo.css'
// toast.configure()
function Todo() {
    const [item, setItems] = useState('');
    const [data, setData] = useState([])
    const inputRef = useRef(null);
    const buttonhandle = () => {
        setItems(inputRef.current.value);
        console.log(item, 'this is the item value')
        if (item.length === 0) {
            toast('please enter the value', { position: toast.POSITION.TOP_CENTER })
        }

    }
    const function1 = () => {
        setData((data) => {
            return [...data, item]
        })
        toast('your items is added')
    }
    console.log(data, 'this is the data');
    // const function2=()=>{
    //     console.log(item)
    // }
    return (
        <>
            <div>

                <div className="firstdiv">
                    <div className="innerfirstdiv">
                        <h1 className="heading">
                            Enter Your Todo List
                        </h1>
                    </div>
                    <div className="secondDiv">
                        <div className="secondInnertag">
                            <input ref={inputRef} type="text" placeholder="enter the todo item" className="inputHere" />
                        </div>
                        <button className="btn" onClick={buttonhandle}> click here</button>
                        <button className="btn " onClick={function1}>+</button>
                        <div className="listitems">
                            <ul>
                                {
                                    data.map((items1, i) => {

                                        return (                                           
                                            <div> 
                                                <li key={i} value={items1}>{items1}</li>                                                                                               
                                                </div>

                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>)
}

export default Todo;














