export function shoppingList(list) {
    let line = ''
    if (Object.keys(list).length === 0) {
        line = 'Šiuo metu, jūsų prekių krepšelis yra tuščias.\n';
        
    }else{
        line = 'Jūsų prekių krepšelyje yra ' + list.length + ' prekės:\n'
        line += '------------------------------------------------------------\n'
        line += 'Pavadinimas    |      Kiekis | Vieneto kaina | Viso mokėti\n'
        line += '------------------------------------------------------------\n'
    for (let i = 0; i < list.length; i++) {
        const item = list[i]
        line += `${i+1}. ${item.name.padEnd(10)}  |${item.amount.toString().padStart(8)} vnt | ${item.unitPrice.toFixed(2).padStart(9)} Eur | ${(item.amount * item.unitPrice/100).toFixed(2)} Eur\n`
        }
        line += '------------------------------------------------------------\n'
    }
    return line

}