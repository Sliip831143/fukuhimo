import React from 'react';
import styled from 'styled-components';

export default () => {

  return (
    <Contents>
      <About>
        <p>福路</p>
        <p>Probably, Web Developer.</p>
      </About>
      <Link>
        <a href="https://twitter.com/fukuhimo">
          <Icon src="/twitter.png" />
        </a>
        <a href="https://github.com/Sliip831143">
          <Icon src="/github.png" />
        </a>
        <a href="https://www.pixiv.net/users/3751055">
          <Icon src="/pixiv.png" />
        </a>
      </Link>
      <Qualification>
        <a href="https://github.com/gatsbyjs">
          <Icon src="gatsby.png" />
        </a>
        <a href="https://html5exam.jp/outline/lv1.html">
          <Icon src="htmlpro1.gif" />
        </a>
        <a href="https://html5exam.jp/outline/lv2.html">
          <Icon src="htmlpro2.gif" />
        </a>
      </Qualification>
    </Contents>
  )
};

const Contents = styled.div`
  font-size: 1vw;
  height: 100%;
  padding: 10% 0;
`;

const About = styled.div`
  > p {
    display: flex;
    justify-content: center;
    margin: 0;
    padding-bottom: 9vh;
    @media(max-width: 480px) {
      padding-bottom: 3vh;
    }
    &:first-child {
      padding-bottom: 0.5rem;
      font-weight: bold;
      font-size: 2vw;
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
`;
