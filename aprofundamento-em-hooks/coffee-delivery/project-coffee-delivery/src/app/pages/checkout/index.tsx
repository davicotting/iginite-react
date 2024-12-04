import { ResidenceForm } from "./components/residence-form";
import { PaymentForm } from "./components/payment-form";
import { Cart } from "./components/cart";
export function Checkout() {
  return (
    <section className="px-40 flex w-full justify-between gap-8">
      <div className="flex flex-col justify-between w-full gap-3">
      <ResidenceForm />
      <PaymentForm/>
      </div>
      
      <div className="w-full">
        <Cart/>
      </div>



    </section>
  );
}
