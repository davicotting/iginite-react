interface TaskProps {
  data: object[];
  hasFinished: number;
}

export function TasksContainer({data, hasFinished}: TaskProps) {

  const createdTasks = data.length;

  return (
    <main className="mt-16 w-full">
      <header className="flex w-full items-center justify-between pb-6 border border-x-0 border-t-0 border-b-gray_400">
        <div className="flex items-center gap-2 font-bold text-blue">
          Tarefas criadas
          <span className="bg-gray_400 text-gray_200 text-sm px-2 py-[2px] rounded-full">
            {createdTasks}
          </span>
        </div>

        <div className="flex items-center gap-2 font-bold text-purple">
          Concluídas
          <span className="bg-gray_400 text-gray_200 text-sm px-2 py-[2px] rounded-full font-bold">
          {hasFinished} de {createdTasks}
          </span>
        </div>
      </header>



      
    </main>
  );
}
