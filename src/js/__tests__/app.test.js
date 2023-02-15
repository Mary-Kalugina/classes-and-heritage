/* eslint-disable no-unused-vars */

import Daemon from '../Daemon';
import Zombie from '../Zombie';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Undead from '../Undead';
import Bowerman from '../Bowerman';

test('test Bowerman', () => {
  const tobe = {
    name: 'dasha',
    type: 'Bowerman',
    defence: 25,
    attack: 25,
    level: 1,
    health: 100,
  };
  const result = new Bowerman('dasha', 'Bowerman');
  expect(result).toEqual(tobe);
});

test('test Daemon', () => {
  const tobe = {
    name: 'dasha',
    type: 'Daemon',
    defence: 40,
    attack: 10,
    level: 1,
    health: 100,
  };
  const result = new Daemon('dasha', 'Daemon');
  expect(result).toEqual(tobe);
});

test('test Zombie', () => {
  const tobe = {
    name: 'dasha',
    type: 'Zombie',
    defence: 10,
    attack: 40,
    level: 1,
    health: 100,
  };
  const result = new Zombie('dasha', 'Zombie');
  expect(result).toEqual(tobe);
});

test('test Swordsman', () => {
  const tobe = {
    name: 'dasha',
    type: 'Swordsman',
    defence: 10,
    attack: 40,
    level: 1,
    health: 100,
  };
  const result = new Swordsman('dasha', 'Swordsman');
  expect(result).toEqual(tobe);
});

test('test Magician', () => {
  const tobe = {
    name: 'dasha',
    type: 'Magician',
    defence: 40,
    attack: 10,
    level: 1,
    health: 100,
  };
  const result = new Magician('dasha', 'Magician');
  expect(result).toEqual(tobe);
});

test('test Undead', () => {
  const tobe = {
    name: 'dasha',
    type: 'Undead',
    defence: 25,
    attack: 25,
    level: 1,
    health: 100,
  };
  const result = new Undead('dasha', 'Undead');
  expect(result).toEqual(tobe);
});

test('test error type', () => {
  expect(() => {
    const result = new Undead('dasha', 'Und');
  }).toThrowError('Wrong type');
});

test('test error name', () => {
  expect(() => {
    const result = new Undead('d', 'Undead');
  }).toThrowError('Wrong name');
});

test('test error name', () => {
  expect(() => {
    const result = new Undead('ddddddddddddd', 'Undead');
  }).toThrowError('Wrong name');
});
