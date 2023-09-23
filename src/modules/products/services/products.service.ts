import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';
import { ProductImage } from '../entities/product-image.entity';
import { Repository, DataSource } from 'typeorm';
import { PaginationDto } from '../../../common/dtos/pagination.dto';
import { uploadProductFile } from '../interfaces/uploadFileProduct.interfaces';

@Injectable()
export class ProductsService {

  private readonly logger = new Logger('ProductsService')

  constructor(

    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductImage) private readonly productImageRepository: Repository<ProductImage>,
    private readonly dataSource: DataSource,

  ) { }

  async create(createProductDto: CreateProductDto) {

    const { images , ...productsDetails} = createProductDto;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

      const product = this.productRepository.create({ ...productsDetails });
      await this.productRepository.save( product );
      const idProduct = product.id;

      if(images){

        images.map( async(i) => {

          const resImage = this.productImageRepository.create({
            url: i.url,
            createDateAt: i.createDateAt,
            createUserAt : i.createUserAt,
            product : idProduct
          })

          await queryRunner.manager.save( resImage );

        })

        await queryRunner.commitTransaction();
        await queryRunner.release();

        return await this.productRepository.find({
          where: { id : idProduct },
          relations: {
            images : true
          }
        })

      }
      
    } catch (error) {
      
      await queryRunner.rollbackTransaction();
      await queryRunner.release();

      this.handleDbExceptions(error);

    }

  }

  async findAll( paginationDto: PaginationDto ) {
    
    const { limit = 5, offset = 1 } = paginationDto;

    const [items, totalCount] = await this.productRepository.findAndCount({
      
      take: limit,
      skip: limit * (offset - 1),

      order: {
        title : 'ASC'
      },

      relations: {
        images : true
      }
      
    });

    const totalPages: number = Math.ceil(totalCount / (limit));

    return {
      items,
      page: offset,
      perPage: limit,
      totalData: totalCount,
      totalPages : totalPages
    };
    
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  async createProdutImage(productImage: uploadProductFile){

    // console.log(productImage);
    const image = this.productImageRepository.create({
      url: productImage.url,
      createUserAt: productImage.createUserAt,
      createDateAt: productImage.createDateAt,
      product: productImage.product
    });

    await this.productImageRepository.save( image );
    return productImage;

  }

  //* ERROR GENÉRICO !
  private handleDbExceptions( error: any ) {

    if( error.code === '23505' ) throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException('Error no controlado, por favor consulte el LOG para obtener más información.');

  }

}
