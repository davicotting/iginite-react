import { ReactNode, useEffect, useState, useCallback } from "react";
import { createContext } from "use-context-selector";
import { api } from "../../lib/axios";

export interface Transactions {
  category: string;
  createdAt: string;
  description: string;
  id: number;
  price: number;
  type: "income" | "outcome";
}

interface createTransactionType {
  category: string;
  description: string;
  price: number;
  type: "income" | "outcome";
}

interface TransactionsType {
  transactions: Transactions[];
  fetchTransactions: (query?: string) => Promise<void>;
  createNewTransaction: (data: createTransactionType) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsType);

interface TransactionsContextProvider {
  children: ReactNode;
}

export function TransactionsContextProvider({
  children,
}: TransactionsContextProvider) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: 'desc',
        q: query,
      },
    });

    setTransactions(response.data);
  }, []);

  const createNewTransaction = useCallback(async (data: createTransactionType) => {
    const { category, description, price, type} = data;
    const response = await api.post("/transactions", {
      category,
      description, 
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions((prevState) => [response.data, ...prevState]);
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions: transactions, fetchTransactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
