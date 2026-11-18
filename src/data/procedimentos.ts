export interface Procedimento {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  duracao: number;
  imagem: string;
}

export const procedimentos: Procedimento[] = [
  {
    id: 1,
    nome: "Hidratação de Carbono",
    descricao:
      "Cerca de 45% a 50% da massa do cabelo é composta por carbono e a Hidratação de Carbono auxilia na reposição, devolve viçosidade, brilho e vitalidade, fortalece a fibra capilar e ajuda a reduzir em até 80% a quebra dos fios.",
    preco: 180,
    duracao: 180,
    imagem: "/images/procedimento-01.png",
  },
  {
    id: 2,
    nome: "Reposição de Lipídios, Escova e Baby liss",
    descricao:
      "Os lipídios ajudam a proteger a fibra capilar, mantendo a hidratação, a maciez e a elasticidade dos fios. Reduzem o frizz, combatem o ressecamento, devolvem o brilho e ajudam a proteger os cabelos contra agressões externas.",
    preco: 100,
    duracao: 60,
    imagem: "/images/procedimento-02.png",
  },
];
