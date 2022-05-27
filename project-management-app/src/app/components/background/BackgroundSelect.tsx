import { useState } from 'react';

const BackgroundSelect = () => {
  const BACKGROUND_IMG = [
    {
      value: 1,
      label: 'geometry',
    },
    {
      value: 2,
      label: 'bubbles',
    },
    {
      value: 3,
      label: 'fox',
    },
    {
      value: 4,
      label: 'animal',
    },
    {
      value: 5,
      label: 'nature',
    },
  ];

  const [background, setBackground] = useState('');

  const changeBackground = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBackground(e.target.value);
  };

  return (
    <div>
      <select onChange={changeBackground}>
        <option data-testid="geometry" value="geometry">
          geometry
        </option>
        <option value="bubbles">bubbles</option>
        <option value="fox">fox</option>
      </select>
    </div>
  );
};

export default BackgroundSelect;
