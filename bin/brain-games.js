#!/usr/bin/env node
import name from '../src/cli.js';
import evenGame from '../src/games/even.js';

console.log(`Hello, ${name}!`);
evenGame(name);
