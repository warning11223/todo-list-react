import './App.css';
import TodoList from "./todo/TodoList";
import React, {useEffect} from "react";
import Context from "./context";
import Loader from "./todo/Loader";
import Modal from "./modal/Modal";


const AddTodo = React.lazy(() => new Promise(resolve => {
    setTimeout(() => {
        resolve(import('./todo/AddTodo'))
    }, 3000)
}))


function App() {
    const [state, setState] = React.useState([]);
    const [loader, setLoader] = React.useState(true);



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(arr => {
                setTimeout(() => {
                    setState(arr)
                    setLoader(false)
                }, 2000)
            })
    }, [])

    function toggleTodo(id) {
        setState(
            state.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed
                }
                return item
            })
        )
    }

    function removeTodo(id) {
       setState(state.filter(item => item.id !== id))
    }

    function addTodo(title) {
       setState(state.concat([{
           title: title,
           id: Date.now(),
           completed: false
       }]))

    }



  return (
      <Context.Provider value={{removeTodo: removeTodo}}>
          <div className='wrapper'>
              <h1>todo list</h1>
              <Modal/>
              <React.Suspense fallback={<Loader/>}>
                  <AddTodo onCreate={addTodo}/>
              </React.Suspense>

              {loader && <Loader/>}
              {state.length ? <TodoList obj={state} onToggle={toggleTodo}/> : loader ? null : <span>No todo lists</span>}
          </div>
      </Context.Provider>

  );
}

export default App;
