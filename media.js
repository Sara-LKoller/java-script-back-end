const alunos = [
  { nome: "Aline", notas: [6.0, 5.3, 9.1] },
  { nome: "Fabio", notas: [2.0, 7.3, 8.0] },
  { nome: "Paulo", notas: [9.0, 6.0, 5.4] },
  { nome: "Maria", notas: [10.0, 9.0, 8.5] }
];

alunos.forEach(aluno => {
  const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
  const media = (soma / aluno.notas.length).toFixed(2);
  const status = media >= 7 ? "Aprovado(a)" : "Reprovado(a)";
  
  console.log(`Aluno: ${aluno.nome} | Média: ${media} | Status: ${status}`);
});