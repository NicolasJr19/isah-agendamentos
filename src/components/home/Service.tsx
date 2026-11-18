import { procedimentos } from "@/data/procedimentos";
import ServiceCard from "@/components/home/ServiceCard";

export default function Services() {
  return (
    <section id="procedimentos" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-xs tracking-[4px] text-[#b69a69]">
            NOSSOS SERVIÇOS
          </span>

          <h2 className="mt-4 font-serif text-4xl text-[#55483f]">
            Um cuidado especial para você
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[#8b7b6d]">
            Conheça nossos procedimentos e encontre o momento ideal para cuidar
            de você.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {procedimentos.map((procedimento) => (
            <ServiceCard key={procedimento.id} procedimento={procedimento} />
          ))}
        </div>
      </div>
    </section>
  );
}
