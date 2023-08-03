const aluno1 = {
	nome: 'Gabriel',
	notas: [8, 9],
};

const aluno2 = {
	nome: 'Daphyny',
	notas: [9, 10],
};

console.log('Primeiro Aluno:');
console.log('Nome: ' + aluno1.nome);
console.log('Notas: ' + aluno1.notas.join(', '));

console.log('Segundo Aluno:');
console.log('Nome: ' + aluno2.nome);
console.log('Notas: ' + aluno2.notas.join(', '));

let mediaAluno1 = (aluno1.notas[0] + aluno1.notas[1]) / aluno1.notas.length;

let mediaAluno2 = (aluno2.notas[0] + aluno2.notas[1]) / aluno2.notas.length;

console.log('Média do Primeiro Aluno: ' + mediaAluno1);

console.log('Média do Segundo Aluno: ' + mediaAluno2);

var mediaTurma = (mediaAluno1 + mediaAluno2) / 2;

console.log('Média da Turma: ' + mediaTurma);
