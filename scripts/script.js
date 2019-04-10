"use strict"

const GOODS = [
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

const renderGoodsItem = (title, price) =>
`<div class="goods-item"><h3>${title}</h3><p>${price}</p><a href="#" class="button2"/>Добавить</a></div>`;
;

const renderGoodsList = list => {
  let goodsList = list.map (item  => renderGoodsItem(item.title, item.price));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(GOODS);