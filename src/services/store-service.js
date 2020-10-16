export default class StoreService {
  getGoods() {
    const data = [
      {
        id: 1,
        type: 'Maniac T-Shirt EX',
        color: 'RED',
        price: 50,
      },
      {
        id: 2,
        type: 'SUNSET MASSACRE T-Shirt',
        color: 'BLUE',
        price: 50,
      },
    ];

    return new Promise((res, rej) => {
      setTimeout(() => {
        if (Math.random() > 0.2) {
          res(data);
        }
        rej(new Error('Something bad happened'));
      }, 1000);
    });
  }
}
