import styled from 'styled-components'

export const ModalContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: 7px;
    box-shadow: 0 0 32px; rgba(0,0,0,0.5);
    padding: 40px;
    width: 400px;
    font-size: 26px;
`;
export const Header = styled.h3`
    color: #333333;
    font-size: 35px;
    line-height: 1em;
    font-weight: 300;
    margin: 5px 0 10px;
    text-align: center;
    `
export const Message = styled.p`
    color: #aaa;
    font-size: 15px;
    font-weight: 500;
    margin: 0 0 36px;
    text-align: center;
    `

export const Warn = styled.p`
  color: #e02f2f;
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 36px;
  text-align: center;
`

export const CloseBtn = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #c8c8c8;
  border-radius: 50%;
  cursor: pointer;
  top: -20px;
  left: calc(100% - 20px);
  & > *{
    opacity: 1;
  }
  
  &:hover > * {
    opacity: 0.4;
  }
    `

export const LoginForm = styled.form`
  color: #333333;
  text-align: center;
`;

export const InputLogin = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: 10px;
  outline: 0;
  font-family: inherit;
  font-size: 0.95em;
  border-radius: 7px;
`;

export const SubmitLogin = styled.button`
  display: inline-block;
  padding: 10px 30px;
  background: #fecc01;
  color: #3e3e3e;
  border-radius: 5px;
  border: solid #fff 1px;
  font-family: inherit;
  font-size: 0.95em;
  cursor: pointer;
`;

export const InputTxt = styled.p`
    color: #aaa;
    font-size: 20px;
    font-weight: 500;
    margin: 0 0 36px;
    text-align: center;
    `

export const CloseX = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #323232;
  
  &:before,
  &:after{
    position: absolute;
    left: 19px;
    top: 10px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #333;
  }
  
  &:before{
    transform: rotate(45deg);
  }
  
  &:after{
    transform: rotate(-45deg)
  }
    `