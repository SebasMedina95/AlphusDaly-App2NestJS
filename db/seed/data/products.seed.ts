// import { ProductImage } from '../../products/entities/product-image.entity';
import { ProductImage } from '../../../src/modules/products/entities/product-image.entity';
interface Images {
    url: string;
    createUserAt: string;
    createDateAt: Date;
}

interface SeedProduct {
    createDateAt: Date;
    createUserAt: string;
    updateDateAt: Date;
    updateUserAt: string;
    description: string;
    gender: string;
    id?: number;
    images: ProductImage[];
    price: number;
    sizes: string[]
    slug: string;
    status: string;
    stock: number;
    tags: string[];
    title: string;
}

type ValidGender = 'hombre' | 'mujer' | 'unisex' | 'consumo';


interface SeedData {

    products: SeedProduct[];

}

export const initialDataProducts: SeedData = {

    products: [

        {
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
            images: [
                {
                    url: "url_imagentta-1.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 17,
            price: 34500,
            sizes: ['S1','S2','S3','S4','S5'],
            slug: "carola_pandum_sensitive",
            status: 'S',
            tags: ['tagA','tagB','tagC'],
            title: "Carola Pandum Sensitive",
            gender: 'hombre',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 1
        },

        {
            description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy",
            images: [
                {
                    url: "url_imagentta-1.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-2.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-3.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-4.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 15,
            price: 41200,
            sizes: ['S1'],
            slug: "cream_deluxer_suavingr",
            status: 'S',
            tags: ['tagW','tagX','tagY','tagZ'],
            title: "Cream Deluxer Suavin'gr",
            gender: 'hombre',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 2
        },

        {
            description: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            images: [
                {
                    url: "url_imagentta-5.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-6.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 5,
            price: 25600,
            sizes: ['S1','S2','S3'],
            slug: "frambuels_register_danuvios",
            status: 'S',
            tags: ['tagW','tagX','tagY','tagZ'],
            title: "Frambuels Register Danuvio's",
            gender: 'mujer',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 3
        },

        {
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            images: [
                {
                    url: "url_imagentta-7.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-8.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-9.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-10.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-11.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 11,
            price: 78900,
            sizes: ['S1','S2'],
            slug: "Dolly Sensual Plamadug'ew",
            status: 'S',
            tags: ['tagA','tagB'],
            title: "dolly_sensual_plamadugew",
            gender: 'mujer',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 4
        },

        {
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
            images: [
                {
                    url: "url_imagentta-12.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-13.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-14.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 9,
            price: 134000,
            sizes: ['S1'],
            slug: "grant_buckanas_ron",
            status: 'S',
            tags: ['tagF','tagG','tagH','tagI','tagJ','tagK'],
            title: "Grant Buckana's Ron",
            gender: 'consumo',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 5
        },

        {
            description: "In vel est at neque vestibulum venenatis. Fusce id tincidunt lacus. Nunc nec mi a massa imperdiet sollicitudin sed ac nunc. Morbi at felis facilisis, convallis dolor quis, lobortis ante. Cras efficitur augue erat, sit amet volutpat sapien rhoncus vel. Vestibulum in euismod enim, et efficitur nunc.",
            images: [
                {
                    url: "url_imagentta-15.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-16.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-17.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-18.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-19.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 30,
            price: 25000,
            sizes: ['B1'],
            slug: "condoms_ultra_sensitive",
            status: 'S',
            tags: ['tagQQQ','tagPPP','tagRRR'],
            title: "Condom's Ultra Sensitive",
            gender: 'hombre',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 6
        },

        {
            description: "Ut pharetra, est id tempus sollicitudin, augue metus rhoncus ligula, vitae interdum elit elit quis quam. Sed rhoncus tincidunt sem sed imperdiet. Aliquam erat volutpat. Nulla sollicitudin felis ac felis ullamcorper aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            images: [
                {
                    url: "url_imagentta-20.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 9,
            price: 235000,
            sizes: ['S1'],
            slug: "lomby_vinus_paradises",
            status: 'S',
            tags: ['tagV'],
            title: "Lomby Vinus Paradise's",
            gender: 'consumo',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 7
        },

        {
            description: "Vestibulum tincidunt lobortis laoreet. Integer eget commodo elit. Donec porta volutpat magna, non molestie dolor tempor eu. Nulla diam eros, ullamcorper in nisi in, pharetra volutpat velit. Curabitur eget eleifend leo. Ut maximus accumsan cursus. Nullam eu felis nulla.",
            images: [
                {
                    url: "url_imagentta-21.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-22.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-23.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-24.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-25.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 2,
            price: 195000,
            sizes: ['T1','T2','T3','T4'],
            slug: "look_policial_passions",
            status: 'S',
            tags: ['tagACX','tagBCX','tagCCX'],
            title: "Look Policial Passion's",
            gender: 'mujer',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 8
        },

        {
            description: "Vestibulum tincidunt lobortis laoreet. Integer eget commodo elit. Donec porta volutpat magna, non molestie dolor tempor eu. Nulla diam eros, ullamcorper in nisi in, pharetra volutpat velit. Curabitur eget eleifend leo. Ut maximus accumsan cursus. Nullam eu felis nulla.",
            images: [
                {
                    url: "url_imagentta-26.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-27.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 2,
            price: 195000,
            sizes: ['T1','T2','T3','T4'],
            slug: "look_nurses_passions",
            status: 'S',
            tags: ['tagACX','tagBCX','tagCCX'],
            title: "Look Nurse's Passion's",
            gender: 'mujer',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 9
        },

        {
            description: "Vestibulum tincidunt lobortis laoreet. Integer eget commodo elit. Donec porta volutpat magna, non molestie dolor tempor eu. Nulla diam eros, ullamcorper in nisi in, pharetra volutpat velit. Curabitur eget eleifend leo. Ut maximus accumsan cursus. Nullam eu felis nulla.",
            images: [
                {
                    url: "url_imagentta-28.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-29.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-30.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-31.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 12,
            price: 47800,
            sizes: ['T1','T2'],
            slug: "lubricants_calibily_volb",
            status: 'S',
            tags: ['palACX','palBCX','palCCX'],
            title: "Lubricant's Calibily Volb",
            gender: 'unisex',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 10
        },

        {
            description: "Cras convallis faucibus ante, sed tincidunt justo dignissim vel. Curabitur sit amet tortor velit. Donec et pellentesque est. Duis semper iaculis vestibulum. Nulla quam sem, ultrices non risus a, volutpat pellentesque massa. Ut ultrices tellus consectetur, vulputate sem non, placerat augue. Proin tempor volutpat erat non commodo.",
            images: [
                {
                    url: "url_imagentta-32.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-33.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-34.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 50,
            price: 75000,
            sizes: ['N1'],
            slug: "picada_talikes_carbon",
            status: 'S',
            tags: ['tagACX','tagBCX','tagCCX'],
            title: "Picada Talike's Carbon",
            gender: 'consumo',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 11
        },

        {
            description: "Suspendisse luctus auctor nulla vel vestibulum. In posuere aliquam sem, id interdum justo porttitor a. Nullam sed metus vel mauris mattis viverra. Donec euismod tortor felis. Vivamus justo lectus, vulputate quis placerat in, condimentum sed risus. Donec imperdiet lobortis eros sit amet pulvinar.",
            images: [
                {
                    url: "url_imagentta-35.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-36.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 50,
            price: 95000,
            sizes: ['M1'],
            slug: "mariscoss_joes_motivations",
            status: 'S',
            tags: ['tagSSS','tagWWW','tagHHH','tagOOO'],
            title: "Mariscos's Joe's Motivations",
            gender: 'consumo',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 12
        },

        {
            description: "Integer feugiat, justo at aliquet mollis, leo ante cursus nisl, ut tincidunt nisl odio vitae nisl. Curabitur vestibulum erat enim, in pulvinar enim elementum sed. Fusce eleifend imperdiet mi ut suscipit. Donec in nibh et mauris euismod varius.",
            images: [
                {
                    url: "url_imagentta-37.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-38.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-39.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-40.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-41.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 55,
            price: 36000,
            sizes: ['W1','W2','W3','W4'],
            slug: "paliquetas_pollo_claws",
            status: 'S',
            tags: ['tagQW','tagQX','tagQY'],
            title: "Paliquetas Pollo Claw's",
            gender: 'consumo',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 13
        },

        {
            description: "Suspendisse interdum neque metus. Ut ut nisl ut massa aliquet aliquam. Aenean eleifend quis arcu sed pharetra. Suspendisse id metus quis dolor molestie vulputate. Cras mollis erat ac volutpat tempus. Praesent dapibus efficitur ex sit amet tincidunt. Nulla eget finibus orci.",
            images: [
                {
                    url: "url_imagentta-42.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-43.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-44.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 10,
            price: 71000,
            sizes: ['AD1','AD2'],
            slug: "sprays_baly_stimulation",
            status: 'S',
            tags: ['pKT1','pKT2','pKT3'],
            title: "Spray's Baly Stimulation",
            gender: 'unisex',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 14
        },

        {
            description: "Maecenas ut augue erat. Pellentesque hendrerit, lectus id tristique molestie, dui magna luctus justo, quis sagittis neque orci et diam. Maecenas eros quam, varius in mollis id, vestibulum sit amet tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            images: [
                {
                    url: "url_imagentta-45.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-46.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-47.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-48.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-49.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-50.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 10,
            price: 51000,
            sizes: ['AX1','BX2','CX3','DX4'],
            slug: "fallys_sensual_colly",
            status: 'S',
            tags: ['Qw1','Qw2','Qw3'],
            title: "Fally's Sensual Colly",
            gender: 'unisex',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 15
        },

        {
            description: "Fusce euismod magna eu est elementum vehicula non ut augue. Curabitur vitae mollis ipsum, ac mattis tellus. Curabitur elementum lacinia dolor. Integer lacinia metus at purus suscipit ultrices. Morbi faucibus, est sit amet feugiat pulvinar, justo eros laoreet neque, sed interdum diam ante eget metus.",
            images: [
                {
                    url: "url_imagentta-51.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-52.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-53.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
            ],
            stock: 40,
            price: 18900,
            sizes: ['AB3'],
            slug: "bercel_de_esposas_kms1",
            status: 'S',
            tags: ['KD-1','KD-2','KD-3','KD-4'],
            title: "Bercel de Esposas Kms1",
            gender: 'hombre',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 16
        },

        {
            description: "Fusce eget malesuada nulla, suscipit pharetra enim. Sed tincidunt quam sed sem rhoncus, vel porttitor dui dictum. Nulla in nibh elit. Nullam rutrum lacus ac lacus suscipit, at varius lectus convallis. Duis eleifend, libero eget lobortis varius, urna massa dignissim lectus, id cursus nunc erat nec felis.",
            images: [
                {
                    url: "url_imagentta-54.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-55.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-56.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-57.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-58.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 20,
            price: 41000,
            sizes: ['XXX1'],
            slug: "vibration_tamalus_sexiees",
            status: 'S',
            tags: ['B-1','B-2','XXX-OH','XXX-AH'],
            title: "Vibration Tamalu's Sexie'es",
            gender: 'mujer',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 17
        },

        {
            description: "Nunc elementum diam in diam faucibus, id pretium nulla placerat. Ut interdum, mi id venenatis consequat, tellus lorem tincidunt mauris, eu congue mauris magna ut neque. Aenean volutpat suscipit lectus, id eleifend orci dignissim fermentum. Mauris rhoncus nisl a dignissim luctus.",
            images: [
                {
                    url: "url_imagentta-59.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-60.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-61.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 100,
            price: 40000,
            sizes: ['D1'],
            slug: "magni_burguers_yija",
            status: 'S',
            tags: ['LUC2','LUC22','LUC33','LUC3'],
            title: "Magni Burguer's Yija",
            gender: 'consumo',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 18
        },

        {
            description: "Curabitur dictum orci ligula, sit amet laoreet nisl pellentesque ac. Pellentesque dignissim ac augue sit amet lacinia. Donec varius massa et imperdiet scelerisque. Pellentesque iaculis ullamcorper neque et laoreet. Duis efficitur porta tellus semper sodales.",
            images: [
                {
                    url: "url_imagentta-62.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-63.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-64.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-65.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-66.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 15,
            price: 75000,
            sizes: ['CK1','CK2','CK3','CK4','CK5'],
            slug: "craviles_dall_motivations_xxx",
            status: 'S',
            tags: ['ECk1','ECk2','ECk3','ECk4'],
            title: "Cravile's Dall Motivation's XXX",
            gender: 'unisex',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 19
        },

        {
            description: "Phasellus tempus iaculis fermentum. Aliquam efficitur ligula quis ligula interdum luctus. Aenean ut elit consectetur, blandit sem sagittis, vehicula magna. Maecenas sagittis fringilla rhoncus. Sed eleifend ante neque, nec congue risus maximus vitae. Duis ut turpis aliquet, egestas lectus non, consequat sapien. Praesent sed venenatis lorem. Sed porttitor id felis sed iaculis. Mauris quis feugiat turpis, in efficitur nisi. Sed vitae sem viverra, placerat leo ac, sollicitudin dolor. Nam malesuada dapibus porta. Phasellus dolor est, malesuada a massa ut, semper bibendum sem.",
            images: [
                {
                    url: "url_imagentta-67.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-68.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-69.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 100,
            price: 41000,
            sizes: ['X'],
            slug: "chekis_pollo_a_la_teriyaki",
            status: 'S',
            tags: ['AmitP1','AmitP2','AmitP3','AmitP4'],
            title: "Cheki's Pollo a la Teriyaki",
            gender: 'consumo',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 20
        },

        {
            description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vulputate orci eu lacus gravida vulputate. Maecenas pellentesque lacinia nisl, sit amet iaculis lorem finibus eu. In luctus est in massa auctor, at vestibulum magna elementum.",
            images: [
                {
                    url: "url_imagentta-70.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-71.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-72.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-73.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-74.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 100,
            price: 38700,
            sizes: ['X'],
            slug: "mariscos_ala_mariw",
            status: 'S',
            tags: ['zxECk1','zxECk2','zxECk3'],
            title: "Mariscos ala Mariw",
            gender: 'consumo',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 21
        },

        {
            description: "Quisque a mi mauris. Cras sit amet imperdiet lacus. Vestibulum id justo eget lacus sagittis eleifend a vel dolor. Donec quis dolor lacus. Suspendisse potenti. Fusce leo magna, vestibulum a ex eu, sodales eleifend dolor. Nullam a dui nec lectus eleifend pharetra. Cras nec tempus mi, sit amet dapibus metus.",
            images: [
                {
                    url: "url_imagentta-75.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-76.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 100,
            price: 22600,
            sizes: ['KD1','VB2','TY3'],
            slug: "chorrys_cocatils_fresh",
            status: 'S',
            tags: ['X'],
            title: "Chorry's Cocatils Fresh",
            gender: 'consumo',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 22
        },

        {
            description: " Sed felis magna, maximus ut ligula et, accumsan ultrices nulla. Duis orci augue, facilisis vel sapien et, tempus vulputate velit. Maecenas aliquet leo sed purus rutrum rhoncus.",
            images: [
                {
                    url: "url_imagentta-77.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-78.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-79.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 30,
            price: 33400,
            sizes: ['D1','B2','Y3'],
            slug: "maldy_sugar_passion_white",
            status: 'S',
            tags: ['AB','DF','ER','MD'],
            title: "Maldy Sugar Passion White",
            gender: 'hombre',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 23
        },

        {
            description: "Nulla convallis iaculis tortor, id porttitor augue accumsan vel. Suspendisse tristique a ex nec rutrum. Nullam ut mattis quam, bibendum sagittis nibh. Sed interdum lectus justo, tempor luctus diam pretium sed.",
            images: [
                {
                    url: "url_imagentta-78.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-79.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-80.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-81.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 16,
            price: 61200,
            sizes: ['D1','B2','Y3'],
            slug: "stimulath_krugger_bolk",
            status: 'S',
            tags: ['STY1','STY2'],
            title: "Stimulath Krugger Bolk",
            gender: 'hombre',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 24
        },

        {
            description: "Proin tincidunt tincidunt est nec eleifend. Aenean rutrum pellentesque nisl vel posuere. In tincidunt pharetra dui, vel dapibus lectus vestibulum sit amet. Phasellus libero dolor, tempus a odio ut, lacinia dapibus arcu. Suspendisse vitae neque erat. Nulla auctor aliquam luctus.",
            images: [
                {
                    url: "url_imagentta-82.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-83.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-84.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-85.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "url_imagentta-86.jpg",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            stock: 10,
            price: 41000,
            sizes: ['wED1','wEB2','qwEB3'],
            slug: "donly_large_plantinum",
            status: 'S',
            tags: ['ATY1','BILLYT1','TORNA1','ALIUM1Q'],
            title: "Donly Large Plantinum",
            gender: 'mujer',
            createDateAt : new Date,
            createUserAt : "123456789",
            updateDateAt : new Date,
            updateUserAt : "123456789",
            id : 25
        }

    ]

}