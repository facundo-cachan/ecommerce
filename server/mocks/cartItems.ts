import randomDateAfterDate from "../utils/randomDate";

export default [
  {
    id: 1,
    ownerId: 28919444,
    items: [
      {
        id: 1,
        price: 100,
        qt: 2,
      },
      {
        id: 8,
        price: 300,
        qt: 2,
      },
    ],
    price: 800,
    status: "Pending",
    createdAt: randomDateAfterDate(new Date(), 1),
    updatedAt: randomDateAfterDate(new Date(), 1),
  },
  {
    id: 2,
    ownerId: 28919444,
    items: [
      {
        id: 2,
        price: 750,
        qt: 2,
      },
    ],
    price: 1500,
    status: "Pending",
    createdAt: randomDateAfterDate(new Date(), 1),
    updatedAt: randomDateAfterDate(new Date(), 1),
  },
];
