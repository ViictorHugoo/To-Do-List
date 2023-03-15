import Title from "./container/Title";
import DoneTask from "./container/Task/done/DoneTask";
import AddTaskBtn from "./container/Task/AddTaskBtn";
import NotDoneTask from "./container/Task/notDone/NotDoneTask";

function Container(){
    return(
      <>
        <AddTaskBtn/>
        <Title name="A fazer"/>
        <NotDoneTask/>
        <Title name="Feito"/>
        <DoneTask/>
        
      </>  
    )
} 

export default Container;