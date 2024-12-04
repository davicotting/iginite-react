import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from "../../assets/dt-money-logo.svg";

import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { NewTransactionModal } from "../New-Transaction-Modal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </AlertDialog.Trigger>

          <NewTransactionModal />
        </AlertDialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
