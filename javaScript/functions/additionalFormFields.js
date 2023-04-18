import createHTMLElement from "./createHTMLElement.js";

export function addCardiologistFields(object) {
    return ([
        createHTMLElement("input", ["visit__pressure", "additional-fields"], {
            type: 'text',
            placeholder: 'Normal pressure:',
            value: (arguments.length > 0) ? (object.normalPressure === "-" ? "" : object.normalPressure) : '',
            name: "normalPressure",

        }),
        createHTMLElement("input", ["visit__bmi", "additional-fields"], {
            type: 'number',
            placeholder: 'Body mass index:',
            value: (arguments.length > 0) ? (object.bodyMassIndex === "-" ? "" : object.bodyMassIndex) : '',
            name: "bodyMassIndex",

        }),
        createHTMLElement("input", ["visit__age", "additional-fields"], {
            type: 'number',
            placeholder: 'Age:',
            value: (arguments.length > 0) ? (object.age === "-" ? "" : object.age) : '',
            name: "age",

        }),
        createHTMLElement("textarea", ["visit__diseases", "additional-fields"], {
            placeholder: 'Diseases:',
            value: (arguments.length > 0) ? (object.diseases === "-" ? "" : object.diseases) : '',
            name: "diseases",
        }),
    ])
}

export function addDentistFields(object) {
    return ([createHTMLElement("input", ["visit__last-visit", "additional-fields"], {
        name: "lastVisit",
        type: 'text',
        placeholder: 'Date of last visit:',
        value: (arguments.length > 0) ? (object.lastVisit === "-" ? "" : object.lastVisit) : '',
    })]);
}

export function addTherapistFields(object) {
    return ([createHTMLElement("input", ["visit__therapist-age-field", "additional-fields"], {
        name: "age",
        type: 'number',
        placeholder: 'Age:',
        value: (arguments.length > 0) ? (object.age === "-" ? "" : object.age) : '',
    })]);
}