import { Controller,
         Get,
         Post,
         Body,
         Patch,
         Param,
         Delete,
         Query, 
         UseInterceptors,
         UploadedFile,
         ParseFilePipe,
         MaxFileSizeValidator,
         FileTypeValidator} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { PaginationDto } from '../../../common/dtos/pagination.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from '../../../common/cloudinary/cloudinary.service';
import { uploadProductFile } from '../interfaces/uploadFileProduct.interfaces';

@Controller('products')
export class ProductsController {
  
  constructor(
    private readonly productsService: ProductsService,
    private readonly cloudinaryService: CloudinaryService
  ) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.productsService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }

  @Post('upload')
  @UseInterceptors( FileInterceptor('productFile'))
  //Método
  uploadFileProducts(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }), //4 MB
          new FileTypeValidator({ fileType: '.(png|jpg|jpeg)' }),
        ]
      }),
    ) file: Express.Multer.File, @Body() body: uploadProductFile) {

      let url_cloudinary: string = "";
      let executeFile = this.cloudinaryService.uploadFile(file);
      
      executeFile.then( p  => {

        url_cloudinary = p.url;
        const dateNow = new Date();
        const { createUserAt, product } = body;

        const objReg: uploadProductFile = {
          url: url_cloudinary,
          product: product,
          createUserAt: createUserAt,
          createDateAt: dateNow
        }

        this.productsService.createProdutImage(objReg);

      })

      return executeFile;

  }

}
