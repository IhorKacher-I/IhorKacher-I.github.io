import createHTMLElement from "./createHTMLElement.js";
import {deleteCloseIcon, svgEditIcon} from "../constants/const.js";

function createWrapper(labelText, valueText, labelClass, valueClass, wrapperClass) {
    const wrapper = createHTMLElement('div', wrapperClass);
    const label = createHTMLElement('span', labelClass);
    label.textContent = labelText;
    const value = createHTMLElement('span', valueClass);
    value.textContent = valueText;
    wrapper.append(label, value);
    return wrapper;
}

export function createFullInfoBody(object) {
    const {
        doctorName, priority, purposeVisit,
        patientName, description, status,
        age, bodyMassIndex, diseases,
        normalPressure, lastVisit,
    } = object;
    const body = createHTMLElement('div', ['full-visit-information__body']);

    const doctorWrapper = createWrapper('Doctor:', doctorName, ['doctor__label'], ['doctor__name'], ['full-visit-information__doctor']);
    const priorityWrapper = createWrapper('Priority:', priority, ['priority__label'], ['priority__name'], ['full-visit-information__priority']);
    const nameWrapper = createWrapper('Full name:', patientName, ['priority__label'], ['priority__name'], ['full-visit-information__patient-name']);
    const purposeWrapper = createWrapper('Purpose of the visit:', purposeVisit, ['visit-purpose__label'], ['visit-purpose__value'], ['full-visit-information__visit-purpose']);
    const statusWrapper = createWrapper('Status:', status, ['visit-purpose__label'], ['visit-purpose__value'], ['full-visit-information__visit-purpose']);

    const descriptionWrapper = createHTMLElement('div', ['full-visit-information__visit-description']);
    const descriptionLabel = createHTMLElement('span', ['visit-purpose__label']);
    descriptionLabel.innerHTML = `Brief description<br>of the visit:`;
    const descriptionElement = createHTMLElement('span', ['visit-purpose__value']);
    descriptionElement.textContent = `${description}`;
    descriptionWrapper.append(descriptionLabel, descriptionElement);

    const ageWrapper = age !== undefined ? createWrapper('Patient age:', age, ['patient-age__label'], ['patient-age__value'], ['full-visit-information__patient-age']) : null;
    const bmiWrapper = bodyMassIndex !== undefined ? createWrapper('Body mass index:', bodyMassIndex, ['patient-bmi__label'], ['patient-bmi__value'], ['full-visit-information__bmi']) : null;
    const diseasesWrapper = diseases !== undefined ? createWrapper('Diseases:', diseases, ['patient-diseases__label'], ['patient-diseases__value'], ['full-visit-information__diseases']) : null;
    const pressureWrapper = normalPressure !== undefined ? createWrapper('Normal pressure:', normalPressure, ['pressure__label'], ['pressure__value'], ['full-visit-information__pressure']) : null;
    const lastVisitWrapper = lastVisit !== undefined ? createWrapper('Last visit:', lastVisit, ['patient-last-visit__label'], ['patient-last-visit__value'], ['full-visit-information__last-visit']) : null;

    const FullInfoButtonsWrapper = createHTMLElement('div', ['full-visit-information__buttons']);
    const editButton = createHTMLElement('span', ['buttons__edit-button']);
    editButton.innerHTML = svgEditIcon;
    const deleteButton = createHTMLElement('span', ['buttons__delete-button']);
    deleteButton.innerHTML = deleteCloseIcon;

    FullInfoButtonsWrapper.append(editButton, deleteButton);

    body.append(
        statusWrapper, doctorWrapper, priorityWrapper,
        purposeWrapper, nameWrapper, descriptionWrapper,
    );
    if (ageWrapper) body.append(ageWrapper);
    if (bmiWrapper) body.append(bmiWrapper);
    if (diseasesWrapper) body.append(diseasesWrapper);
    if (pressureWrapper) body.append(pressureWrapper);
    if (lastVisitWrapper) body.append(lastVisitWrapper);
    body.append(FullInfoButtonsWrapper);

    return body;

}
