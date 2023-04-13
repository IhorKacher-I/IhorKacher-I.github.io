export function removeElementCollection(className) {
    document.querySelectorAll(className).forEach(field => {
        field.remove();
    })
}