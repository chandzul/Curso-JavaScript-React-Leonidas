import { isRequired } from './validations.js'

function makeIcecream(flavor1 = isRequired('flavor1'), flavor2 = isRequired('flavor1')) {
  // console.log(flavor1)
  alert(`Tienes un rico helado de ${flavor1.dataset.flavor} y ${flavor2.dataset.flavor}`);
}

export {
  makeIcecream
}