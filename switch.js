let nome = "Elaine";
let xp = 15000;
let categoria = "";

switch (true) {
  case xp <= 1000:
    categoria = "Ferro";
    break;
  case xp >= 1001 && xp <= 2000:
    categoria = "Bronze";
    break;
  case xp >= 2001 && xp <= 5000:
    categoria = "Prata";
    break;
  case xp >= 5001 && xp <= 6000:
    categoria = "Ouro";
    break;
  case xp >= 6001 && xp <= 7000:
    categoria = "Diamante";
    break;
  case xp >= 7001 && xp <= 8000:
    categoria = "Platina";
    break;
  case xp >= 8001 && xp <= 9000:
    categoria = "Ascendente";
    break;
  case xp >= 9001 && xp <= 10000:
    categoria = "Imortal";
    break;
  case xp > 10001:
    categoria = "Radiante";
    break;
}

console.log("O herói " + nome + " está no nível " + categoria);
