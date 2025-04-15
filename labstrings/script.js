// 1
function inverterFrase() {
  const frase = document.getElementById('frase').value;
  let invertida = "";
  for (let i = frase.length - 1; i >= 0; i--) {
    invertida += frase[i];
  }
  document.getElementById('saidaFrase').innerText = invertida;
}

// 2
function destacarVogais() {
  const frase = document.getElementById('vogaisFrase').value;
  let resultado = "";
  for (let i = 0; i < frase.length; i++) {
    const c = frase[i];
    if ("aeiouAEIOUáéíóúâêôãõàèìòùäëïöü".includes(c)) {
      resultado += `<span class=\"bold\">${c}</span>`;
    } else {
      resultado += c;
    }
  }
  document.getElementById('saidaVogais').innerHTML = resultado;
}

// 3
function contarPalavras() {
  const texto = document.getElementById('textoContagem').value.toLowerCase();
  let palavra = "";
  const contagem = {};
  for (let i = 0; i <= texto.length; i++) {
    const c = texto[i] || ' ';
    if (/[a-zà-ü]/.test(c)) {
      palavra += c;
    } else if (palavra.length > 0) {
      contagem[palavra] = (contagem[palavra] || 0) + 1;
      palavra = "";
    }
  }
  const tabela = document.getElementById('tabelaPalavras');
  tabela.innerHTML = '<tr><th>Palavra</th><th>Ocorrências</th></tr>';
  for (let p in contagem) {
    tabela.innerHTML += `<tr><td>${p}</td><td>${contagem[p]}</td></tr>`;
  }
}

// 4
function estatisticasTexto() {
  const texto = document.getElementById('textoEstatistica').value.toLowerCase();
  let palavra = "";
  const contagem = {};
  let totalLetras = 0;
  for (let i = 0; i <= texto.length; i++) {
    const c = texto[i] || ' ';
    if (/[a-zà-ü]/.test(c)) {
      palavra += c;
      totalLetras++;
    } else if (palavra.length > 0) {
      contagem[palavra] = (contagem[palavra] || 0) + 1;
      palavra = "";
    }
  }
  let maisFreq = "";
  let maxFreq = 0;
  let totalPalavras = 0;
  for (let p in contagem) {
    totalPalavras += contagem[p];
    if (contagem[p] > maxFreq) {
      maxFreq = contagem[p];
      maisFreq = p;
    }
  }
  document.getElementById('saidaEstatisticas').innerText =
    `Mais frequente: "${maisFreq}" (${maxFreq}x), Total de palavras: ${totalPalavras}, Letras: ${totalLetras}`;
}

// 5
function substituirTexto() {
  const texto = document.getElementById('textoSubstituir').value;
  const procurar = document.getElementById('procurar').value;
  const substituir = document.getElementById('substituir').value;
  let resultado = "";
  let i = 0;
  while (i < texto.length) {
    if (texto.substr(i, procurar.length) === procurar) {
      resultado += substituir;
      i += procurar.length;
    } else {
      resultado += texto[i];
      i++;
    }
  }
  document.getElementById('saidaSubstituida').innerText = resultado;
}

// 6
function dataPorExtenso() {
  const data = document.getElementById('dataExtenso').value;
  const dia = data.substring(0, 2);
  const mes = parseInt(data.substring(3, 5), 10);
  const ano = data.substring(6);
  const meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  const extenso = `${dia} de ${meses[mes-1]} de ${ano}`;
  document.getElementById('saidaDataExtenso').innerText = extenso;
}

// 7
function verificarSenha() {
  const senha = document.getElementById('senha').value;
  let temMinuscula = false, temMaiuscula = false, temNumero = false, temEspecial = false;
  const especiais = "@#!$%&*()-+=.";
  for (let i = 0; i < senha.length; i++) {
    const c = senha[i];
    if (c >= 'a' && c <= 'z') temMinuscula = true;
    else if (c >= 'A' && c <= 'Z') temMaiuscula = true;
    else if (c >= '0' && c <= '9') temNumero = true;
    else if (especiais.includes(c)) temEspecial = true;
  }
  let forca = 'fraca';
  if (temMinuscula && temMaiuscula && temNumero) forca = 'moderada';
  if (temMinuscula && temMaiuscula && temNumero && temEspecial) forca = 'forte';
  const saida = document.getElementById('forcaSenha');
  saida.innerText = `Força: ${forca}`;
  saida.className = forca;
}

// 8
function codificarTENIS_POLAR() {
  const texto = document.getElementById('textoCodificar').value;
  const mapa = { T: 'P', E: 'O', N: 'L', I: 'A', S: 'R', P: 'T', O: 'E', L: 'N', A: 'I', R: 'S' };
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];
    const upper = letra.toUpperCase();
    if (mapa[upper]) {
      const nova = mapa[upper];
      resultado += letra === upper ? nova : nova.toLowerCase();
    } else {
      resultado += letra;
    }
  }
  document.getElementById('saidaCodificada').innerText = resultado;
}

// 9
function calcularDiasDeVida() {
  const dataStr = document.getElementById('dataNascimento').value;
  const dia = parseInt(dataStr.substring(0, 2), 10);
  const mes = parseInt(dataStr.substring(3, 5), 10) - 1;
  const ano = parseInt(dataStr.substring(6), 10);
  const nascimento = new Date(ano, mes, dia);
  const hoje = new Date();
  let diff = hoje.getTime() - nascimento.getTime();
  let dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById('saidaDiasVida').innerText = `${dias} dias de vida`;
}


// 10
function diferencaSemanas() {
  const data1 = new Date(document.getElementById('data1').value);
  const data2 = new Date(document.getElementById('data2').value);
  let diff = Math.abs(data2.getTime() - data1.getTime());
  let semanas = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  document.getElementById('saidaSemanas').innerText = `${semanas} semanas de diferença`;
}
