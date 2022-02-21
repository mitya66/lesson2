'use strict';

class BasketItem {
    addCartItem(cartItem) {
      this.goods.push(cartItem);
    }
}

class ProductList {
    constructor(container = '.products') {
        this._container = document.querySelector(container);
        this._goods = [];
        this._allProducts = [];

        this._fetchGoods();
        this._render();
    }


    _fetchGoods() {
        this._goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }

    _render() {
        for (const product of this._goods) {
            const productObject = new ProductItem(product);

            this._allProducts.push(productObject);
            this._container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }
    
    createTotal() {
        const h2Total = document.createElement('h2');
        h2Total.classList.add('total');
        const flexRow = document.querySelector('.flex__row');
        flexRow.append(h2Total);
        h2Total.innerHTML = 'ИТОГО, общая стоимость товара, составляет: ';
        }
    sumTotal() {
    const sumT = document.querySelector('.total');
    let sum = 0;
      for (let product of this.goods) {
        sum += product.price;
        }
    sumT.insertAdjacentHTML('beforeend', `${sum} \u20bd`);
    }

    sum() {
        return this._allProducts.reduce((sum, { price }) => sum + price, 0);
      }
    }

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
    }
}
new ProductList();



// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://via.placeholder.com/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
//   document.querySelector('.products')
//       .insertAdjacentHTML(
//           'beforeend',
//           list.map(item => renderProduct(item)).join('')
//       );
// };
//
// renderProducts(products);
//
