export function productDetails(a, b) {
    const produktas = a.find(item => item.id === b);
    if (!produktas) {
        return `Prekė, su ID: ${b} neegzistuoja.`
    }
    let visoKaina = produktas.amount * produktas.unitPrice / 100
    let vntKaina = produktas.unitPrice / 100
    let line1 = '------------------------------------\n';
        line1 += 'Prekes informacija\n';
        line1 += '------------------------------------\n';
        line1 += `ID          | ${produktas.id}\n`;
        line1 += `Pavadinimas | ${produktas.name}\n`;
        line1 += `Kiekis      | ${produktas.amount}\n`;
        line1 += `vnt kaina   | ${vntKaina.toFixed(2)}\n`;
        line1 += `Viso moketi | ${visoKaina.toFixed(2)}\n`;
        line1 += '------------------------------------\n';
   return line1 
}