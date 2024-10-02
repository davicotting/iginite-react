
    import { Trash } from "lucide-react";
    import checkIcon from "../assets/check-icon.svg";


    interface TaskProps {
        changeTask: () => void;
        onDelete: (id: string) => void;
        content: string;
        isFinished: boolean;
    }




    export function Task({content, isFinished, changeTask, onDelete}: TaskProps){

        console.log(isFinished);

        function handleDelete(){
            onDelete(content)
        }
         
        return(
            <div className="flex items-start justify-between bg-gray_500 p-4 rounded-lg cursor-pointer">
                <div className="flex gap-3 items-start w-full">
               

                <label className="relative cursor-pointer ">
                <input type="checkbox" onClick={changeTask} className="opacity-0 h-full w-full absolute"/>

                <div className={
                `cursor-pointer flex items-center justify-center h-5 w-5 rounded-full border-2 border-blue hover:bg-blue_dark hover:opacity-70 transition-all 
                    ${isFinished=== true ? "bg-purple border-0" : ""}`} onClick={changeTask}>
                    {isFinished === true && <img src={checkIcon}/>}
                </div>
                </label>
            
                <p className={`${isFinished == true ? "line-through text-gray_400": ""} `}>{content}</p>
                </div>
                

                <Trash className="text-gray_300 cursor-pointer h-8 w-8 hover:text-red p-[6px] hover:bg-gray_400 rounded-md" 
                onClick={handleDelete}/>

            </div>
        )
    }