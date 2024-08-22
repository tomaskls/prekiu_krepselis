
export function productDetails(list, id) {
    const product = list.find(item => item.id === id);
    if (!product) {
        return `Prekė, su ID: ${id} neegzistuoja.`;
    }
    const maxLengthName =  Math.max(...list.map(item => item.name.length),11);
    const maxLengthAmount = Math.max(...list.map(item => item.amount.toString().length),6) + 4;
    const maxLengthPrice = Math.max(...list.map(item => item.unitPrice.toString().length),13);
    const maxLengthTotalPrice = Math.max(...list.map(item => (item.unitPrice * item.amount).toString().length),11) + 4;
    const maxLengthRight = Math.max(...[maxLengthName, maxLengthAmount, maxLengthPrice, maxLengthTotalPrice]);
    const keys = ['ID', 'Pavadinimas', 'Kiekis', 'Kaina', 'Viso Moketi'];
    const maxLengthLeft = Math.max(...keys.map(key => key.length ));
    const totalPrice = (product.amount * product.unitPrice / 100).toFixed(2) + ' Eur' ;
    const unitPrice = (product.unitPrice / 100).toFixed(2) + ' Eur';
    const lineH = '-'.repeat(maxLengthLeft + maxLengthRight + 2);
  
  return `
  ${lineH}
  Prekės informacija
  ${lineH}
  ID          | ${product.id}
  Pavadinimas | ${product.name}
  Kiekis      | ${product.amount} vnt
  vnt kaina   | ${unitPrice}
  Viso mokėti | ${totalPrice}
  ${lineH}`;
}