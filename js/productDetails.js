export function productDetails(a, b) {
    const produktas = a.find(item => item.id === b);
    if (!produktas) {
        return `Prekė, su ID: ${b} neegzistuoja.`
    }
   
    let visoKaina = produktas.amount * produktas.unitPrice / 100
    let vntKaina = produktas.unitPrice / 100
    let lineH = '-'.repeat(44)
    let line1 = lineH + '\n' + 'Prekės informacija\n' + lineH + '\n';
       
        line1 += `ID          |  ${produktas.id} \n`+ `Pavadinimas | ${produktas.name}\n`+ `Kiekis      | ${produktas.amount} vnt\n` + `vnt kaina   | ${vntKaina.toFixed(2)} Eur\n` + `Viso mokėti | ${visoKaina.toFixed(2)} Eur\n` + lineH;
        
  return line1 
}