import { CurrencyDollar, CreditCard } from "phosphor-react";

export function PaymentForm() {
  return (
    <section className="w-full mb-10">
      <div className="p-10 w-full rounded-md bg-base_card flex flex-col justify-between">
        <form className="flex flex-col gap-8">
          <div className="flex gap-2">
            <CurrencyDollar size={22} className="text-yellow_dark" />

            <div className="flex flex-col gap-[2px]">
              <h2 className="font-Inter text-lg text-base_subtitle">
                Pagamento
              </h2>
              <p className="text-base_text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <div className="w-full flex justify-between">
          <button
              className="p-3 border border-base_button rounded-md w-48 bg-base_input text-base_text placeholder:text-base_label"
            >
               Cartao de credito
            </button>
            <button
              className="p-3 border border-base_button rounded-md w-48 bg-base_input text-base_text placeholder:text-base_label"
            >
                Cartao de debito
            </button>
            <button
              className="p-3 border border-base_button rounded-md w-48 bg-base_input text-base_text placeholder:text-base_label"
            >
                Dinheiro
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
