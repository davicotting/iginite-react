import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from "./styles";
import { X, ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import * as zod from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../contexts/TransacationsContext.tsx"
import { useContextSelector } from "use-context-selector";

export function NewTransactionModal() {

  const createNewTransaction = useContextSelector(TransactionsContext, (context) => {
    return context.createNewTransaction;
  })

  const formModalSchema = zod.object({
    description: zod.string(),
    price: zod.number(),
    category: zod.string(),
    type: zod.enum(["income", "outcome"]),
  })

   type formModalInputs = zod.infer<typeof formModalSchema>

  const { register, handleSubmit, control, reset } = useForm<formModalInputs>({
    resolver: zodResolver(formModalSchema),
    defaultValues: {
      type: "income"
    }
  });

  async function handleCreateTransaction(data: formModalInputs){
    const { category, description, price, type } = data;

    await createNewTransaction({
      category,
      description,
      price,
      type
    });

    reset()
  }

  return (
    <AlertDialog.Portal>
      <Overlay />

      <Content>
        <AlertDialog.Title>Nova Transação</AlertDialog.Title>

        <CloseButton><X size={24}/></CloseButton>

        <form onSubmit={handleSubmit(handleCreateTransaction)}>
          <input type="text" placeholder="Descrição" required {...register("description")} />
          <input type="number" placeholder="Preço" required {...register("price", {valueAsNumber: true})} />
          <input type="text" placeholder="Categoria" required {...register("category")} />

          <Controller 
          control={control}
          name="type"
          render={({ field }) => {
          
          return (
          <TransactionType onValueChange={field.onChange} value={field.value}>
          <TransactionTypeButton variant="income" value="income"><ArrowCircleUp size={24}/>Entrada</TransactionTypeButton>
          <TransactionTypeButton variant="outcome" value="outcome"><ArrowCircleDown size={24}/>Saída</TransactionTypeButton>
          </TransactionType>
          )}}
          />

          <button type="submit">Cadastrar</button>
        </form>

      </Content>
    </AlertDialog.Portal>
  );
}
