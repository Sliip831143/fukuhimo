import React from 'react';
import styled from 'styled-components';

const name = ['福路', '福路', 'FUKUJI'];
const job = ['Probably, Web Developer.', '也许吧, 网页开发人员。', 'Probably, Web Developer.'];

export default (langIdx) => {

  return (
    <Contents>
      <About>
        <div>
          <span>{name[langIdx['langIdx']]}</span>
        </div>
        <div>
          <span>{job[langIdx['langIdx']]}</span>
        </div>
      </About>
      <Link>
        <a href="https://twitter.com/fukuhimo" target="_blank">
          <Icon src="/twitter.png" />
        </a>
        <a href="https://github.com/Sliip831143" target="_blank">
          <Icon src="/github.png" />
        </a>
        <a href="https://www.pixiv.net/users/3751055" target="_blank">
          <Icon src="/pixiv.png" />
        </a>
      </Link>
      <Qualification>
        <a href="https://github.com/gatsbyjs" target="_blank">
          <Icon src="gatsby.png" />
        </a>
        <a href="https://html5exam.jp/outline/lv1.html" target="_blank">
          <Icon src="htmlpro1.gif" />
        </a>
        <a href="https://html5exam.jp/outline/lv2.html" target="_blank">
          <Icon src="htmlpro2.gif" />
        </a>
      </Qualification>
    </Contents>
  )
};

const Contents = styled.div`
  height: 100%;
  padding: 10% 0;
`;

const About = styled.div`
  font-size: 1.5vw;
  > div {
    display: flex;
    justify-content: center;
    margin: 0;
    padding-bottom: 9vh;
    > span:first-child {
      border-bottom: 5px dotted #DCDCDC;
    }
    @media(max-width: 480px) {
      padding-bottom: 3vh;
    }
    &:first-child {
      padding-bottom: 0.5rem;
      font-weight: bold;
      font-size: 3vw;
      @media(max-width: 480px) {
        padding-bottom: 0.25rem;
      }
    }
  }
`;

const Link = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20%;
  padding-bottom: 6vh;
  @media(max-width: 480px) {
    padding-bottom: 3vh;
  }
  > a {
    display: contents;
  }
`;

const Qualification = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20%;
  > a {
    display: contents;
  }
`;

const Icon = styled.img`
  width: 20%;
  height: 20%;
`;
