import { Clinic } from './clinica';
import { Doctor } from './interfaz';

const clinic = new Clinic();

const doctor1: Doctor = {
    id_doctor: 1,
    nombre: 'María García',
    especialidad: 'Odontología',
    horario: [
        { dia: 'Lunes', hora_inicio: '08:00:00', hora_fin: '12:00:00' },
        { dia: 'Miércoles', hora_inicio: '14:00:00', hora_fin: '18:00:00' },
        { dia: 'Viernes', hora_inicio: '10:00:00', hora_fin: '14:00:00' }
    ]
};

const doctor2: Doctor = {
    id_doctor: 2,
    nombre: 'Juan Pérez',
    especialidad: 'Ortodoncia',
    horario: [
        { dia: 'Martes', hora_inicio: '09:00:00', hora_fin: '13:00:00' },
        { dia: 'Jueves', hora_inicio: '15:00:00', hora_fin: '19:00:00' }
    ]
};

const doctor3: Doctor = {
    id_doctor: 3,
    nombre: 'Dr. Carla Pérez',
    especialidad: 'Odontología General',
    horario: [
        { dia: 'Lunes', hora_inicio: '08:00:00', hora_fin: '17:00:00' },
        { dia: 'Miércoles', hora_inicio: '08:00:00', hora_fin: '12:00:00' }
    ]
};

const doctor4: Doctor = {
    id_doctor: 4,
    nombre: 'Dra. Ana Gómez',
    especialidad: 'Odontología General',
    horario: [
        { dia: 'Miércoles', hora_inicio: '12:00:00', hora_fin: '17:00:00' },
        { dia: 'Viernes', hora_inicio: '08:00:00', hora_fin: '17:00:00' }
    ]
};

const doctor5: Doctor = {
    id_doctor: 5,
    nombre: 'Dr. Mario Sanchez',
    especialidad: 'Higienista dental',
    horario: [
        { dia: 'Lunes', hora_inicio: '08:00:00', hora_fin: '17:00:00' },
        { dia: 'Jueves', hora_inicio: '08:00:00', hora_fin: '17:00:00' }
    ]
};

const doctor6: Doctor = {
    id_doctor: 6,
    nombre: 'Dra. Veronica Castro',
    especialidad: 'Ortodoncia',
    horario: [
        { dia: 'Lunes', hora_inicio: '08:00:00', hora_fin: '17:00:00' },
        { dia: 'Miércoles', hora_inicio: '08:00:00', hora_fin: '12:00:00' }
    ]
};

clinic.sumardoctor(doctor1);
clinic.sumardoctor(doctor2);
clinic.sumardoctor(doctor3);
clinic.sumardoctor(doctor4);
clinic.sumardoctor(doctor5);
clinic.sumardoctor(doctor6);

clinic.editDoctor(1, {
    nombre: 'María García Rodríguez',
    horario: [
        { dia: 'Lunes', hora_inicio: '08:00:00', hora_fin: '12:00:00' },
        { dia: 'Jueves', hora_inicio: '14:00:00', hora_fin: '18:00:00' }
    ]
});

clinic.eliminarDoctor(2);

const doctor = clinic.buscaridDoctor(1);
if (doctor) {
    console.log('Doctor encontrado:', doctor);
} else {
    console.log('Doctor no encontrado');
}

const doctorsByDate = clinic.Doctoresdisponiblesf('Lunes');
console.log('Doctores disponibles el Lunes:', doctorsByDate);

const allDoctors = clinic.Doctotales();
console.log('Todos los doctores:', allDoctors);

const doctorCount = clinic.contardoctores();
console.log(`Total de doctores: ${doctorCount}`);

const isAvailable = clinic.validardisponibilidadoctor(1, 'Lunes', '09:00:00');
console.log(`Doctor disponible: ${isAvailable}`);
