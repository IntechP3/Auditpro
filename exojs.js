let tabStr = ['bonJour', 'SOIr', 'REveillON', 'ApRES-MIDI', 'SUCre'];

for (let i = 0 ; i < tabStr.length; i++){
    let newStr = tabStr[i].toLowerCase();
    newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);

    tabStr.splice(i, 1, newStr);
}

console.log(tabStr);