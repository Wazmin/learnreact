const rootElement = document.getElementById('root');

// const element = document.createElement('div');
// element.textContent = 'Hello World';
// element.className = 'container';
// rootElement.appendChild(element);

const element = React.createElement(
  'div',
  {
    className: 'container',
    children: ['Hello World', 'Goodbye World']
  },
);

console.log(element);
ReactDOM.createRoot(rootElement).render(element);