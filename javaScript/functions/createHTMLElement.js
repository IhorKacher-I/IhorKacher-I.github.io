export default function createHTMLElement(tagName, classList = [], props = {}) {
    const element = document.createElement(tagName);
    element.classList.add(...classList);

    Object.entries(props).forEach(([key, value]) => {
        element[key] = value;
    });

    return element;
}
