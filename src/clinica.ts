import { Doctor, Schedule } from './interfaz';

export class Clinic {
    private doctors: Doctor[] = [];

    sumardoctor(doctor: Doctor): void {
        this.doctors.push(doctor);
    }

    editDoctor(id_doctor: number, updatedDoctor: Partial<Doctor>): void {
        const doctor = this.buscaridDoctor(id_doctor);
        if (doctor) {
            Object.assign(doctor, updatedDoctor);
        } else {
            console.log(`Doctor con ID ${id_doctor} no encontrado.`);
        }
    }
    eliminarDoctor(id_doctor: number): void {
        this.doctors = this.doctors.filter(doc => doc.id_doctor !== id_doctor);
    }
    buscaridDoctor(id_doctor: number): Doctor | undefined {
        return this.doctors.find(doc => doc.id_doctor === id_doctor);
    }
    Doctoresdisponiblesf(dia: string): Doctor[] {
        return this.doctors.filter(doctor =>
            doctor.horario.some(schedule => schedule.dia === dia)
        );
    }
    Doctotales(): Doctor[] {
        return this.doctors;
    }
    contardoctores(): number {
        return this.doctors.length;
    }
    validardisponibilidadoctor(id_doctor: number, dia: string, hora: string): boolean {
        const doctor = this.buscaridDoctor(id_doctor);
        if (doctor) {
            return doctor.horario.some(schedule =>
                schedule.dia === dia &&
                schedule.hora_inicio <= hora &&
                schedule.hora_fin >= hora
            );
        } else {
            console.log(`Doctor con ID ${id_doctor} no encontrado.`);
            return false;
        }
    }
}
