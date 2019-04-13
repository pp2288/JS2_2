"use strict"

class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p><a href="#" class="button2"/>Добавить</a></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
  { title: 'tulips', price: 150 },
  { title: 'irises', price: 190 },
  { title: 'daisies', price: 120 },
  { title: 'poppies', price: 250 },
  { title: 'narcissus', price: 170 },
  { title: 'lavender', price: 250 },
  { title: 'forget-me-not', price: 120 },
  { title: 'chrysanthemums', price: 250 },
  { title: 'callas', price: 170 },
  { title: 'peonies', price: 280 }
    ];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  countTotalGoods(){
    let totalPrice = 0;
    this.goods.forEach(good => {
      totalPrice += good.price;
    });
    let totalBasket = 'Общая сумма товаров в корзине ${totalPrice}';
    document.querySelector('.goods-total').innerHTML = totalBasket;
   }
}
// добавляем класс для самой корзины {отображение окна корзины. формирование содержимого для блоков товаров в корзине}
  class Basket {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
      //как-то её надо будет отображать
    }
}

class basketList {
    constructor() {
    }
    openBasket() {} // Открыть окно с корзиной
    // добавление/удаление товаров - кнопки
    addGoods() {
    
    }
    deleteGoods() {

    }
    payGoods() {
    } // перейти к оплате
    returnStore() {

    } // кнопка возврата в магазин
  }  

const list = new GoodsList();
list.fetchGoods();
list.render();
