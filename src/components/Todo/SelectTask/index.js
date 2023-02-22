import React from 'react';
import { MODE } from '../modeConstants';
import { nanoid } from 'nanoid';

const SelectTask = (props) => {
  const { mode, handlerChange } = props;
  return (
    <select value={mode} onChange={handlerChange}>
      {Object.values(MODE).map((valueObj) => { return <option value={valueObj} key={nanoid()}>{valueObj}</option> })}
    </select>
  );
}

export default SelectTask;
