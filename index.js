//Melhorando o codigo:
const { createElement } = React;
const { render } = ReactDOM;

//criar o elmento
const h1 = createElement(
    'h1', // o elemento a ser criado, a tag HTML
    {
        id: 'react-h1',
        className: 'react-js-h1'
    }, // Objeto de propriedades do elemento
    'Hello React com o código melhor!' // O texto do elemento
)

//renderizar o elemento no DOM
render(
    h1,//O elemento a ser renderizado
    document.getElementById('app')//Onde o elemento será renderizado
)