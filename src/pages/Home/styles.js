import styled, { keyframes } from 'styled-components';

import bgHome from '../../assets/bg-home.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 100%;
  animation: ${appearFromTop} 1s;

  h1 {
    color: #fff;
    font-size: 30px;
    text-transform: uppercase;
    margin: 50px 0;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 30%;
      height: 5px;
      bottom: -15px;
      left: 35%;

      background: white;
      display: block;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 50px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      transition: 300ms;

      &:hover {
        opacity: 0.5;
      }

      img {
        max-width: 100%;
      }
    }
  }
`;
