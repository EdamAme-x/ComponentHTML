// Import stylesheets
import './style.css';

let _all: NodeListOf<Element> = document.querySelectorAll('[component]');

_all.forEach((_element: HTMLElement) => {
  let _element_path: string = _element.getAttribute('component');
  fetch(_element_path)
    .then((res) => res.text())
    .then((data) => {
      _element.innerHTML = data;
    });
});
