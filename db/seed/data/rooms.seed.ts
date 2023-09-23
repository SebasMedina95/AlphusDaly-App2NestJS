import { Room } from '../../../src/modules/rooms/entities/room.entity';
import { ImagesRoom } from '../../../src/modules/rooms/entities/room-images.entity';
interface Images {
    url: string;
    notes: string;
    createUserAt: string;
    createDateAt: Date;
}

interface SeedRoom {
    createDateAt: Date;
    createUserAt: string;
    updateDateAt: Date;
    updateUserAt: string;
    id?: number;
    number: string;
    position: string;
    notes: string;
    category: string;
    status: string;
    images: ImagesRoom[];
    theme: number;
}

interface SeedData {

    rooms: SeedRoom[];

}

export const initialDataRooms: SeedData = {

    rooms: [

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 1,
            number: "601",
            position: "A",
            notes: "Maecenas congue sodales nisl, sit amet placerat ante dignissim in. Aliquam vitae auctor tortor.",
            category: "Small",
            status: "S",
            images: [
                {
                    url: "room601-imagentt1.jpg",
                    notes: "Ut et efficitur urna, sed aliquet nibh. Sed eget risus eget arcu tempor dictum.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room601-imagentt2.jpg",
                    notes: "Fusce magna libero, tempus in sem non, porta rutrum nunc.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room601-imagentt3.jpg",
                    notes: "Ut nec risus ligula. Ut vitae dapibus turpis. Nulla facilisi. Duis congue id arcu nec semper.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room601-imagentt4.jpg",
                    notes: "Nam finibus dictum posuere. Ut vehicula congue dolor molestie condimentum.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            theme: 1
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 2,
            number: "602",
            position: "B",
            notes: "Quisque sed nunc consequat, maximus lacus aliquam, pulvinar sapien. Proin vitae ante non erat tempor mollis.",
            category: "Small",
            status: "S",
            images: [
                {
                    url: "room602-imagentt1.jpg",
                    notes: "Curabitur ac ipsum leo. Nunc placerat eros lorem, posuere finibus nunc feugiat ut.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room602-imagentt2.jpg",
                    notes: "Cras pellentesque commodo nunc, at suscipit turpis ultricies quis.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room602-imagentt3.jpg",
                    notes: "Aliquam pretium, neque ut cursus ullamcorper, mauris velit rutrum ipsum, a hendrerit massa dui quis massa.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room602-imagentt4.jpg",
                    notes: "Mauris congue purus nulla, eu tristique mauris laoreet non. Sed ut ante congue, rutrum ligula non, rutrum sem.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            theme: 1
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 3,
            number: "603",
            position: "C",
            notes: "Vivamus sed nunc laoreet, posuere nibh vitae, eleifend tortor. Duis vel vestibulum justo.",
            category: "Small",
            status: "S",
            images: [
                {
                    url: "room603-imagentt1.jpg",
                    notes: "Nullam scelerisque felis ut sollicitudin dictum. Proin sit amet velit fermentum, mattis risus vitae, finibus ligula.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room603-imagentt2.jpg",
                    notes: "Phasellus elementum, leo sit amet eleifend semper, eros ligula lobortis turpis, in pulvinar nisl massa eget lacus.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room603-imagentt3.jpg",
                    notes: "Nunc sollicitudin magna ut nibh efficitur dictum. Sed dapibus diam quam, sit amet dapibus mi interdum eget.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room603-imagentt4.jpg",
                    notes: "Morbi aliquam tincidunt enim, a aliquet felis pharetra auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            theme: 1
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 4,
            number: "701",
            position: "A",
            notes: "Sed in mi in arcu ultrices semper. Quisque vel hendrerit augue. Aenean scelerisque libero quis maximus imperdiet.",
            category: "Medium",
            status: "S",
            images: [
                {
                    url: "room701-imagentt1.jpg",
                    notes: "Nunc bibendum pulvinar eros, at rutrum urna placerat nec. Maecenas ut sem mi.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room701-imagentt2.jpg",
                    notes: "Ut nulla erat, fermentum facilisis tristique ut, ultricies sit amet lorem. In tempor nisi sed nibh egestas mattis.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room701-imagentt3.jpg",
                    notes: "Sed faucibus facilisis ex, et ultricies eros dictum in. Aliquam at lectus elit.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room701-imagentt4.jpg",
                    notes: "Curabitur volutpat ex eros, sit amet pellentesque libero condimentum ultricies.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            theme: 2
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 5,
            number: "702",
            position: "B",
            notes: "In hac habitasse platea dictumst. Curabitur venenatis sapien vel tortor ullamcorper tempor. Nulla imperdiet sapien a est semper feugiat. Etiam ante mauris, varius eget lorem non, congue sagittis felis.",
            category: "Medium",
            status: "S",
            images: [
                {
                    url: "room702-imagentt1.jpg",
                    notes: "Etiam sem velit, porttitor eget tristique sed, sagittis et nunc.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room702-imagentt2.jpg",
                    notes: "Phasellus fermentum leo libero, ultricies laoreet velit hendrerit eget. Proin eget scelerisque tortor. Proin lacinia maximus metus quis finibus.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room702-imagentt3.jpg",
                    notes: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room702-imagentt4.jpg",
                    notes: "Mauris facilisis vestibulum ligula, eget blandit dolor pellentesque quis.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            theme: 2
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 6,
            number: "703",
            position: "C",
            notes: "Sed nec nunc quis magna gravida porta. Cras vel augue mi. Praesent ut blandit leo, ac sollicitudin lectus. Pellentesque faucibus nisi ac fermentum pulvinar.",
            category: "Medium",
            status: "S",
            images: [
                {
                    url: "room703-imagentt1.jpg",
                    notes: "Mauris varius dolor id condimentum fringilla. Nulla vitae ante in ante feugiat consectetur eget eget metus.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room703-imagentt2.jpg",
                    notes: "Aenean nec enim turpis. Suspendisse eget elit mauris. Nam non augue faucibus, rhoncus erat eget, placerat diam.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room703-imagentt3.jpg",
                    notes: "Vivamus posuere sodales magna, at pretium magna pretium sit amet.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room703-imagentt4.jpg",
                    notes: "Pellentesque finibus ultrices felis eu dictum. Nunc ac dolor gravida, laoreet felis quis, aliquet neque.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            theme: 2
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 7,
            number: "704",
            position: "D",
            notes: "Curabitur tincidunt commodo nisi, quis tincidunt dui tincidunt nec. Vestibulum facilisis dapibus dui sed blandit.",
            category: "Medium",
            status: "S",
            images: [
                {
                    url: "room704-imagentt1.jpg",
                    notes: "Nullam feugiat nisl sed metus dignissim, sed sagittis elit vestibulum.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room704-imagentt2.jpg",
                    notes: "Nulla iaculis purus quis placerat elementum. Suspendisse rhoncus, urna eleifend dignissim sagittis.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room704-imagentt3.jpg",
                    notes: "Aenean facilisis augue quam, a malesuada metus congue nec. Integer eu tortor accumsan, dictum ipsum.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room704-imagentt4.jpg",
                    notes: "Vestibulum sed tristique urna, porttitor posuere velit. Donec ut nisl vitae nulla iaculis congue.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            theme: 2
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 8,
            number: "801",
            position: "A",
            notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lectus eget metus iaculis, ac porttitor erat maximus. Curabitur eu sem id sapien hendrerit aliquam sed id neque.",
            category: "Large",
            status: "S",
            images: [
                {
                    url: "room801-imagentt1.jpg",
                    notes: "Proin placerat orci purus, at posuere nunc malesuada facilisis.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room801-imagentt2.jpg",
                    notes: "In hac habitasse platea dictumst. Vivamus fermentum euismod orci vitae ultricies.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room801-imagentt3.jpg",
                    notes: "Integer aliquet ipsum ut auctor tincidunt. Nulla vitae mauris sit amet libero sagittis varius. Sed vel leo sed sapien auctor rutrum.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room801-imagentt4.jpg",
                    notes: "Vivamus vel consectetur felis, sit amet malesuada nibh. Vestibulum et nulla ipsum. Sed a rhoncus justo.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            theme: 3
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 9,
            number: "802",
            position: "B",
            notes: "Pellentesque rutrum imperdiet dui, cursus placerat libero viverra eget. Integer est mauris, condimentum vel tortor ut, aliquet vulputate metus.",
            category: "Large",
            status: "S",
            images: [
                {
                    url: "room802-imagentt1.jpg",
                    notes: "Phasellus auctor nisl at lacus cursus malesuada. Sed a convallis felis.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room802-imagentt2.jpg",
                    notes: "Nunc nec pharetra mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room802-imagentt3.jpg",
                    notes: "Duis vitae nunc diam. Duis volutpat felis id nisi tempor, ac sollicitudin mauris pulvinar. Suspendisse facilisis scelerisque risus in maximus.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room802-imagentt4.jpg",
                    notes: "Donec eget tellus semper, feugiat elit in, porttitor nunc.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            theme: 3
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 10,
            number: "803",
            position: "C",
            notes: "Sed nec nibh eu velit dictum interdum sit amet eget sapien. Morbi vulputate metus vel odio venenatis, sit amet convallis sem porta.",
            category: "Large",
            status: "S",
            images: [
                {
                    url: "room803-imagentt1.jpg",
                    notes: "In sit amet efficitur lorem, id efficitur turpis. Quisque dapibus blandit porta.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room803-imagentt2.jpg",
                    notes: "Curabitur a lorem fringilla, euismod ipsum hendrerit, sodales metus.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room803-imagentt3.jpg",
                    notes: "Aenean quam felis, imperdiet gravida aliquam eget, maximus in nunc.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                },
                {
                    url: "room803-imagentt4.jpg",
                    notes: "Cras in odio congue, auctor velit sed, iaculis elit.",
                    createUserAt: "123456789",
                    createDateAt: new Date,
                }
            ],
            theme: 3
        }



    ]

}