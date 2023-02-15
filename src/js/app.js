export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length > 1 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Wrong name');
    }
    if (type === 'Bowerman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie') {
      this.type = type;
    } else {
      throw new Error('Wrong type');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Dead');
    }
    this.level += 1;
    this.defence += (this.defence * 0.2);
    this.attack += (this.attack * 0.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
