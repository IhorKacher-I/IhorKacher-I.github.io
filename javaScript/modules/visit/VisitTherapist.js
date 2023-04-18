import {Visit} from "./Visit.js";

export class VisitTherapist extends Visit {
    constructor(
        {
            id,
            doctorName,
            priority,
            purposeVisit,
            description,
            patientName,
            age,
            status
        }
    ) {
        super({doctorName, priority, purposeVisit, description, patientName,id, status});
        this.age = (age.trim() !== "") ? age : "-";
    }
}
