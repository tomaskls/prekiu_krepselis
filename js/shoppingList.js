export function shoppingList(list) {
  let line = '';
  const ilgisP = list.reduce((maxLength, item) => Math.max(maxLength, item.name.length), 9);
  const ilgisK = list.reduce((maxLength, item) => Math.max(maxLength, item.amount.toString().length), 6) + 4;
  const ilgisKaina = list.reduce((maxLength, item) => Math.max(maxLength, item.unitPrice.toString().length), 13);
  const ilgisV = list.reduce((maxLength, item) => Math.max(maxLength, (item.unitPrice * item.amount).toString().length), 11) + 4;
  const ilgisI = list.length.toString().length;
  const hLine = '-'.repeat(ilgisI + ilgisP +ilgisK + ilgisKaina + ilgisV) + '-'.repeat(15); 

  const pav = " Pavadinimas";
  const kiek = "Kiekis";
  const vkaina = "Vieneto kaina";
  const visoM = "Viso mokėti";

  // const prekiuForma = (list.length % 10 === 1 && list.length % 100 !== 11) ? 'prekė' : 'prekės';


  if (list.length === 0) {
      line = 'Šiuo metu, jūsų prekių krepšelis yra tuščias.\n';
      
  }else{if ( list.length === 1) {
      line = 'Jūsų prekių krepšelyje yra ' + list.length + ' prekė:\n';  
  }else
      line = 'Jūsų prekių krepšelyje yra ' + list.length + ' prekės:\n';    
      line += hLine + '\n' + `| ${pav.padEnd(ilgisP + ilgisI)} | ${kiek.padEnd(ilgisK)} | ${ vkaina.padEnd(ilgisKaina)} | ${visoM.padEnd(ilgisV)} |\n` + hLine + '\n';

     for (let i = 0; i < list.length; i++) {
      const item = list[i]
      const pavadinimas = item.name;
      const kiekis  = item.amount + ' vnt';
      const kaina  = (item.unitPrice /100).toFixed(2) + ' Eur';
      const visoKaina  = (item.amount * item.unitPrice/100).toFixed(2) + ' Eur';
  
      line += `| ${i+1}. ${pavadinimas.padEnd(ilgisP)} | ${kiekis.toString().padEnd(ilgisK)} | ${kaina.padEnd(ilgisKaina)} | ${visoKaina.padEnd(ilgisV)} |\n`;
    } 
      line += hLine;
  } return line;
  }