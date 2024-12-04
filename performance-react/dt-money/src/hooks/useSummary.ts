import { useMemo } from "react";
import { TransactionsContext } from "../contexts/TransacationsContext.tsx";
import { useContextSelector } from "use-context-selector";

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  const summary = useMemo(() => {
     return transactions.reduce(
      (acc, transactions) => {
        if (transactions.type === "income") {
          acc.income += transactions.price;
          acc.total += transactions.price;
        }
  
        if (transactions.type === "outcome") {
          acc.outcome += transactions.price;
          acc.total -= transactions.price;
        }
  
        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      }
    );
  }, [transactions])

  return summary;
}
