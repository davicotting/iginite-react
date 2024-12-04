import { MapPin } from "phosphor-react";

export function ResidenceForm() {
  return (
    <section>
      <h1 className="font-Baloo text-base_title text-2xl font-semibold mb-[15px]">
        Complete seu pedido
      </h1>
      <div className="p-10 w-full rounded-md bg-base_card flex flex-col justify-between">
        <form className="flex flex-col gap-8">
          <div className="flex gap-2">
            <MapPin size={22} className="text-yellow_dark" />

            <div className="flex flex-col gap-[2px]">
              <h2 className="font-Inter text-lg text-base_subtitle">
                Endereço de Entrega
              </h2>
              <p className="text-base_text">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>

          <div className="w-max flex flex-col gap-4">
            <input
              type="text"
              placeholder="CEP"
              className="p-3 border border-base_button rounded-md w-48 bg-base_input text-base_text placeholder:text-base_label"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Rua"
              className="p-3 border border-base_button rounded-md bg-base_input text-base_text placeholder:text-base_label"
            />

            <div className="flex gap-3">
              <input
                type="number"
                placeholder="Número"
                className="p-3 border border-base_button rounded-md bg-base_input text-base_text placeholder:text-base_label"
              />
              <div>
                <input
                  type="text"
                  placeholder="Complemento"
                  className="p-3 border border-base_button rounded-md bg-base_input text-base_text placeholder:text-base_label"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="number"
                placeholder="Bairro"
                className="p-3 border border-base_button rounded-md bg-base_input text-base_text placeholder:text-base_label"
              />
              <div>
                <input
                  type="text"
                  placeholder="Cidade"
                  className="p-3 border border-base_button rounded-md bg-base_input text-base_text placeholder:text-base_label"
                />
              </div>

              <input
                type="number"
                placeholder="UF"
                className="p-3 border rounded-md border-base_button bg-base_input text-base_text placeholder:text-base_label"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
