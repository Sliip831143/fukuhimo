import React, { useState } from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import ToggleButton from '@material-ui/lab/ToggleButton';
import styled from 'styled-components';

const App = ({ children }: { children?: any }) => {
  const [selected, setSelected] = useState(
    typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : true
  );
  const [nativeDarkModeOn, setNativeDarkModeOn] = useState(false);

  return (
    <StyledMain style={{ backgroundColor: `${(typeof window !== 'undefined' ?
      (nativeDarkModeOn ? nativeDarkModeOn : window.matchMedia('(prefers-color-scheme: dark)').matches) : false
    ) && selected ? '#364156' : '#FBCC44'}` }}>
      <StyledToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
          if(typeof window !== 'undefined' && nativeDarkModeOn === false) {
            setNativeDarkModeOn(true)
          }
        }}
      >
        {selected ? <DarkBulbIcon /> : <LightBulbIcon />}
      </StyledToggleButton>
      {children}
    </StyledMain>
  );
}

export default App;

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  background-color: #FBCC44;
`;

const StyledToggleButton = styled(ToggleButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  background-color: #FFF;
  border-radius: 0 !important;
  z-index: 1;
  &:hover {
    background-color: #F5F5F5;
  }
  &.Mui-selected {
    background-color: #FFF !important;
  }
`;

const LightBulbIcon = styled(EmojiObjectsTwoToneIcon)`
  color: rgba(0, 0, 0, 0.54);
`;

const DarkBulbIcon = styled(EmojiObjectsIcon)`
  color: rgba(0, 0, 0, 0.54);
`;
