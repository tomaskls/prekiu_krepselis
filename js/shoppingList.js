export function shoppingList(list) {
    let line = '';
    let vienetai = "vnt";
    const ilgisP = list.reduce((maxLength, item) => 
      Math.max(maxLength, item.name.length), 11);
    const ilgisK = list.reduce((maxLength, item) => 
      Math.max(maxLength, item.amount.toString().length), 6) + 5 ;
    const ilgisKaina = list.reduce((maxLength, item) => 
      Math.max(maxLength, item.unitPrice.toString().length), 13);
    const ilgisV = list.reduce((maxLength, item) => 
      Math.max(maxLength, (item.unitPrice * item.amount).toString().length), 1) + 5;
    const hLine = '-'.repeat(16) + '-'.repeat(ilgisP) + '-'.repeat(ilgisK)+ '-'.repeat(ilgisKaina)+ '-'.repeat(ilgisV) +'\n'
    let pav = "   Pavadinimas";
    let kiek = "Kiekis";
    let vkaina = "Vieneto kaina";
    let visoM = "Viso mokėti";
    if (Object.keys(list).length === 0) {
        line = 'Šiuo metu, jūsų prekių krepšelis yra tuščias.\n';
        
    }else{if (Object.keys(list).length === 1) {
        line = 'Jūsų prekių krepšelyje yra ' + list.length + ' prekė:\n';  
    }else
        line = 'Jūsų prekių krepšelyje yra ' + list.length + ' prekės:\n';    
        line += hLine + `| ${pav.padEnd(ilgisP)} | ${kiek.padEnd(ilgisK)} | ${ vkaina.padEnd(ilgisKaina)} | ${visoM.padEnd(ilgisV)} |\n` + hLine;
       for (let i = 0; i < list.length; i++) {
        const item = list[i]
        let pavadinimas = item.name;
        let kiekis  = item.amount + ' vnt';
        let kaina  = (item.unitPrice /100).toFixed(2) + ' Eur';
        let visoKaina  = (item.amount * item.unitPrice/100).toFixed(2) + ' Eur';
    
        line += `| ${i+1}. ${pavadinimas.padEnd(ilgisP)} | ${kiekis.toString().padEnd(ilgisK)} | ${kaina.padEnd(ilgisKaina)} | ${visoKaina.padEnd(ilgisV)} |\n`;
        } 
        line += hLine;
    } 
    
    return line
    
    }