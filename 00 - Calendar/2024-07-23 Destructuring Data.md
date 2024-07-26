---
title: Destructuring Data
allDay: true
startTime: 15:00
endTime: 15:30
date: 2024-07-23
completed: 
tags:
  - JavaScript
---
Assume some object:

```JS
const someObject = {
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
```


it is then possible to de-structure it as such:

```JS
const {title, author} = someObject
```

This allows for quick access to the data stored directly in the object.