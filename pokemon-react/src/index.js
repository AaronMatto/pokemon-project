import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { render } from '@testing-library/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// react generates ALL the html we will need for our webpage. It generates it inside the root element
// created above as JSX which is basically html.
// // Whenever setting up react, we are given two global variables. React and ReactDOM, we can console
// // log these.
// console.log(React)
// console.log(ReactDOM)
// // These are two different libraries. What's the diff? React is what we work with 99% of the time
// // React is essentially a set of JS functions that make building user components easy
// // ReactDOM allows React to render onto the DOM. So react creates elements/components and ReactDOM
// // puts them onto the DOM. So React is core library and ReactDOM renders onto a screen.
// // So if we want React do display information onto the DOM we have to use ReactDOM

// root.render('Hello world') // this inserts our content into the <div id='root'></div> element

// // REACT API
//   // to create interactive elements (reactElements) we have to use the react api

//   const searchBarExample = React.createElement('input', { placeholder: 'Search for a pokemon', type: 'search', id: 'query', name:'q'})
//   const searchButton = React.createElement('button', {value: 'Go!', id: 'search-btn'})
//   const searchForm = React.createElement('form', { class: 'pokemon-form' }, searchBarExample, searchButton)
//   // root.render(searchForm)

// //JSX - a syntax to replicate the code above, 90% similar to html
//   const searchFormJSX = (
//     <form>
//       <input placeholder="Search for a pokemon" type ="search" id="query" name="q"></input>
//       <button value="Go!" id="search-btn"></button>
//     </form>
//   )

//   // this gets transpiled (something that converts code from one language to another) so
//   // our JSX code is converted it into JS i.e. the code above on lines 30-33. We use
//   // Babel as a transpiler.

// //COMPONENTS
//     //components are just functions that return elements e.g. :
//     const searchFunction = () => {
//       return (
//         <form>
//           <input placeholder="Search for a pokemon" type="search" id="query" name="q"></input>
//           <button value="Go!" id="search-btn"></button>
//         </form>
//       )
//     }
// root.render(searchFunction()) will make it render on the page. BUT, each component should have its
// own file....see components folder


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
