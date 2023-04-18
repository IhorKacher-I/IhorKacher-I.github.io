import {Visit} from "./Visit.js";

export class VisitCardiologist extends Visit {
    constructor(
        {
            id,
            doctorName,
            priority,
            purposeVisit,
            description,
            patientName,
            age,
            normalPressure,
            bodyMassIndex,
            diseases,
            status
        }
    ) {
        super({doctorName, priority, purposeVisit, description, patientName, id, status});
        this.age = (age.trim() !== "") ? age : "-";
        this.diseases = (diseases.trim() !== "") ? diseases : "-";
        this.bodyMassIndex = (bodyMassIndex.trim() !== "") ? bodyMassIndex : "-";
        this.normalPressure = (normalPressure.trim() !== "") ? normalPressure : "-";
    }
}