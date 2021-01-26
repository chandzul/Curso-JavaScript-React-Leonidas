function render(element, container) {

  // Render puede recibir un: componente, elemento html o un string
  if (typeof element === 'string' || element instanceof Element) {
    return container.append(element);
  }

  const childElement = element.render();
  container.append(childElement);
}

export {
  render
}