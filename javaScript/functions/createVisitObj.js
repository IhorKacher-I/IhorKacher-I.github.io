export function createVisitObj() {
    const objEntries = [
        ['doctorName',      document.querySelector('.visit__doctor').value],
        ['priority',        document.querySelector('.visit__priority').value],
        ['purposeVisit',    document.querySelector('.visit__purpose').value],
        ['description',     document.querySelector('.visit__description').value],
        ['patientName',     document.querySelector('.visit__name').value],

        ['normalPressure',  document.querySelector('.visit__pressure')?.value],
        ['bodyMassIndex',   document.querySelector('.visit__bmi')?.value],
        ['age',             document.querySelector('.visit__age')?.value],
        ['diseases',        document.querySelector('.visit__diseases')?.value],
        ['lastVisit',       document.querySelector('.visit__last-visit')?.value],
        ['age',             document.querySelector('.visit__therapist-age-field')?.value],
    ];

    const validObjEntries = objEntries.filter(([key, value]) => value !== undefined);

    return Object.fromEntries(validObjEntries);
}
