//Java Script file for etch-a-sketch index page


const container = document.querySelector('.container');

let i;

for (i = 0; i < 256; i++)
{
    let div = document.createElement('div');

    container.appendChild(div);
}

