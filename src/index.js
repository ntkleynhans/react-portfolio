import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log('I am ', this.name, 'and I am ', this.age, 'years old');
  }
}

const animal = new Animal('Simba', 3);
animal.speak();

class Lion extends Animal {
  constructor(name, age, furColor, speed) {
    super(name, age);
    this.furColor = furColor;
    this.speed = speed;
  }
  roar() {
    console.log('ROAR!!! I have ', this.furColor, 'and I run this fast', this.speed);
  }
}

const lion = new Lion('Mufasa', 20, 'golden', 25);
lion.speak();
lion.roar();
