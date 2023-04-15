
export function removeElementCollection(className) {
    document.querySelectorAll(className).forEach(field => {
        field.remove();
    })
}
export function changeDoctorFields(formWindow, form, select) {
    select.addEventListener('change', () => {
        switch (event.target.value) {
            case 'cardiologist': {
                removeElementCollection('.additional-fields');
                formWindow.lastChild.append(...form.addCardiologistFields());
            }
                break;
            case 'dentist': {
                removeElementCollection('.additional-fields');
                formWindow.lastChild.append(form.addDentistFields());
            }
                break;
            case 'therapist': {
                removeElementCollection('.additional-fields');
                formWindow.lastChild.append(form.addTherapistFields());
            }
                break;
            default:
                removeElementCollection('.additional-fields');
        }
    })
}
export function createVisitObj() {
    const objEntries = [
        ['doctorName',      document.querySelector('.create-visit__doctor').value],
        ['priority',        document.querySelector('.create-visit__priority').value],
        ['purposeVisit',    document.querySelector('.create-visit__purpose').value],
        ['description',     document.querySelector('.create-visit__description').value],
        ['patientName',     document.querySelector('.create-visit__name').value],
        ['status',          document.querySelector('.create-visit__status').value],

        ['normalPressure',  document.querySelector('.create-visit__pressure')?.value],
        ['bodyMassIndex',   document.querySelector('.create-visit__bmi')?.value],
        ['age',             document.querySelector('.create-visit__age')?.value],
        ['diseases',        document.querySelector('.create-visit__diseases')?.value],
        ['lastVisit',       document.querySelector('.create-visit__last-visit')?.value],
        ['age',             document.querySelector('.create-visit__therapist-age-field')?.value],
    ];

    const validObjEntries = objEntries.filter(([key, value]) => value !== undefined);

    return Object.fromEntries(validObjEntries);
}