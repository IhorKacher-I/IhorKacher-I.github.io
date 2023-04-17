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
            age
        }
    ) {
        super({doctorName, priority, purposeVisit, description, patientName,id});
        this.age = (age.trim() !== "") ? age : "-";
    }
}