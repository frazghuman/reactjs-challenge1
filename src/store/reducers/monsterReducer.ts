// src/store/reducers/monsterReducer.ts

import { Reducer } from 'redux';
import MonsterModel from '../../models/monster'; // Import your MonsterModel type
import { SELECT_COMPUTER_MONSTER, SELECT_MONSTER } from '../actions/monsterActions';

interface MonsterState {
  selectedMonster: MonsterModel | null;
  selectedComputerMonster: MonsterModel | null;
}

const initialState: MonsterState = {
  selectedMonster: null,
  selectedComputerMonster: null
};

const monsterReducer: Reducer<MonsterState> = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MONSTER:
      return { ...state, selectedMonster: action.payload };
    case SELECT_COMPUTER_MONSTER:
      return { ...state, selectedComputerMonster: action.payload };
    default:
      return state;
  }
};

export default monsterReducer;
