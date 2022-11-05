import { InputNumber } from 'antd';
import { toFixed } from 'rc-input-number/es/utils/MiniDecimal';
// import { formatter } from 'antd/utils'
import React from 'react';
import ReactDOM from 'react';
import { ChangeEvent, useEffect, useState, useRef } from 'react';
import { Component } from 'react';

import 'antd/dist/antd.css';
import './client.css';

import ImagesPizza1 from '../images/products/pizzas/pizza1.jpg';
import ImagesPizza2 from '../images/products/pizzas/pizza2.jpg';
import ImagesPizza3 from '../images/products/pizzas/pizza3.jpg';
import ImagesPizza4 from '../images/products/pizzas/pizza4.jpg';
import ImagesPizza5 from '../images/products/pizzas/pizza5.jpg';
import ImagesPizza6 from '../images/products/pizzas/pizza6.jpg';
import ImagesPizza7 from '../images/products/pizzas/pizza7.jpg';
import ImagesPizza8 from '../images/products/pizzas/pizza8.jpg';
import ImagesPizza9 from '../images/products/pizzas/pizza9.jpg';

interface IState {
  count: number;
}

const Client = () => {
  const ref = useRef(null);
  // const el = useRef(null);

  // Our state to hold current value of input
  const [CountPizzas, setCountPizzas] = useState<string | null>('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const [total, setTotal] = useState(0);

  const [count1, setCount1] = useState(0);
  const [total1, setTotal1] = useState(0);
  const prix1 = 16;

  const [count2, setCount2] = useState(0);
  const [total2, setTotal2] = useState(0);
  const prix2 = 56;

  const state: IState = { count: 0 };
  const [visible, setVisible] = useState(true);

  const [show, setShow] = useState(false);

  // map sample for boucle
  // https://stackoverflow.com/questions/62432393/how-to-get-data-attribute-in-react

  /* Set rates + misc */
  const taxRate = 0.05;
  const shippingRate = 15.0;
  const fadeTime = 300;

  /* Assign actions */
  const incrementCount = (
    e: any,
    count: number,
    setCount: any,
    setTotal: any,
    prix: number,
  ) => {
    const id = e.currentTarget.id;
    if (count >= 0 && count < 10) {
      const countPlus = count + 1;
      setCount(countPlus);
      const newtotal = countPlus * prix;
      setTotal(newtotal);
      console.log('id:' + id);
      console.log('prix:' + prix);
      console.log('count:' + countPlus);
      console.log('total:' + newtotal);
      TOTAL(prix, 'addition');
    }
  };
  const decrementCount = (
    e: any,
    count: number,
    setCount: any,
    setTotal: any,
    prix: number,
  ) => {
    const id = e.currentTarget.id;
    if (count > 0 && count <= 10) {
      const countMoins = count - 1;
      setCount(countMoins);
      const newtotal = countMoins * prix;
      setTotal(newtotal);
      console.log('id:' + id);
      console.log('prix:' + prix);
      console.log('count:' + countMoins);
      console.log('total:' + newtotal);
      TOTAL(prix, 'substraction');
    }
  };
  const TOTAL = (prix: number, operator: string) => {
    if (operator == 'addition') {
      const t = total + prix;
      console.log('total old:' + total);
      setTotal(t);
      console.log('total:' + t);
    }
    if (operator == 'substraction') {
      if (total > 0) {
        const t = total - prix;
        console.log('total old:' + total);
        setTotal(t);
        console.log('total:' + t);
      }
      console.log('---');
    }
  };
  // const TOTALmoins = (prix: number) => {
  //   if (total > 0) {
  //     const t = total - prix;
  //     console.log('total old:' + total);
  //     setTotal(t);
  //     console.log('total:' + t);
  //   }
  // };
  // https://codingbeautydev.com/blog/react-remove-element-onclick/
  // useEffect in function, First letter function have to be uppercase
  const HideElement = (e: any) => {
    const id = e.currentTarget.id;
    // console.log(id);
    const el = document.getElementById('product-' + id);
    if (el !== null) {
      el.style.display = 'none';
      // console.log(el);
    }
    // useEffect(() => {
    //   // 👇️ use document.getElementById()
    //   const el0 = document.getElementById('1');
    //   el0.style.display = 'none';
    //   console.log(el0);
    //   if (el !== null) {
    //     console.log(el);
    //     // el.classList.add('my-class-1', 'my-class-2');
    //     el.style.display = 'none';
    //   }
    // }, []);
  };

  // onClick={() => setShow(currentShow => !currentShow)
  // const removeProduct = (e: any) => document.getElementById('1').remove();
  /* Assign actions */
  // $('.product-quantity input').change( function() {
  //   updateQuantity(this);
  // });
  // const onCheckAllChange = (e: CheckboxChangeEvent) => {
  //   updateQuantity(this);
  // };
  // $('.product-removal button').click( function() {
  //   removeItem(this);
  // });
  /* Recalculate cart */
  // function recalculateCart() {
  // let subtotal = 0;
  /* Sum up row totals */
  // $('.product').each(function () {
  //   subtotal += parseFloat($(this).children('.product-line-price').text());
  // });
  /* Calculate totals */
  // const tax = subtotal * taxRate;
  // const shipping = subtotal > 0 ? shippingRate : 0;
  // const total = subtotal + tax + shipping;
  /* Update totals display */
  //   $('.totals-value').fadeOut(fadeTime, function () {
  //     $('#cart-subtotal').html(subtotal.toFixed(2));
  //     $('#cart-tax').html(tax.toFixed(2));
  //     $('#cart-shipping').html(shipping.toFixed(2));
  //     $('#cart-total').html(total.toFixed(2));
  //     if (total == 0) {
  //       $('.checkout').fadeOut(fadeTime);
  //     } else {
  //       $('.checkout').fadeIn(fadeTime);
  //     }
  //     $('.totals-value').fadeIn(fadeTime);
  //   });
  // }
  /* Update quantity */
  // function updateQuantity(quantityInput) {
  /* Calculate line price */
  // const productRow = $(quantityInput).parent().parent();
  // const price = parseFloat(productRow.children('.product-price').text());
  // const quantity = $(quantityInput).val();
  // const linePrice = price * quantity;
  /* Update line price display and recalc cart totals */
  //   productRow.children('.product-line-price').each(function () {
  //     $(this).fadeOut(fadeTime, function () {
  //       $(this).text(linePrice.toFixed(2));
  //       recalculateCart();
  //       $(this).fadeIn(fadeTime);
  //     });
  //   });
  // }
  /* Remove item from cart */
  // function removeItem(removeButton) {
  /* Remove row from DOM and recalc cart total */
  // const productRow = $(removeButton).parent().parent();
  // productRow.slideUp(fadeTime, function () {
  //   productRow.remove();
  //   recalculateCart();
  // });
  // }
  return (
    <div
      style={{
        alignItems: 'center',
        height: '80vh',
        margin: '25px',
      }}
    >
      <h1>Mon Panier</h1>
      {show ? <div>toto</div> : null}
      {/* <div id="product-1">toto1</div> */}
      <div className="shopping-cart">
        <div className="column-labels">
          <label className="product-image">Image</label>
          <label className="product-details">Produit</label>
          <label className="product-price">Prix</label>
          <label className="product-quantity">Quantité</label>
          <label className="product-removal">Supprimer</label>
          <label className="product-line-price">Total (Euros)</label>
        </div>
        <div id="product-1" className="product">
          <div className="product-image">
            <img src={ImagesPizza1} />
          </div>
          <div className="product-details">
            <div className="product-title">Pizza 1</div>
            <p className="product-description">Ananas - Cornichons</p>
          </div>
          <div className="product-price">{prix1}</div>
          <div className="product-quantity">
            <div className="counter-span-div">
              <span className="counter-span">
                <button
                  id="1"
                  className="btn-counter-span"
                  onClick={e =>
                    incrementCount(e, count1, setCount1, setTotal1, prix1)
                  }
                >
                  +
                </button>
              </span>
              <span className="counter-span">
                <div className="counter-span-qtite">{count1}</div>
              </span>
              <span className="counter-span">
                <button
                  id="1"
                  data-prov="gghghghghgghggggghg"
                  className="btn-counter-span"
                  onClick={e =>
                    decrementCount(e, count1, setCount1, setTotal1, prix1)
                  }
                >
                  -
                </button>
              </span>
            </div>
          </div>
          <div className="product-removal">
            {/* <button onClick={() => setShow(currentShow => !currentShow)}>
              toggle
            </button> */}
            <button
              className="remove-product"
              id="1"
              data-prov="gghghghghgghggggghg"
              onClick={e => HideElement(e)}
            >
              Supprimer
            </button>
            {/* <span className="counter-span">
              <button
                id="1"
                data-prov="gghghghghgghggggghg"
                className="btn-counter-span"
                onClick={e => setTotal(0)}
              >
                Reset
              </button>
            </span> */}
          </div>
          <div id="prix-1" className="product-line-price">
            {total1}
          </div>
        </div>
        <div id="product-2" className="product">
          <div className="product-image">
            <img src={ImagesPizza2} />
          </div>
          <div className="product-details">
            <div className="product-title">Pizza 2</div>
            <p className="product-description">4 Fromages</p>
          </div>
          <div className="product-price">{prix2}</div>
          <div className="product-quantity">
            <div className="counter-span-div">
              <span className="counter-span">
                <button
                  id="2"
                  data-prov="gghghghghgghggggghg"
                  className="btn-counter-span"
                  onClick={e =>
                    incrementCount(e, count2, setCount2, setTotal2, prix2)
                  }
                >
                  +
                </button>
              </span>
              <span className="counter-span">
                <div className="counter-span-qtite">{count2}</div>
              </span>
              <span className="counter-span">
                <button
                  id="2"
                  data-prov="gghghghghgghggggghg"
                  className="btn-counter-span"
                  onClick={e =>
                    decrementCount(e, count2, setCount2, setTotal2, prix2)
                  }
                >
                  -
                </button>
              </span>
            </div>
          </div>
          <div className="product-removal">
            <button
              className="remove-product"
              id="2"
              data-prov="gghghghghgghggggghg"
              onClick={e => HideElement(e)}
            >
              Supprimer
            </button>
          </div>
          <div id="prix-2" className="product-line-price">
            {total2}
          </div>
        </div>
        <div className="totals">
          <div className="totals-item">
            <label>Sous-total</label>
            <div className="totals-value" id="cart-subtotal">
              71.97
            </div>
          </div>
          <div className="totals-item">
            <label>Taxe (5%)</label>
            <div className="totals-value" id="cart-tax">
              3.60
            </div>
          </div>
          <div className="totals-item">
            <label>Frais de port</label>
            <div className="totals-value" id="cart-shipping">
              15.00
            </div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Total</label>
            <div className="totals-value" id="cart-total">
              {total}
            </div>
          </div>
        </div>
        <button className="checkout">Régler</button>
      </div>
      {/* Padding bottom hack css to do cleaner one day */}
      <div className="cardVide"></div>
    </div>
  );
};
export default Client;
