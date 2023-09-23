import { Room } from './room.entity';
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity({
    name: "TCH_TEMATICAS_HABITACIONES"
})
export class ThematicRoom {

    @PrimaryGeneratedColumn({
        name: "TTH_ID",
        comment: 'Clave primaria de tabla'
    })
    id: number;

    @Column({
        name: "TTH_TEMATICA",
        type: 'varchar',
        unique: true,
        length: 150,
        comment: 'Temática de la Habitación'
    })
    thematic: string;

    @Column({
        name: "TTH_DESCRIPCION",
        type: 'varchar',
        length: 500,
        comment: 'Descripción de Temática de la Habitación'
    })
    description: string;

    @Column({
        name: "TTH_COMFORT_LIST",
        type: 'text',
        array: true,
        comment: 'Comodidades de Temática de la Habitación',
        default: []
    })
    comforts: string[];

    @Column({
        name: "TTH_PRECIO",
        type: 'decimal',
        precision: 20,
        scale: 2,
        comment: 'Precio de la temática de habitación',
        default: 0
    })
    price: number;

    @Column({
        name: "TTH_ESTADO",
        type: 'varchar',
        length: 1,
        comment: 'Estado Lógico de la temática',
        default: 'S'
    })
    status: string;

    @Column({
        name: "TTH_IMAGENREF",
        type: 'varchar',
        length: 150,
        nullable: true,
        comment: 'Imagen Referencial de Temática de la Habitación'
    })
    referencialImage: string;

    @Column({
        name: "TTH_USUARIO_CREACION",
        type: 'varchar',
        length: 30,
        comment: 'Documento de usuario que creo'
    })
    createUserAt: string;

    @Column({
        name: "TTH_FECHA_CREACION",
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha creación'
    })
    createDateAt: Date;

    @Column({
        name: "TTH_USUARIO_ACTUALIZACION",
        type: 'varchar',
        length: 30,
        comment: 'Documento de usuario que creo'
    })
    updateUserAt: string;

    @Column({
        name: "TTH_FECHA_ACTUALIZACION",
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha creación'
    })
    updateDateAt: Date;


    @OneToMany( () => Room, (room) => room.theme )
    room: Room[];

}
