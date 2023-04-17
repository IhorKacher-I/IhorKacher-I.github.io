import {Visit} from "./Visit.js";

export class VisitDentist extends Visit {
    constructor(
        {
            id,
            doctorName,
            priority,
            purposeVisit,
            description,
            patientName,
            lastVisit
        }
    ) {
        super({doctorName, priority, purposeVisit, description, patientName, id});
        this.lastVisit = (lastVisit.trim() !== "") ? lastVisit : "-";

    }
}