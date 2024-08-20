export function shoppingList(list) {
 
  const maxLengthName = list.reduce((maxLength, item) => Math.max(maxLength, item.name.length), 11);
  const maxLengthAmount = list.reduce((maxLength, item) => Math.max(maxLength, item.amount.toString().length), 6) + 4;
  const maxLengthPrice = list.reduce((maxLength, item) => Math.max(maxLength, item.unitPrice.toString().length), 13);
  const maxLengthTotalPrice = list.reduce((maxLength, item) => Math.max(maxLength, (item.unitPrice * item.amount).toString().length), 11) + 4;
  const maxLengthId = list.length.toString().length;
  const hLine = '-'.repeat(maxLengthId + maxLengthName +maxLengthAmount + maxLengthPrice + maxLengthTotalPrice + 15); 

  let line = '';

  if (list.length === 0) {
      line = 'Šiuo metu, jūsų prekių krepšelis yra tuščias.\n';
      
  } else {
    if ( list.length === 1 || list.length !== 11 && list.length % 10 === 1) {
      line = 'Jūsų prekių krepšelyje yra ' + list.length + ' prekė:\n'; 
    }  
    if (list.length >= 10 && list.length <= 20 || list.length % 10 === 0) {
      line = 'Jūsų prekių krepšelyje yra ' + list.length + ' prekių:\n';  
        
    }else
      line = 'Jūsų prekių krepšelyje yra ' + list.length + ' prekės:\n';   
      line += hLine + '\n';
      line += '|'.padEnd(maxLengthId + 4) + 'Pavadinimas'.padEnd(maxLengthName + 1) + '| Kiekis'.padEnd(maxLengthAmount + 3)
           + "| Kaina".padEnd(maxLengthPrice + 3) + '| Viso mokėti'.padEnd(maxLengthTotalPrice + 3) + '|' + '\n';
      line += hLine + '\n';     
      
      for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const index = i + 1;
      const quantity  = item.amount + ' vnt';
      const unitPrice  = (item.unitPrice /100).toFixed(2) + ' Eur';
      const totalPrice  = (item.amount * item.unitPrice/100).toFixed(2) + ' Eur';
  
      line += `| ${index.toString().padEnd(maxLengthId)}. ${item.name.padEnd(maxLengthName)} | ${quantity.toString().padEnd(maxLengthAmount)} | ${unitPrice.padEnd(maxLengthPrice)} | ${totalPrice.padEnd(maxLengthTotalPrice)} |\n`;
      } 
      line += hLine;
    } return line;
  }