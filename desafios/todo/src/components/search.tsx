import { CirclePlus } from "lucide-react";
import { ComponentProps } from "react";


interface InputType extends ComponentProps<"input">{
  confirmButton: () => void;
  pressEnterToConfirm: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}


export function Search({confirmButton, pressEnterToConfirm, ...rest}: InputType) {
  return (
    <header className="flex items-center gap-2 h-12 -mt-7 w-full">
      <input 
      type="text" 
      className="w-full h-full 
      bg-gray_500 placeholder:text-gray_300
      p-4 text-base rounded-md outline-none" 
      placeholder="Adicione uma nova tarefa"
      onKeyDown={pressEnterToConfirm}
      {...rest}
      />

      <button onClick={confirmButton} className="flex gap-2 bg-blue_dark h-full items-center justify-center rounded-md w-[90px] text-xs lg:text-sm font-bold hover:brightness-75 transition-all">  
        Criar
        <CirclePlus width={15} />
      </button>
    </header>
  );
}
