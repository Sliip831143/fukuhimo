import React, { useState } from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import ToggleButton from '@material-ui/lab/ToggleButton';
import styled from 'styled-components';

export default function ThemeChangeButton() {
  const [selected, setSelected] = useState(false);

  return (
    <StyledToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      {selected ? <LightBulbIcon /> : <DarkBulbIcon />}
    </StyledToggleButton>
  );
}

const StyledToggleButton = styled(ToggleButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  background-color: #FFF;
  border-radius: 0 !important;
  &:hover {
    background-color: #F5F5F5;
  }
  &.Mui-selected {
    background-color: #FFF !important;
  }
`;

const LightBulbIcon = styled(EmojiObjectsTwoToneIcon)`

`;

const DarkBulbIcon = styled(EmojiObjectsIcon)`
  color: rgba(0, 0, 0, 0.54);
`;
