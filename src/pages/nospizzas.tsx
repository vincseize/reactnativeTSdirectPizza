import React from 'react';
import { useState } from 'react';
import { Component } from 'react';

import { Checkbox, Divider } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

import { InputNumber } from 'antd';
import './nospizzas.css';

import ImagesPizza1 from '../images/products/pizzas/pizza1.jpg';
import ImagesPizza2 from '../images/products/pizzas/pizza2.jpg';
import ImagesPizza3 from '../images/products/pizzas/pizza3.jpg';
import ImagesPizza4 from '../images/products/pizzas/pizza4.jpg';
import ImagesPizza5 from '../images/products/pizzas/pizza5.jpg';
import ImagesPizza6 from '../images/products/pizzas/pizza6.jpg';
import ImagesPizza7 from '../images/products/pizzas/pizza7.jpg';
import ImagesPizza8 from '../images/products/pizzas/pizza8.jpg';
import ImagesPizza9 from '../images/products/pizzas/pizza9.jpg';

const CheckboxGroup = Checkbox.Group;

const plainOptions = [' Promo ', ' Vegan ', ' Alergene '];
const defaultCheckedList = [''];

const Nospizzas = () => {
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const [isAllBoxShown, setIsAllBoxShown] = useState(true);

  const [isPromoBoxShown, setIsPromoBoxShown] = useState(true);
  const [isVeganBoxShown, setIsVeganBoxShown] = useState(true);
  const [isAlergeneBoxShown, setIsAlergeneBoxShown] = useState(true);

  // This function is triggered when the button is clicked
  const buttonHandler = () => {
    setIsPromoBoxShown(!isPromoBoxShown);
  };

  // This function is triggered when the checkbox changes
  const checkboxHandlerPromo = () => {
    setIsPromoBoxShown(!isPromoBoxShown);
  };

  const checkboxHandlerVegan = () => {
    setIsVeganBoxShown(!isVeganBoxShown);
  };

  const checkboxHandlerAler = () => {
    setIsAlergeneBoxShown(!isAlergeneBoxShown);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        padding: '25px',
        margin: '0px 0px 250px 0px',
      }}
    >
      <h1>Nos pizzas bio</h1>
      <div className="containerCheck">
        <div className="spanCheck">
          <input
            type="checkbox"
            checked={isVeganBoxShown}
            onChange={checkboxHandlerVegan}
          />
          <span className="spanCheck">
            {isVeganBoxShown ? ' Vegan ' : ' Vegan '}
          </span>
        </div>
        <div className="spanCheck">
          <input
            type="checkbox"
            checked={isPromoBoxShown}
            onChange={checkboxHandlerPromo}
          />
          <span className="spanCheck">
            {isPromoBoxShown ? ' Promo ' : ' Promo '}
          </span>
        </div>
        <div className="spanCheck">
          <input
            type="checkbox"
            checked={isAlergeneBoxShown}
            onChange={checkboxHandlerAler}
          />
          <span className="spanCheck">
            {isAlergeneBoxShown ? ' Alergène ' : ' Alergène '}
          </span>
        </div>
      </div>
      {/* <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Toutes&nbsp;&nbsp;&nbsp;
      </Checkbox>
      <Divider />
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      /> */}
      <main>
        <section className="cards">
          {isVeganBoxShown && (
            <div className="card">
              <div className="card__image-container">
                <img src={ImagesPizza1} />
              </div>
              <div className="card__content">
                <p className="card__title text--medium">Ananas - Cornichons</p>
                <div className="card__info">
                  <p className="text--medium">20 Min</p>
                  <p className="card__price text--medium">16 euros</p>
                </div>
              </div>
            </div>
          )}
          {isPromoBoxShown && (
            <div className="card">
              <div className="card__image-container">
                <img src={ImagesPizza2} />
              </div>
              <div className="card__content">
                <p className="card__title text--medium">4 Fromages</p>
                <div className="card__info">
                  <p className="text--medium">3 Heures</p>
                  <p className="card__price text--medium">56 euros</p>
                  <p className="card__price text--medium promo">Promo</p>
                </div>
              </div>
            </div>
          )}
          {isAlergeneBoxShown && (
            <div className="card">
              <div className="card__image-container">
                <img src={ImagesPizza3} />
              </div>
              <div className="card__content">
                <p className="card__title text--medium">
                  Haricot - Saumon - Thorium
                </p>
                <div className="card__info">
                  <p className="text--medium">28 Min</p>
                  <p className="card__price text--medium">31 euros</p>
                </div>
              </div>
            </div>
          )}
          {isPromoBoxShown && (
            <div className="card">
              <div className="card__image-container">
                <img src={ImagesPizza4} />
              </div>
              <div className="card__content">
                <p className="card__title text--medium">Epinards - Chocolat</p>
                <div className="card__info">
                  <p className="text--medium">22 Min</p>
                  <p className="card__price text--medium">54 euros</p>
                  <p className="card__price text--medium promo">Promo</p>
                </div>
              </div>
            </div>
          )}
          {isPromoBoxShown && (
            <div className="card">
              <div className="card__image-container">
                <img src={ImagesPizza5} />
              </div>
              <div className="card__content">
                <p className="card__title text--medium">
                  Here s the Title of an Awesome Course
                </p>
                <div className="card__info">
                  <p className="text--medium">10 Min</p>
                  <p className="card__price text--medium">6 euros</p>
                  <p className="card__price text--medium promo">Promo</p>
                </div>
              </div>
            </div>
          )}
          {isVeganBoxShown && (
            <div className="card">
              <div className="card__image-container">
                <img src={ImagesPizza6} />
              </div>
              <div className="card__content">
                <p className="card__title text--medium">
                  Artichaud - Confiture
                </p>
                <div className="card__info">
                  <p className="text--medium">3 Min</p>
                  <p className="card__price text--medium">17 euros</p>
                </div>
              </div>
            </div>
          )}
          {isPromoBoxShown && (
            <div className="card">
              <div className="card__image-container">
                <img src={ImagesPizza7} />
              </div>
              <div className="card__content">
                <p className="card__title text--medium">
                  Patates - Miettes de pain
                </p>
                <div className="card__info">
                  <p className="text--medium">40 Min</p>
                  <p className="card__price text--medium">116 euros</p>
                  <p className="card__price text--medium promo">Promo</p>
                </div>
              </div>
            </div>
          )}
          {isAlergeneBoxShown && (
            <div className="card">
              <div className="card__image-container">
                <img src={ImagesPizza8} />
              </div>
              <div className="card__content">
                <p className="card__title text--medium">
                  Algues de mer - Benzène
                </p>
                <div className="card__info">
                  <p className="text--medium">30 Min</p>
                  <p className="card__price text--medium">216 euros</p>
                </div>
              </div>
            </div>
          )}
          {isVeganBoxShown && (
            <div className="card">
              <div className="card__image-container">
                <img src={ImagesPizza9} />
              </div>
              <div className="card__content">
                <p className="card__title text--medium">Salade - Tomate</p>
                <div className="card__info">
                  <p className="text--medium">30 Min</p>
                  <p className="card__price text--medium">207 euros</p>
                </div>
              </div>
            </div>
          )}
          {/* Padding bottom hack css to do cleaner one day */}
          <div className="cardVide"></div>
        </section>
      </main>
    </div>
  );
};

export default Nospizzas;
