import {addCardiologistFields, addDentistFields, addTherapistFields} from "./additionalFormFields.js";
import {removeElementCollection} from "./removeElementCollection.js";

export function changeDoctorFields(modalWindow, select) {
    let formWindow = modalWindow.firstChild;
    const submitBtn = formWindow.lastChild.lastChild;
    select.addEventListener("change", (event) => {
        switch (event.target.value) {
            case "Cardiologist":
            {
                removeElementCollection(".additional-fields");
                submitBtn.before(...addCardiologistFields());
            }
                break;
            case "Dentist":
            {
                removeElementCollection(".additional-fields");
                submitBtn.before(...addDentistFields());
            }
                break;
            case "Therapist":
            {
                removeElementCollection(".additional-fields");
                submitBtn.before(...addTherapistFields());
            }
                break;
            default:
                removeElementCollection(".additional-fields");
        }
    });
}
