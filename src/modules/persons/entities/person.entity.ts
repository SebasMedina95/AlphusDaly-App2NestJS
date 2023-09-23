import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "TPE_PERSONAS"
})
export class Person {

    @PrimaryGeneratedColumn({
        name: "TPE_ID",
        comment: 'Clave primaria de tabla'
    })
    id: number;

    @Column({
        name: "TPE_TIPO_DOCUMENTO",
        type: 'varchar',
        length: 30,
        comment: 'Tipo Documento de la Persona'
    })
    documentType: string;

    @Column({
        name: "TPE_DOCUMENTO",
        type: 'varchar',
        unique: true,
        length: 50,
        comment: 'Documento de la Persona'
    })
    document: string;

    @Column({
        name: "TPE_NOMBRES",
        type: 'varchar',
        length: 100,
        comment: 'Nombres de la Persona'
    })
    names: string;

    @Column({
        name: "TPE_APELLIDOS",
        type: 'varchar',
        length: 100,
        comment: 'Apellidos de la Persona'
    })
    lastnames: string;

    @Column({
        name: "TPE_GENERO",
        type: 'varchar',
        length: 2,
        comment: 'Sexualidad de la Persona'
    })
    gender: string;

    @Column({
        name: "TPE_DIRECCION",
        type: 'varchar',
        length: 150,
        nullable: true,
        comment: 'Dirección Residencial de la Persona'
    })
    address: string;

    @Column({
        name: "TPE_TELEFONO",
        type: 'varchar',
        length: 60,
        nullable: true,
        comment: 'Celular de la Persona'
    })
    phone: string;

    @Column({
        name: "TPE_EMAIL",
        type: 'varchar',
        length: 150,
        comment: 'Correo Electrónico de la Persona'
    })
    email: string;

    @Column({
        name: "TPE_FECHA_NACIMIENTO",
        type: 'date',
        nullable: true,
        comment: 'Fecha Nacimiento de la Persona'
    })
    birthDate: Date;

    @Column({
        name: "TPE_ESTADO",
        type: 'varchar',
        length: 1,
        comment: 'Estado Lógico de la Persona',
        default: 'S'
    })
    status: string;

    @Column({
        name: "TPE_USUARIO_CREACION",
        type: 'varchar',
        length: 30,
        comment: 'Documento de usuario que creó'
    })
    createUserAt: string;

    @Column({
        name: "TPE_FECHA_CREACION",
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha creación'
    })
    createDateAt: Date;

    @Column({
        name: "TPE_USUARIO_ACTUALIZACION",
        type: 'varchar',
        length: 30,
        comment: 'Documento de usuario que actualizó'
    })
    updateUserAt: string;

    @Column({
        name: "TPE_FECHA_ACTUALIZACION",
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha actualización'
    })
    updateDateAt: Date;

}
