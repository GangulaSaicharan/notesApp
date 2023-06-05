// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Head = styled.h1`
  font-weight: bold;
  font-size: 30px;
  font-family: 'Bree Serif';
  color: #4c63b6;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 90vw;
  box-shadow: 0px 0px 20px 2px #aab8c8;
`
export const InputElTitle = styled.input`
  background-color: transparent;
  border-width: 0px;
  outline: none;
  align-self: stretch;
  margin: 20px;
`
export const InputElDescription = styled.textarea`
  background-color: transparent;
  border-width: 0px;
  outline: none;
  align-self: stretch;
  margin: 20px;
`

export const Button = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  height: 30px;
  width: 100px;
  border-width: 0px;
  border-radius: 5px;
  align-self: flex-end;
`
export const Bot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  height: 120px;
  width: 120px;
  margin: 20px;
`
export const No = styled.h1`
  font-weight: bold;
  font-size: 20px;
  font-family: 'Roboto';
  color: #1e293b;
`
export const NoDesc = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: #475569;
`
export const List = styled.ul`
list-style:none ;
display:flex;
flex-direction:row;
align-self:flex-start;
margin:20px;
flex-wrap:wrap:
`
