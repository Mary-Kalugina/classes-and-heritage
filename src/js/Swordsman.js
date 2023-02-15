import Character from './app';

export default class Swordsman extends Character {
  constructor(health, level, name, type) {
    super(health, level, name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
