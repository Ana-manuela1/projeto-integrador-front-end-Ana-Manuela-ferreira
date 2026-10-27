// ===== Gráfico de alunos por unidade (Canvas, Aula 5) =====
// O Canvas é "modo imediato": desenha pixels e esquece. Por isso o canvas
// tem texto alternativo no HTML (role, aria-label e conteúdo de fallback).

const canvas = document.getElementById('grafico-alunos');
const ctx = canvas.getContext('2d');

const unidades = ['Centro', 'Zona Sul', 'Litoral'];
const alunos = [320, 270, 190];
const cores = ['#3b82f6', '#1d4ed8', '#93c5fd'];

const larguraBarra = 70;
const espaco = 35;
const baseY = 165;             // linha de base das barras
const escala = 0.45;           // 1 aluno = 0.45 pixel de altura

// limpa antes de desenhar (evita acumular desenhos, Erro 2 da Aula 5)
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.font = '14px Arial';
ctx.textAlign = 'center';

for (let i = 0; i < alunos.length; i++) {
  const x = espaco + i * (larguraBarra + espaco);
  const altura = alunos[i] * escala;

  // barra
  ctx.fillStyle = cores[i];
  ctx.fillRect(x, baseY - altura, larguraBarra, altura);

  // valor acima da barra
  ctx.fillStyle = '#f5f5f5';
  ctx.fillText(alunos[i], x + larguraBarra / 2, baseY - altura - 8);

  // nome da unidade abaixo da barra
  ctx.fillStyle = '#a0a0a0';
  ctx.fillText(unidades[i], x + larguraBarra / 2, baseY + 22);
}
