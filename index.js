// Vieta reikiamų failų importavimui... jei reikia tokių 👀

/*
--------------------------------------------------------
KOMENTARAS:

Tolimesnis kodas, šiame faile, neredaguojamas!

Komentarai po console.log(), kuriuose iškviečiamos funkcijos rodo norimą terminale matyti rezultatą, kuris privalo būti identiškas pateiktam.

Vienintelė išimtis, kada gali nesutapti spausdinamas rezultatas, jei kurdamas užduotį palikau skaičiavimo klaidą... tai jo... reikėtų suskaičiuoti teisingai 👍
--------------------------------------------------------
*/

const emptyList = [];
const firstShoppingList = [
    {
        id: 1,
        name: 'Pomidoras',
        amount: 1000000,
        unitPrice: 199,
    },
    {
        id: 3,
        name: 'Agurkas',
        amount: 2,
        unitPrice: 50,
    },
    {
        id: 7,
        name: 'Svogūnas',
        amount: 1,
        unitPrice: 45,
    },
];
function shoppingList(list) {
    line = ''
    if (Object.keys(list).length === 0) {
        line = 'Šiuo metu, jūsų prekių krepšelis yra tuščias.\n';
        
    }else{

     line += '----------------------------------------------------------\n'
        line += 'Pavadinimas   | Kiekis      | Vieneto kaina | Viso mokėti\n'
        line += '---------------------------------------------------------\n'
    for (let i = 0; i < list.length; i++) {
        const item = list[i]
        line += `${item.id}. ${item.name.padEnd(10)} | ${item.amount.toString().padEnd(8)}vnt | ${item.unitPrice.toFixed(2)} Eur | ${(item.amount * item.unitPrice/100).toFixed(2)} Eur\n`
        }
        line += '---------------------------------------------------------\n'
    }
    return line

}

console.log(shoppingList(firstShoppingList));
console.log(shoppingList(emptyList));

console.log(firstShoppingList);


function productDetails(a, b) {
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

console.log(productDetails(firstShoppingList, 1));
console.log(productDetails(firstShoppingList, 42069));
console.log(productDetails(firstShoppingList, 3));
console.log(productDetails(firstShoppingList, 7));


const singleProductShoppingList = [
    {
        id: 2,
        name: 'Kivi',
        amount: 23,
        unitPrice: 14,
    },
];

console.log(shoppingList(singleProductShoppingList));
console.log(productDetails(singleProductShoppingList, 42069));
console.log(productDetails(singleProductShoppingList, 2));

