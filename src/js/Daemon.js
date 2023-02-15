import Character from './app';

export default class Daemon extends Character {
  constructor(health, level, name, type) {
    super(health, level, name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
