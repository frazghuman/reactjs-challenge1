// src/store/actions/monsterActions.ts
// Import your MonsterModel type

import MonsterModel from "../../models/monster";

// Define action types
export const SELECT_MONSTER = 'SELECT_MONSTER';

// Define action creators
export const selectMonster = (monster: MonsterModel | null) => ({
  type: SELECT_MONSTER,
  payload: monster,
});

// Define action types
export const SELECT_COMPUTER_MONSTER = 'SELECT_COMPUTER_MONSTER';

// Define action creators
export const selectComputerMonster = (monster: MonsterModel | null) => ({
  type: SELECT_COMPUTER_MONSTER,
  payload: monster,
});
