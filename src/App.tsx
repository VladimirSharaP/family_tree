import React from 'react';
import './App.css';
import { Breed } from './Breed';
import { HumanType } from './Human';
import logo from './logo.svg';

const predki: Array<HumanType> = [
  {
    id: 'mother',
    avatar: logo,
    firstName: "Надежда",
    secondName: 'Михайловна',
    lastName: 'Шарапова',
    dataOfBirth: '13.10.1976'
  },
  {
    id: 'father',
    avatar: logo,
    firstName: 'Анатолий',
    secondName: 'Петрович',
    lastName: 'Шарапов',
    dataOfBirth: '23.03.1969'
  }
]

const teperki: Array<HumanType> = [
  {
    id: 'spouse',
    avatar: logo,
    firstName: 'Анастасия',
    secondName: 'Сергеевна',
    lastName: 'Шарапова',
    dataOfBirth: '05.05.1995'
  },
  {
    id: 'target',
    avatar: logo,
    firstName: 'Александр',
    secondName: 'Анатольевич',
    lastName: 'Шарапов',
    dataOfBirth: '12.03.1995'
  },
  {
    id: 'bro',
    avatar: logo,
    firstName: 'Владимир',
    secondName: 'Анатольевич',
    lastName: 'Шарапов',
    dataOfBirth: '17.02.1998'
  }
]

const childs: Array<HumanType> = [
  {
    id: 'child',
    avatar: logo,
    firstName: 'Ярослав',
    secondName: 'Александрович',
    lastName: 'Шарапов',
    dataOfBirth: '11.03.2021'
  }
]

const familyTree = [
    [...predki], [...teperki], [...childs]
]


function App() {
  return (
    <Breed familyTree = {familyTree}/>
  );
}

export default App;
