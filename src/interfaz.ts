export interface Schedule {
    dia: string;
    hora_inicio: string;
    hora_fin: string;
}

export interface Doctor {
    id_doctor: number;
    nombre: string;
    especialidad: string;
    horario: Schedule[];
}
