import Character from './app';

export default class Bowerman extends Character {
  constructor(health, level, name, type) {
    super(health, level, name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
