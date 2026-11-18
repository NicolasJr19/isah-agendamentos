import Services from "@/components/home/Service";
import { ArrowRight, CalendarDays, Menu, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Cabeçalho */}
      <header className="border-b border-[#e7ded4] bg-[#f7f3ee]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="font-serif text-2xl text-[#55483f]">
              ISADORA MARCELLE
            </h1>

            <p className="text-[9px] tracking-[3px] text-[#92764d]">
              BELEZA & AUTOCUIDADO
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#inicio" className="hover:text-[#b69a69]">
              Início
            </a>

            <a href="#procedimentos" className="hover:text-[#b69a69]">
              Procedimentos
            </a>

            <a href="#sobre" className="hover:text-[#b69a69]">
              Sobre mim
            </a>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a href="/login" className="text-sm">
              Entrar
            </a>

            <a
              href="/cadastro"
              className="rounded-full bg-[#b69a69] px-6 py-3 text-sm text-white transition hover:bg-[#92764d]"
            >
              Agendar horário
            </a>
          </div>

          <button className="md:hidden" aria-label="Abrir menu">
            <Menu size={25} />
          </button>
        </div>
      </header>

      {/* Apresentação */}
      <section
        id="inicio"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28"
      >
        <div className="space-y-7">
          <div className="flex items-center gap-2 text-sm tracking-widest text-[#a88b69]">
            <Sparkles size={17} />
            <span>SEU MOMENTO DE AUTOCUIDADO</span>
          </div>

          <h2 className="font-serif text-5xl leading-tight text-[#55483f] md:text-7xl">
            Sua beleza merece um momento especial.
          </h2>

          <p className="max-w-lg text-lg leading-relaxed text-[#8b7b6d]">
            Descubra nossos procedimentos, cuide de você e reserve seu próximo
            momento de beleza de maneira simples e especial.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/agendamento"
              className="flex items-center gap-3 rounded-full bg-[#b69a69] px-8 py-4 text-white transition hover:bg-[#92764d]"
            >
              Agendar meu horário
              <ArrowRight size={18} />
            </a>

            <a
              href="#procedimentos"
              className="rounded-full border border-[#c8a98a] px-8 py-4 text-[#55483f] transition hover:bg-[#e8dcce]"
            >
              Conhecer procedimentos
            </a>
          </div>
        </div>

        {/* Imagem principal */}
        <div className="relative">
          <div className="absolute -right-3 -top-3 h-full w-full rounded-t-full border border-[#c8a98a] md:-right-5 md:-top-5" />

          <div className="relative h-[420px] overflow-hidden rounded-t-full bg-[#e8dcce] md:h-[550px]">
            <Image
              src="/images/isah-hero.jpeg"
              alt="Isadora Marcelle sorrindo, com cabelo solto e maquiagem leve."
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Procedimentos */}
      <Services />
      {/* <section id="procedimentos" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
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

          <div className="mt-12 rounded-2xl border border-[#e7ded4] bg-[#f7f3ee] p-12">
            <CalendarDays size={40} className="mx-auto text-[#b69a69]" />

            <h3 className="mt-4 font-serif text-xl">
              Em breve, nossos procedimentos
            </h3>

            <p className="mt-2 text-sm text-[#8b7b6d]">
              Estamos preparando nosso catálogo para você.
            </p>
          </div>
        </div>
      </section> */}

      {/* Sobre */}
      <section id="sobre" className="px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <Sparkles size={30} className="mx-auto text-[#b69a69]" />

          <h2 className="mt-5 font-serif text-4xl">
            Mais do que beleza, uma experiência.
          </h2>

          <p className="mt-5 leading-relaxed text-[#8b7b6d]">
            Um atendimento dedicado ao cuidado, à autoestima e aos momentos
            especiais que você merece.
          </p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-[#e7ded4] bg-white px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-serif text-xl">Isadora Marcelle</p>

          <p className="text-sm text-[#8b7b6d]">
            © 2026 - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
