import React, { useState } from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import ToggleButton from '@material-ui/lab/ToggleButton';
import styled from 'styled-components';

const App = ({ children }: { children?: any }) => {
  const [theme, setTheme] = useState('');
  let darkModeOn;

  return (
    <StyledMain className={theme}>
      <StyledToggleButton
        value="check"
        theme={theme}
        onChange={() => {
          setTheme((window.matchMedia('(prefers-color-scheme: dark)').matches === false &&
            theme === '' || theme === 'light') ? 'dark' : 'light'
          );
        }}
      >
        {typeof window !== 'undefined' &&
          (darkModeOn = window.matchMedia('(prefers-color-scheme: dark)').matches,
            theme === '' ? (darkModeOn ? <DarkBulbIcon /> : <LightBulbIcon />) :
              (theme === 'light' ? <LightBulbIcon /> : <DarkBulbIcon />)
          )
        }
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
  @media (prefers-color-scheme: dark) {
    background-color: #364156;
  }
  &.light {
    background-color: #FBCC44 !important;
  }
  &.dark {
    background-color: #364156 !important;
  }
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
