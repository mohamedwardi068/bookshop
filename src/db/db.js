
export const books = [
    {
        id:1,
        title: "Can't Hurt Me",
        price: 30,
        genre: "Biography",
        author: "David Goggins",
        description: "A memoir of a man who overcame numerous obstacles to achieve his goals.",
        img: "https://books.google.tn/books/publisher/content?id=OSchEAAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0ENO2BcYBAILxzc9B-_8-H39Vh3w&w=1280"
    },
    {
        id:2,
        title: "To Kill a Mockingbird",
        price: 15,
        genre: "Fiction",
        author: "Harper Lee",
        description: "A novel set in the American South, dealing with themes of racial injustice and moral growth.",
        img: "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id:3,
        title: "1984",
        price: 20,
        genre: "Dystopian",
        author: "George Orwell",
        description: "A classic novel that explores the dangers of totalitarianism and extreme political ideology.",
        img: "https://groundedcuriosity.com/wp-content/uploads/2020/09/1984-cover.jpg"
    },
    {
        id:4,
        title: "The Great Gatsby",
        price: 10,
        genre: "Classic",
        author: "F. Scott Fitzgerald",
        description: "A critique of the American Dream, set in the Roaring Twenties.",
        img: "https://images.blinkist.io/images/books/63f4be590ed5a80008585f17/1_1/470.jpg"
    },
    {
        id:5,
        title: "Educated",
        price: 25,
        genre: "Memoir",
        author: "Tara Westover",
        description: "A memoir about a woman who escapes a strict, abusive household in rural Idaho to explore the world through education.",
        img: "data:image/jpeg;base64,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"
    }
];
