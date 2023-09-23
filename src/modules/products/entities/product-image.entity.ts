import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { Product } from './product.entity';

@Entity({
    name: "TIP_IMAGENES_PRODUCTOS",
})
export class ProductImage {

    @PrimaryGeneratedColumn({
        name: "ID",
        comment: 'Clave primaria de tabla'
    })
    id?: number;

    @Column({
        name: "TIP_URL_IMAGEN",
        type: 'text',
        comment: 'Url de la imagen del producto.'
    })
    url: string;

    @Column({
        name: "TIP_USUARIO_CREACION",
        type: 'varchar',
        length: 30,
        comment: 'Documento de usuario que creó'
    })
    createUserAt: string;

    @Column({
        name: "TIP_FECHA_CREACION",
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha creación'
    })
    createDateAt: Date;

    @ManyToOne( () => Product, (product) => product.images, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'TPR_PRODUCTO_ID' })
    product?: Product | number

}
