let nome = "Elaine";
let xp = 15000;
categoria = "";

if (xp <= 1000) {
  categoria = "Ferro";
  console.log("O herói " + nome + " está no nível " + categoria);
} else if (xp >= 1001 && xp <= 2000) {
  categoria = "Bronze";
  console.log("O herói " + nome + " está no nível " + categoria);
} else if (xp >= 2001 && xp <= 5000) {
  categoria = "Prata";
  console.log("O herói " + nome + " está no nível " + categoria);
} else if (xp >= 5001 && xp <= 6000) {
  categoria = "Ouro";
  console.log("O herói " + nome + " está no nível " + categoria);
} else if (xp >= 6001 && xp <= 7000) {
  categoria = "Diamante";
  console.log("O herói " + nome + " está no nível " + categoria);
} else if (xp >= 7001 && xp <= 8000) {
  categoria = "Platina";
  console.log("O herói " + nome + " está no nível " + categoria);
} else if (xp >= 8001 && xp <= 9000) {
  categoria = "Ascendente";
  console.log("O herói " + nome + " está no nível " + categoria);
} else if (xp >= 9001 && xp <= 10000) {
  categoria = "Imortal";
  console.log("O herói " + nome + " está no nível " + categoria);
} else if (xp > 10001) {
  categoria = "Radiante";
  console.log("O herói " + nome + " está no nível " + categoria);
}
