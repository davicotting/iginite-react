import logo from "./assets/Logo.svg";
import { Search } from "./components/search";
import { TasksContainer } from "./components/tasks-container";
import clipboard from "./assets/Clipboard.png";
import { useState } from "react";
import { Task } from "./components/task";

 interface TaskProps {
    isFinished: boolean;
    content: string;
}

export function App(){

    const [tasks, setTasks] = useState<TaskProps[]>([]);

    const [inputValue, setInputValue] = useState("")
   

    const taskQuantity = tasks.length;

    const totalFinisehdTasks = tasks.reduce((total, task) => {
        return total + (task.isFinished ? 1 : 0);
    },0);

    function handleDeleteTask(id: string){
        setTasks(tasks.filter(task => task.content !== id))
    }
   
    function handleNewTask(){
        const typedTask: TaskProps = {
            isFinished: false,
            content: inputValue,
        }
        setTasks((prevState) => [...prevState, typedTask]);
    }

    function handleTaskChangeChackValue(id: string){
        const updatedTasks = tasks.map(task => {
            if(task.content === id){
            return {...task, isFinished: !task.isFinished }
        }

        return task;
    
    });

    setTasks(updatedTasks);
       
    }

    

    

    console.log(tasks)

    return(
        <div className="bg-black w-full min-h-screen  font-inter bg-gray_600 text-white">
            <div className="bg-gray_700 h-[200px] w-full flex items-center justify-center">
                <img src={logo} alt="" />
            </div>

            <div className="flex flex-col items-center justify-center px-5 lg:px-[350px]">
            <Search
            confirmButton={handleNewTask}
            onChange={e => setInputValue(e.target.value)}
            />

            <TasksContainer data={tasks} hasFinished={totalFinisehdTasks}/>

            <div className="mt-14 w-full h-max">

            {
                taskQuantity === 0 ?
                
                    (<div className="text-center text-base flex flex-col items-center justify-center gap-4 text-gray_300">
                        <img src={clipboard} alt="" height={56} width={56}/>
                        <p className="text-center font-bold">
                        Você ainda não tem tarefas cadastradas
                        <br />
                        <span className="font-normal">Crie tarefas e organize seus itens a fazer</span>
                        </p>
                    </div>)
                    :(
                        <div className="flex flex-col gap-4 pb-14">
                            {tasks && tasks.map(task => (
                                
                                <Task 
                                content={task.content} 
                                isFinished={task.isFinished} 
                                key={task.content} 
                                changeTask={() => handleTaskChangeChackValue(task.content)}
                                onDelete={() => handleDeleteTask(task.content)}
                                />
                            ))}
                        </div>
                    )
    
            }

            



            </div>
            </div>
        </div>
    )
}