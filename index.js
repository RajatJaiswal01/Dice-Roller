function rollDice(){
    const NumOfDice = document.getElementById('NumOfDice').value;
    const Diceresult = document.getElementById('diceResult');
    const DiceImages = document.getElementById('diceImages');
    const values=[];
    const images=[];

    for(let i=0; i<NumOfDice; i++){
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        images.push(`<img src="dice faces/${value}.png">`);
    }
    
    Diceresult.textContent = `dice: ${values.join(', ')}`;
    DiceImages.innerHTML = images.join(' ');



}