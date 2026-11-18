import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { Procedimento } from "@/data/procedimentos";

interface ServiceCardProps {
  procedimento: Procedimento;
}

export default function ServiceCard({ procedimento }: ServiceCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-56">
        <Image
          src={procedimento.imagem}
          alt={procedimento.nome}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="space-y-4 p-5">
        <h3 className="font-serif text-xl text-[#55483f]">
          {procedimento.nome}
        </h3>

        <p className="text-sm leading-relaxed text-[#8b7b6d]">
          {procedimento.descricao}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-[#8b7b6d]">A partir de</p>

            <p className="text-lg font-semibold text-[#92764d]">
              {procedimento.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>

          <div className="flex items-center gap-1 text-xs text-[#8b7b6d]">
            <Clock size={15} />
            {procedimento.duracao} min
          </div>
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#b69a69] py-3 text-sm text-white transition hover:bg-[#92764d]">
          Agendar procedimento
          <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}
