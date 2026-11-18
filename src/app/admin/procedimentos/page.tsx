"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";

interface Procedimento {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  duracao: number;
  ativo: boolean;
}

export default function ProcedimentoPage() {
  const [procedimentos, setProcedimentos] = useState<Procedimento[]>([
    {
      id: 1,
      nome: "Hidratação de Carbono",
      descricao:
        "Cerca de 45% a 50% da massa do cabelo é composta por carbono e a Hidratação de Carbono auxilia na reposição, devolve viçosidade, brilho e vitalidade, fortalece a fibra capilar e ajuda a reduzir em até 80% a quebra dos fios.",
      preco: 180,
      duracao: 180,
      ativo: true,
    },
    {
      id: 2,
      nome: "Reposição de Lipídios, Escova e Baby liss",
      descricao:
        "Os lipídios ajudam a proteger a fibra capilar, mantendo a hidratação, a maciez e a elasticidade dos fios. Reduzem o frizz, combatem o ressecamento, devolvem o brilho e ajudam a proteger os cabelos contra agressões externas.",
      preco: 100,
      duracao: 60,
      ativo: true,
    },
  ]);

  const [modalAberto, setModalAberto] = useState(false);

  const [procedimentoEditando, setProcedimentoEditando] = useState<
    number | null
  >(null);

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [duracao, setDuracao] = useState("");

  function salvarProcedimento() {
    if (!nome || !descricao || !preco || !duracao) {
      alert("Preencha todos os campos.");
      return;
    }

    if (procedimentoEditando !== null) {
      setProcedimentos((listaAtual) =>
        listaAtual.map((procedimento) =>
          procedimento.id === procedimentoEditando
            ? {
                ...procedimento,
                nome,
                descricao,
                preco: Number(preco),
                duracao: Number(duracao),
              }
            : procedimento,
        ),
      );
    } else {
      const novoProcedimento: Procedimento = {
        id: Date.now(),
        nome,
        descricao,
        preco: Number(preco),
        duracao: Number(duracao),
        ativo: true,
      };

      setProcedimentos((listaAtual) => [...listaAtual, novoProcedimento]);
    }

    limparFormulario();
  }

  function limparFormulario() {
    setNome("");
    setDescricao("");
    setPreco("");
    setDuracao("");
    setProcedimentoEditando(null);
    setModalAberto(false);
  }

  function editarProcedimento(procedimento: Procedimento) {
    setProcedimentoEditando(procedimento.id);

    setNome(procedimento.nome);
    setDescricao(procedimento.descricao);
    setPreco(String(procedimento.preco));
    setDuracao(String(procedimento.duracao));

    setModalAberto(true);
  }

  function excluirProcedimento(id: number) {
    const confirmar = confirm("Deseja excluir este procedimento?");

    if (!confirmar) return;

    setProcedimentos(
      procedimentos.filter((procedimento) => procedimento.id !== id),
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f3ee] p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-[#55483f]">
              Procedimentos
            </h1>
            <p className="mt-2 text[#8b7b6d]">
              Gerencie os serviços oferecidos por você.
            </p>
          </div>

          <button
            onClick={() => {
              limparFormulario();
              setModalAberto(true);
            }}
            className="flex items-center gap-2 rounded-lg bg-[#b69a69] px-5 py-3 text-white hover:bg-[#92764d]"
          >
            <Plus size={18} />
            Novo Procedimento
          </button>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-[#f7f3ee] text-[#55483f]">
              <tr>
                <th className="p-4">Procedimento</th>
                <th className="p-4">Preço</th>
                <th className="p-4">Duração</th>
                <th className="p-4">Status</th>
                <th className="p-4">Ações</th>
              </tr>
            </thead>

            <tbody>
              {procedimentos.map((procedimento) => (
                <tr key={procedimento.id} className="border-t border-[#eee5dc]">
                  <td className="p-4">
                    <p className="font-medium text-[#55483f]">
                      {procedimento.nome}
                    </p>
                    <p className="text-sm text-[#8b7b6d]">
                      {procedimento.descricao}
                    </p>
                  </td>

                  <td className="p-4 text-[#55483f]">
                    {procedimento.preco.toLocaleString("pt-Br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>

                  <td className="p-4 text-[#55483f]">
                    {procedimento.duracao} minutos
                  </td>

                  <td className="p-4">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                      Ativo
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex gap-3">
                      <button
                        title="Editar procedimento"
                        onClick={() => editarProcedimento(procedimento)}
                        className="text-[#b69a69]"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        title="Excluir procedimento"
                        onClick={() => excluirProcedimento(procedimento.id)}
                        className="text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {modalAberto && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-lg rounded-xl bg-white p-6">
              <h2 className="mb-6 text-xl font-semibold text-[#55483f]">
                Novo procedimento
              </h2>

              <div className="space-y-4">
                <input
                  placeholder="Nome do procedimento"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full rounded-lg border p-3"
                />

                <textarea
                  placeholder="Descrição"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  className="w-full rounded-lg border p-3"
                />

                <input
                  type="number"
                  placeholder="Preço"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                  className="w-full rounded-lg border p-3"
                />

                <input
                  type="number"
                  placeholder="Duração em minutos"
                  value={duracao}
                  onChange={(e) => setDuracao(e.target.value)}
                  className="w-full rounded-lg border p-3"
                />
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setModalAberto(false)}
                  className="rounded-lg border px-4 py-2 text-[#55483f]"
                >
                  Cancelar
                </button>

                <button
                  onClick={salvarProcedimento}
                  className="rounded-lg bg-[#b69a69] px-4 py-2 text-white"
                >
                  {procedimentoEditando !== null
                    ? "Salvar alterações"
                    : "Salvar procedimento"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
