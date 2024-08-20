export function productDetails(list, id) {
    const produktas = list.find(item => item.id === id);
    if (!produktas) {
        return `Prekė, su ID: ${id} neegzistuoja.`;
    }
   
    const visoKaina = (produktas.amount * produktas.unitPrice / 100).toFixed(2) + ' Eur' ;
    const vntKaina = (produktas.unitPrice / 100).toFixed(2) + ' Eur';
    const lineH = '-'.repeat(44);
  
  return `
  ${lineH}
  Prekės informacija
  ${lineH}
  ID          |  ${produktas.id}
  Pavadinimas | ${produktas.name}
  Kiekis      | ${produktas.amount} vnt
  vnt kaina   | ${vntKaina}
  Viso mokėti | ${visoKaina}
  ${lineH}`;
}