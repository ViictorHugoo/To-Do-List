import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'



function App () {

    const [toDo, setToDo] = useState([]);

    //temporario
    const [newTask, setNewTask] = useState('');
    const [updateData, setUpdateData] = useState('');

    const addTask = () => {
        if(newTask){
            let num = toDo.length + 1;
            let newEntry = { id: num, title: newTask, status: false}
            setToDo([...toDo, newEntry])
            setNewTask('');
        }
    }

    const deleteTask = (id) => {
        let newTasks = toDo.filter(task => task.id !== id)
        setToDo(newTasks);
    }

    const markDone = (id) => {
        let newTask = toDo.map( task => {
            if(task.id === id){
                return ({...task, status: !task.status})
            }
            return task;
        })
        setToDo(newTask)
    }

    const cancelUpdate = () =>{
        setUpdateData('');
    }

    const changeTask = (e) => {
        let newEntry = {
            id: updateData.id,
            title: e.target.value,
            status: updateData.status ? true : false
        }
        setUpdateData(newEntry);
    }

    const updateTask = () => {
        let filterr = [...toDo].filter(task => task.id !== updateData.id);
        let updatedObjetct = [...filterr, updateData]
        setToDo(updatedObjetct);
        setUpdateData('');
    }


    return(
    <div className="conteiner App">
        <br/><br/>
        <h1>To do List</h1>
        <br/><br/>
    
    
    {updateData && updateData ? (
        <>
            <div className="line">
                <div className="column">
                    <input 
                        value={ updateData && updateData.title}
                        onChange={(e) => changeTask(e)}
                        className="control"/>
                </div>
                <div className="colAuto">
                    <button className="btnSuccess mr-20"
                        onClick={updateTask}>Atualizar</button>
                    <button className="btnWarning" 
                        onClick={cancelUpdate}>Cancelar</button>
                </div>
            </div>
            <br/>
        </>) : (
        <>
            <div className="line">
                <div className="column">
                    <input 
                        value={newTask}
                        onChange={ (e) => setNewTask(e.target.value)}
                        className="control"/>
                </div>
            <div className="colAuto">
                <button 
                    onClick={addTask}
                    className='btnSuccess'>Adicionar</button>
            </div>
            </div>
            <br/>
        </>)}

    
    {toDo && toDo.length ? '' : (<h4>Sem tarefas</h4>)}
    {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map( (task, index)  => {
            return (
                <React.Fragment key={task.id}>

                    <div className="colTask">
                        <div className={task.status ? 'done' : ''}>
                            <span className="taskNumber">{index+1}</span>
                            <span className="taskText">{task.title}</span>
                        </div>
                        <div className='icons'>
                            <span title={task.status ? 'não feita' : 'feita'}
                            onClick={(e) => markDone(task.id)}><FontAwesomeIcon icon={faCircleCheck}/></span>
                            
                            {task.status ? null : (
                                <span title="editar"
                                onClick={() => setUpdateData({
                                    id: task.id,
                                    title: task.title,
                                    status: task.status ? true : false
                                })}><FontAwesomeIcon icon={faPen}/></span>
                            )}
                            
                            <span title="apagar"
                            onClick={() => deleteTask(task.id)}
                            ><FontAwesomeIcon icon={faTrashCan}/></span>
                        </div>
                    </div>
                </React.Fragment>
            )
        })
        }
    
    </div>
    )

}
export default App;
