import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import App from '../components/pages/App';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TranslateIcon from '@material-ui/icons/Translate';

const language = ['日本語', '中文', 'English'];
const titleText = [
  [['福', '路'], ['美', '穂', '子', 'の'], ['ヒ', 'モ', 'に'], ['な', 'り', 'た', 'い']],
  [['我', '想', '成', '为'], ['福', '路'], ['美', '穂', '子', '的'], ['皮', '条', '客', '男', '人']],
  [['I WANT'], ['TO BE A MAN'], ['KEPT BY'], ['MIHOKO FUKUJI']]
];

export default () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [langIdx, setLangIdx] = useState(0);
  const [wrapPos, setWrapPos] = useState({ touchX: 0, moveX: 0, startPos: 0, touch: false });

  const dragStart = e => {
    setWrapPos({...wrapPos, touchX: e.clientX, touch: true });
  }
  const dragging = e => {
    if(!wrapPos.touch || e.clientX === wrapPos.touchX) return;
    if(e.clientX > wrapPos.touchX) {
      if(wrapPos.moveX === 0 || (-200 + e.clientX - wrapPos.touchX) >= 0) return;
      setWrapPos({ ...wrapPos, moveX: -200 + e.clientX - wrapPos.touchX });
    } else {
      if(wrapPos.moveX === -200 || (e.clientX - wrapPos.touchX) <= -200) return;
      setWrapPos({ ...wrapPos, moveX: e.clientX - wrapPos.touchX });
    }
  }
  const droped = e => {
    if(!wrapPos.touch || e.clientX === wrapPos.touchX) return;
    if(wrapPos.touchX > e.clientX) {
      setWrapPos({ moveX: -200, touchX: 0, startPos: 0, touch: false });
    } else {
      setWrapPos({ moveX: 0, touchX: 0, startPos: 0, touch: false });
    }
  }

  const swipeStart = e => {
    if(!e.touches || e.touches[0].clientX === wrapPos.touchX) return;
    setWrapPos({...wrapPos, touchX: e.touches[0].clientX, startPos: e.touches[0].clientX, touch: true });
  }
  const swipeEnd = e => {
    if(!wrapPos.touch || !e.touches || wrapPos.startPos === e.touches[0].clientX) return;
    if(e.touches[0].clientX > wrapPos.touchX) {
      if(wrapPos.moveX === 0 || (-200 + e.touches[0].clientX - wrapPos.touchX) >= 0) return;
      setWrapPos({ moveX: 0, touchX: 0, startPos: 0, touch: false });
    } else {
      if(wrapPos.moveX === -200 || (e.touches[0].clientX - wrapPos.touchX) <= -200) return;
      setWrapPos({ moveX: -200, touchX: 0, startPos: 0, touch: false });
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e, i) => {
    {i !== 'backdropClick' && setLangIdx(i)};
    setAnchorEl(null);
  };

  const useStyles = makeStyles({
    paper: {
      borderRadius: 0,
      '& > ul': {
        display: 'flex',
        flexDirection: 'column'
      }
    },
    list: {
      '& > li': {
        fontSize: '0.85rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.54)',
        padding: '0.5rem 1.5rem'
      }
    }
  });
  const classes = useStyles();

  return (
    <App>
      <Area>
      <TranslateButton onClick={handleClick}>
        <TranslateIcon style={{ fontSize: '1.2rem' }} />
      </TranslateButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          classes={{
            paper: classes.paper,
            list: classes.list,
          }}
        >
          {language.map((d, i) =>
            <MenuItem
              key={d}
              onClick={(e) => handleClose(e, i)}
            >
              {d}
            </MenuItem>
          )}
        </Menu>
        <Nene src="/nene.png" />
        <Box>
          <div>
            <Wrap
              marginLeft={wrapPos.moveX}
              onMouseDown={e => dragStart(e)}
              onMouseMove={e => dragging(e)}
              onMouseLeave={e => droped(e)}
              onMouseUp={e => droped(e)}
              onTouchStart={e => swipeStart(e)}
              onTouchMove={e => swipeEnd(e)}
            >
              <TitleBox>
                <div style={{ width: `${langIdx === 2 ? '70%' : '60%'}` }}>
                  {Array(4).fill(null).map((n, i) => {
                    return (
                      <StyledP
                        key={i}
                        style={{ justifyContent: `${langIdx === 2 ? 'center' : 'space-between'}` }}
                      >
                        {titleText[langIdx][i].map((t, i) => {return <span key={i}>{t}</span>})}
                      </StyledP>
                    )
                  })}
                </div>
              </TitleBox>
              <MenuBox>
              </MenuBox>
            </Wrap>
          </div>
        </Box>
        <Hifumi src="/hifumi.png" />
      </Area>
    </App>
  );
};

const Area = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  @media(max-width: 480px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 480px) {
    height: 70%;
  }
  > div {
    display: flex;
    justify-content: center;
    width: 50%;
    overflow: hidden;
  }
`;

const Wrap = styled.div<{ marginLeft: number }>`
  width: 100%;
  display: flex;
  margin-left: ${({ marginLeft }) => marginLeft }%;
  cursor: grab;
`;

const TitleBox = styled.div`
  min-width: 100%;
  background-color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuBox = styled.div`
  min-width: 100%;
  min-height: 100%;
  background-color: #FFF;
`;

const StyledP = styled.p`
  display: flex;
  font-size: 3vw;
  font-weight: bold;
  border-bottom: 5px dotted #DCDCDC;
  @media(max-width: 480px) {
    font-size: 4vw;
  }
`;

const TranslateButton = styled(Button) `
  position: absolute;
  top: 1rem;
  right: 3.25rem;
  width: 2rem;
  height: 2rem;
  background-color: #FFF;
  border-radius: 0;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0;
  min-width: initial;
  &:hover {
    background-color: #F5F5F5;
  }
`;

const Nene = styled.img`
  height: 100%;
  @media(max-width: 480px) {
    display: none;
  }
`;

const Hifumi = styled.img`
  display: none;
  @media(max-width: 480px) {
    display: block;
    position: absolute;
    width: 50%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
