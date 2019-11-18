import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


// JOGO DE BLACKJACK - PROJETO SEXTA SEMANA 1//


//1.
alert("Bem vindo ao jogo de Blackjack")


//2. 3. 4.
if(confirm("Quer iniciar uma nova rodada?")) {
	const cartaum = comprarCarta()
  const cartadois = comprarCarta()

  let somaUsuario = cartaum.valor + cartadois.valor

  const cartatres = comprarCarta()
  const cartaquatro = comprarCarta()

  let somaComputador = cartatres.valor + cartaquatro.valor

  console.log("Usuário - ", cartaum.texto, cartadois.texto, "- pontuação ", somaUsuario)

  console.log("Computador - ", cartatres.texto, cartaquatro.texto, "- pontuação: ", somaComputador)

  if (somaUsuario > somaComputador) {
    console.log("O usuário ganhou")
    } else if (somaComputador > somaUsuario) {
    console.log("O computador ganhou")
    } else if (somaComputador === somaUsuario) {
    console.log("Empate!")
  } 
} else {
	alert("O jogo acabou")
}