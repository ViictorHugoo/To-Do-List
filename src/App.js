import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [list, setList] = useState(["taks1", "task2"])
  let [newTask, setNewTask] = useState("")

  useEffect(() => {
    setList([]);
  },[])


  return (
    <>
      <input value={newTask} onChange={name => setNewTask(name.target.value)}></input>
      <button onClick={() => addNewTask()}>Adicionar</button>
      
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <input type="checkbox"></input>
            {item}
            <button onClick={() => remTask(index)}>
              Remover
            </button>
            <button onClick={() => updateTask(index)}>
              Editar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
  
  function addNewTask() {

    if(newTask.length <= 0){
      alert("Por favor, insira um nome para a tarefa")
      return;
    }
    
    let itemIndex = list.indexOf(newTask);
    if(itemIndex >= 0){
      alert("Você já adicionou essa tarefa.");
      return;
    }
    
    setList([...list, newTask])
    setNewTask("")
  }

  function remTask(index) {
    let tempArray = [...list];
    tempArray.splice(index,1);
    setList(tempArray);
  }

  function updateTask(index) {
    
  }
}

export default App;
