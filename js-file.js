//Java Script file for etch-a-sketch index page


const container = document.querySelector('.container');
const button = document.querySelector('button');

let i;

for (i = 0; i < 256; i++)
{
    let div = document.createElement('div');

    div.setAttribute('style', 'height: 35px; width: 35px;')

    container.appendChild(div);

    div.addEventListener("mouseover", ()=>{
        div.setAttribute('style', 'background: blue; height: 35.5px; width: 35.5px;');
    });
}

button.addEventListener('click', ()=>{
    let userInput = prompt("Please enter how big you would like the Grid. (Maximum of 100)");

    let j;
    let userNumber = Number(userInput);

    if (userNumber > 100)
    {
        userNumber = 16;
        alert("You cannot have a grid larger then 100! Please input a smaller grid size.")
    }

    let totalSquares = userNumber * userNumber;
    let divArea = (600 / userNumber) - 2;

    while (container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
    

    for (j = 0; j < totalSquares; j++)
    {
        let newDiv = document.createElement('div');

        newDiv.setAttribute('style', 'height: ' + divArea + 'px; width: ' + divArea +'px; ')

        container.appendChild(newDiv);

        newDiv.addEventListener("mouseover", ()=>{
            newDiv.setAttribute('style', 'background: blue; height: ' + divArea + 'px; width: ' + divArea +'px;');
        });
    }
    
});




