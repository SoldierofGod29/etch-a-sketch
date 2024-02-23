//Java Script file for etch-a-sketch index page


const container = document.querySelector('.container');
const button = document.querySelector('button');

let i;

for (i = 0; i < 256; i++)
{
    let div = document.createElement('div');

    container.appendChild(div);

    div.addEventListener("mouseover", ()=>{
        div.setAttribute('style', 'background: blue');
    });
}

button.addEventListener('click', ()=>{
    let userInput = prompt("Please enter how big you would like the Grid (Maximum of 100)");

    let j;
    let totalSquares = Number(userInput) * Number (userInput);

    while (container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
    

    for (j = 0; j < totalSquares; j++)
    {
        let newDiv = document.createElement('div');

        container.appendChild(newDiv);
    }
    
});




