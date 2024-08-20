export function productDetails(list, id) {
    const product = list.find(item => item.id === id);
    if (!product) {
        return `Prekė, su ID: ${id} neegzistuoja.`;
    }
   
    
    const totalPrice = (product.amount * product.unitPrice / 100).toFixed(2) + ' Eur' ;
    const unitPrice = (product.unitPrice / 100).toFixed(2) + ' Eur';
    const lineH = '-'.repeat(34);
  
  return `
  ${lineH}
  Prekės informacija
  ${lineH}
  ID          |  ${product.id}
  Pavadinimas | ${product.name}
  Kiekis      | ${product.amount} vnt
  vnt kaina   | ${unitPrice}
  Viso mokėti | ${totalPrice}
  ${lineH}`;
}