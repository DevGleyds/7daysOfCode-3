const numeroAleatorio = Math.floor(Math.random() * 11);
let tentativasRestantes = 3;
while (tentativasRestantes > 0) {
  const palpite = parseInt(
    prompt(
      "Tente adivinhar o número de 0 a 10 (Você tem " +
        tentativasRestantes +
        " tentativas restantes.)"
    )
  );

  if (isNaN(palpite) || palpite < 0 || palpite > 10) {
    alert("Por favor, insira um número válido de 0 a 10");
    continue;
  }

  if (palpite === numeroAleatorio) {
    alert("Parabéns! Você acertou o número!");
    break;
  } else {
    tentativasRestantes--;
    if (palpite < numeroAleatorio) {
      alert("Tente um número maior.");
    } else {
      alert("Tente um número menor");
    }
    if (tentativasRestantes === 0) {
      alert(
        "Suas tentativas acabaram, o número correto era " +
          numeroAleatorio +
          "."
      );
    }
  }
}
