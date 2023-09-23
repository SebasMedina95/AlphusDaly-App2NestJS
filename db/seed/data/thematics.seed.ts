import { ThematicRoom } from '../../../src/modules/rooms/entities/room-thematic.entity';

interface SeedThematic {
    createDateAt: Date;
    createUserAt: string;
    updateDateAt: Date;
    updateUserAt: string;
    id?: number;
    thematic: string;
    description: string;
    comforts: string[];
    price: number;
    status: string;
    referencialImage: string;
}

interface SeedData {

    thematics: SeedThematic[];

}

export const initialDataThematic: SeedData = {

    thematics: [

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 1,
            thematic: "Suite Express Small",
            description: "Phasellus eu tincidunt metus. Aliquam pretium, neque ut cursus ullamcorper, mauris velit rutrum ipsum, a hendrerit massa dui quis massa.",
            comforts: [
                "Comodidad Suite Express Small 1",
                "Comodidad Suite Express Small 2",
                "Comodidad Suite Express Small 3",
                "Comodidad Suite Express Small 4",
                "Comodidad Suite Express Small 5",
                "Comodidad Suite Express Small 6",
                "Comodidad Suite Express Small 7"
            ],
            price: 85000,
            status: "S",
            referencialImage: "supra_subimagentematic1.jpg"
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 2,
            thematic: "Suite Express Medium",
            description: "In a lectus a lectus finibus mollis vel vitae nibh. Morbi aliquet mattis vulputate. Morbi a dolor urna. Sed vulputate condimentum mattis.",
            comforts: [
                "Comodidad Suite Express Medium 1",
                "Comodidad Suite Express Medium 2",
                "Comodidad Suite Express Medium 3",
                "Comodidad Suite Express Medium 4",
                "Comodidad Suite Express Medium 5",
                "Comodidad Suite Express Medium 6",
                "Comodidad Suite Express Medium 7",
                "Comodidad Suite Express Medium 8",
                "Comodidad Suite Express Medium 9",
                "Comodidad Suite Express Medium 10"
            ],
            price: 125000,
            status: "S",
            referencialImage: "supra_subimagentematic2.jpg"
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 3,
            thematic: "Suite Express Large",
            description: "Quisque tempus nunc non leo commodo aliquam. Mauris congue purus nulla, eu tristique mauris laoreet non. Sed ut ante congue, rutrum ligula non, rutrum sem.",
            comforts: [
                "Comodidad Suite Express Large 1",
                "Comodidad Suite Express Large 2",
                "Comodidad Suite Express Large 3",
                "Comodidad Suite Express Large 4",
                "Comodidad Suite Express Large 5",
                "Comodidad Suite Express Large 6",
                "Comodidad Suite Express Large 7",
                "Comodidad Suite Express Large 8",
                "Comodidad Suite Express Large 9",
                "Comodidad Suite Express Large 10",
                "Comodidad Suite Express Large 11",
                "Comodidad Suite Express Large 12",
                "Comodidad Suite Express Large 13",
                "Comodidad Suite Express Large 14"
            ],
            price: 195000,
            status: "S",
            referencialImage: "supra_subimagentematic3.jpg"
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 4,
            thematic: "Suite Soho Express Simple",
            description: "Suspendisse eget ex eu enim blandit pulvinar. Mauris magna orci, pharetra at aliquam non, aliquet ac ex. Donec vel mi at eros luctus maximus non eget odio.",
            comforts: [
                "Comodidad Suite Soho Express Simple 1",
                "Comodidad Suite Soho Express Simple 2",
                "Comodidad Suite Soho Express Simple 3",
                "Comodidad Suite Soho Express Simple 4",
                "Comodidad Suite Soho Express Simple 5",
                "Comodidad Suite Soho Express Simple 6",
                "Comodidad Suite Soho Express Simple 7",
                "Comodidad Suite Soho Express Simple 8",
                "Comodidad Suite Soho Express Simple 9",
                "Comodidad Suite Soho Express Simple 10",
                "Comodidad Suite Soho Express Simple 11",
                "Comodidad Suite Soho Express Simple 12"
            ],
            price: 270000,
            status: "S",
            referencialImage: "supra_subimagentematic4.jpg"
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 5,
            thematic: "Suite Soho Express Elite",
            description: "Curabitur sagittis dolor lorem, sed rhoncus dolor facilisis vitae. Nullam quis facilisis mi, eu faucibus nisi. Nulla ac fringilla orci, ac vulputate ligula. Donec bibendum efficitur nulla ac semper. Praesent tincidunt consequat convallis. Nunc placerat tempor posuere.",
            comforts: [
                "Comodidad Suite Soho Express Elite 1",
                "Comodidad Suite Soho Express Elite 2",
                "Comodidad Suite Soho Express Elite 3",
                "Comodidad Suite Soho Express Elite 4",
                "Comodidad Suite Soho Express Elite 5",
                "Comodidad Suite Soho Express Elite 6",
                "Comodidad Suite Soho Express Elite 7",
                "Comodidad Suite Soho Express Elite 8",
                "Comodidad Suite Soho Express Elite 9",
                "Comodidad Suite Soho Express Elite 10",
                "Comodidad Suite Soho Express Elite 11",
                "Comodidad Suite Soho Express Elite 12",
                "Comodidad Suite Soho Express Elite 13",
                "Comodidad Suite Soho Express Elite 14",
                "Comodidad Suite Soho Express Elite 15",
                "Comodidad Suite Soho Express Elite 16",
                "Comodidad Suite Soho Express Elite 17"
            ],
            price: 350000,
            status: "S",
            referencialImage: "supra_subimagentematic5.jpg"
        },

        {
            createDateAt: new Date,
            createUserAt: "123456789",
            updateDateAt: new Date,
            updateUserAt: "123456789",
            id: 6,
            thematic: "Suite Amathis Brutal",
            description: "Fusce magna libero, tempus in sem non, porta rutrum nunc. Ut nec risus ligula. Ut vitae dapibus turpis. Nulla facilisi. Duis congue id arcu nec semper.",
            comforts: [
                "Comodidad Amathis Brutal 1",
                "Comodidad Amathis Brutal 2",
                "Comodidad Amathis Brutal 3",
                "Comodidad Amathis Brutal 4",
                "Comodidad Amathis Brutal 5",
                "Comodidad Amathis Brutal 6",
                "Comodidad Amathis Brutal 7",
                "Comodidad Amathis Brutal 8",
                "Comodidad Amathis Brutal 9",
                "Comodidad Amathis Brutal 10",
                "Comodidad Amathis Brutal 11",
                "Comodidad Amathis Brutal 12",
                "Comodidad Amathis Brutal 13",
                "Comodidad Amathis Brutal 14",
                "Comodidad Amathis Brutal 15",
                "Comodidad Amathis Brutal 16",
                "Comodidad Amathis Brutal 17",
                "Comodidad Amathis Brutal 18",
                "Comodidad Amathis Brutal 19",
                "Comodidad Amathis Brutal 20"
            ],
            price: 475000,
            status: "S",
            referencialImage: "supra_subimagentematic6.jpg"
        }

    ]

}