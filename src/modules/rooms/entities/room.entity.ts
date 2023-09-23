import { ImagesRoom } from './room-images.entity';
import { ThematicRoom } from './room-thematic.entity';
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity({
    name: "THA_HABITACIONES"
})
export class Room {

    @PrimaryGeneratedColumn({
        name: "THA_ID",
        comment: 'Clave primaria de tabla'
    })
    id: number;

    @Column({
        name: "THA_NUMERO",
        type: 'varchar',
        unique: true,
        length: 5,
        comment: 'Número de la habitación'
    })
    number: string;

    @Column({
        name: "THA_POSICION",
        type: 'varchar',
        length: 1,
        comment: 'Posición Cardinal de Habitación'
    })
    position: string;

    @Column({
        name: "THA_NOTAS",
        type: 'varchar',
        length: 500,
        nullable: true,
        comment: 'Notas adicionales Habitación'
    })
    notes: string;

    @Column({
        name: "THA_CATEGORIA",
        type: 'varchar',
        length: 50,
        comment: 'Categoría genérica de la habitación',
    })
    category: string;

    @Column({
        name: "THA_ESTADO",
        type: 'varchar',
        length: 1,
        comment: 'Estado Lógico de la Habitación',
        default: 'S'
    })
    status: string;

    @Column({
        name: "THA_USUARIO_CREACION",
        type: 'varchar',
        length: 30,
        comment: 'Documento de usuario que creó'
    })
    createUserAt: string;

    @Column({
        name: "THA_FECHA_CREACION",
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha creación'
    })
    createDateAt: Date;

    @Column({
        name: "THA_USUARIO_ACTUALIZACION",
        type: 'varchar',
        length: 30,
        comment: 'Documento de usuario que actualizó'
    })
    updateUserAt: string;

    @Column({
        name: "THA_FECHA_ACTUALIZACION",
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha actualización'
    })
    updateDateAt: Date;



    @OneToMany( () => ImagesRoom, (image) => image.room )
    images: ImagesRoom[];

    @ManyToOne( () => ThematicRoom, (theme) => theme.room )
    @JoinColumn({ name: 'TTH_TEMATICA_ID' })
    theme: ThematicRoom | number;


}
