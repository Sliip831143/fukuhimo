import App from '../components/pages/App';
import styled from 'styled-components';

const jpText = [['福', '路'], ['美', '穂', '子', 'の'], ['ヒ', 'モ', 'に'], ['な', 'り', 'た', 'い']];
// const enText = [['I WANT'], ['TO BE A MAN'], ['KEPT BY'], ['MIHOKO FUKUJI']];
// const zhText = [['我', '想', '成', '为'], ['福', '路'], ['美', '穂', '子', '的'], ['皮', '条', '客', '男', '人']];

export default () => (
  <App>
    <Area>
      <Nene src="/nene.png" />
      <Box>
        <div>
          <div>
            {Array(4).fill(null).map((n, i) => {
              return (<StyledP key={i}>
                {jpText[i].map((t, i) => {return <span key={i}>{t}</span>})}
              </StyledP>)
            })}
          </div>
        </div>
      </Box>
      <Hifumi src="/hifumi.png" />
    </Area>
  </App>
);

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
    width: 50%;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      width: 60%;
    }
  }
`;

const StyledP = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 3vw;
  font-weight: bold;
  border-bottom: 5px dotted #DCDCDC;
  @media(max-width: 480px) {
    font-size: 4vw;
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
