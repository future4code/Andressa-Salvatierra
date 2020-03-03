export function anoBissexto(ano) {
  if (ano !== undefined) {
    if (ano % 400 === 0 ) {
      return true;
    } else if (ano % 4 === 0 && ano % 100 != 0)
    {
      return true;
    }
  } else {
    return "É preciso inserir um ano";
  }
}
