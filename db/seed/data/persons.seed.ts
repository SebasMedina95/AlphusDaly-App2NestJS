import { Person } from '../../../src/modules/persons/entities/person.entity';

interface SeedPerson {
    createDateAt: Date;
    createUserAt: string;
    updateDateAt: Date;
    updateUserAt: string;
    id?: number;
    documentType: string;
    document: string;
    names: string;
    lastnames: string;
    gender: string;
    address: string;
    phone: string;
    email: string;
    birthDate: Date;
    status: string;
}

interface SeedData {

    persons: SeedPerson[];

}

export const initialDataPersons: SeedData = {

    persons: [

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 1,
            documentType: "CC",
            document: "1216717947",
            names: "Juan Sebastian",
            lastnames: "Medina Toro",
            gender: "M",
            address: "Carrera 158 # 57-221",
            phone: "3117115822",
            email: "jsebastian1995@gmail.com",
            birthDate: new Date("1995-05-02"),
            status: "S",
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 2,
            documentType: "CC",
            document: "1423409321",
            names: "Anjellin Manuela",
            lastnames: "Morales Panesso",
            gender: "F",
            address: "Carrera 12 # 123-45A Manrique",
            phone: "3164208899",
            email: "anjellinmanuela1@gmail.com",
            birthDate: new Date("2003-10-04"),
            status: "S",
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 3,
            documentType: "CC",
            document: "3356406",
            names: "Fabio de Jesus",
            lastnames: "Medina Henao",
            gender: "M",
            address: "Carrera 158 # 57-215",
            phone: "3136339121",
            email: "fabiomedina34@gmail.com",
            birthDate: new Date("1957-01-02"),
            status: "S",
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 4,
            documentType: "CC",
            document: "1214555432",
            names: "Maria",
            lastnames: "Fernandez Rodriguez",
            gender: "F",
            address: "Calle 21A # 15-34",
            phone: "3103215644",
            email: "fernandezrodmar@gmail.com",
            birthDate: new Date("2004-07-09"),
            status: "S",
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 5,
            documentType: "CC",
            document: "43576430",
            names: "Monica Cecilia",
            lastnames: "Toro Toro",
            gender: "F",
            address: "Carrera 156 # 57-257C",
            phone: "3052390121",
            email: "monicaceciliat3@gmail.com",
            birthDate: new Date("1973-08-02"),
            status: "S",
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 6,
            documentType: "CC",
            document: "1437829001",
            names: "Javier Lisandro",
            lastnames: "Múnera Hinestronza",
            gender: "M",
            address: "Calle 3A # 123-54",
            phone: "3109321212",
            email: "javielmore_3@gmail.com",
            birthDate: new Date("2004-08-17"),
            status: "S",
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 7,
            documentType: "CC",
            document: "1432188890",
            names: "Maria Paulina",
            lastnames: "Arrieta Tobar",
            gender: "F",
            address: "Calle 16a # 65G-54A int 234",
            phone: "3190430021",
            email: "mariapaulinaer1@gmail.com",
            birthDate: new Date("2006-04-08"),
            status: "S",
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 8,
            documentType: "CC",
            document: "98540121",
            names: "Jorge Alirio",
            lastnames: "Castro Rendón",
            gender: "M",
            address: "Carrera 34A # 165G-1B int 134",
            phone: "3127843209",
            email: "jorgealicas43@gmail.com",
            birthDate: new Date("1992-11-13"),
            status: "S",
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 9,
            documentType: "CC",
            document: "88909329",
            names: "Jerónimo",
            lastnames: "Echeverry Gallego",
            gender: "M",
            address: "Calle 27A # 54A-121",
            phone: "3019027854",
            email: "jeroelgalle1@gmail.com",
            birthDate: new Date("1990-08-16"),
            status: "S",
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 10,
            documentType: "CC",
            document: "1095409121",
            names: "Bellotha",
            lastnames: "Mendoza Castañeda",
            gender: "F",
            address: "Carrera 124 # 33-212C",
            phone: "3112114589",
            email: "bellothalatocha4@gmail.com",
            birthDate: new Date("2001-12-28"),
            status: "S",
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 11,
            documentType: "CC",
            document: "1216743229",
            names: "Geraldine",
            lastnames: "Toscana Villaboa",
            gender: "F",
            address: "Carrera 34A # 33C - 45",
            phone: "3012320912",
            email: "geraldinetoscavilla1@gmail.com",
            birthDate: new Date("1996-01-02"),
            status: "S",
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 12,
            documentType: "CC",
            document: "88654091",
            names: "Santiago",
            lastnames: "Serrano Fernandez",
            gender: "M",
            address: "Carrera 121A # 45A - 34",
            phone: "3122430912",
            email: "santiagogt785@gmail.com",
            birthDate: new Date("1989-07-11"),
            status: "S",
        }

    ]

}