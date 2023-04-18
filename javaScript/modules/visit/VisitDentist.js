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
            lastVisit,
            status
        }
    ) {
        super({doctorName, priority, purposeVisit, description, patientName, id, status});
        this.lastVisit = (lastVisit.trim() !== "") ? lastVisit : "-";

    }

}