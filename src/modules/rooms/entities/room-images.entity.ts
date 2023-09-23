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
    name: "TIH_IMAGENES_HABITACIONES"
})
export class ImagesRoom {

    @PrimaryGeneratedColumn({
        name: "TIH_ID",
        comment: 'Clave primaria de tabla'
    })
    id?: number;

    @Column({
        name: "TIH_URL",
        type: 'varchar',
        unique: true,
        length: 150,
        comment: 'Url de la habitación'
    })
    url: string;

    @Column({
        name: "TIH_NOTAS",
        type: 'varchar',
        length: 300,
        nullable: true,
        comment: 'Notas adicionales Habitación'
    })
    notes: string;

    @Column({
        name: "TIH_USUARIO_CREACION",
        type: 'varchar',
        length: 30,
        comment: 'Documento de usuario que creó'
    })
    createUserAt: string;

    @Column({
        name: "TIH_FECHA_CREACION",
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha creación'
    })
    createDateAt: Date;

    @ManyToOne( () => Room, (room) => room.images )
    @JoinColumn({ name: 'THA_HABITACION_ID' })
    room?: Room | number;

}
