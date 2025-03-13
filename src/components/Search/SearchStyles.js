import styled from "styled-components";

export const Container = styled.div`
  width: 990px;
  height: 132px;
  border-radius: 1000px;
  position: relative;
  top: -66px;
  background-color: white;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 30px 0px #0d0b8612;
`;

export const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const FirstSelector = styled.input`
  width: 490px;
  height: 50px;
  border-radius: 500px;
  border: 2px solid #edf0ff;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: capitalize;
  padding-left: 20px;
  color: #1c274c;
  pointer-events: none;
  user-select: none;
  background-color: rgba(247, 247, 247, 0.6);
`;

export const SecondSelector = styled.div`
  width: 340px;
  height: 50px;
  border-radius: 500px;
  border: 2px solid #edf0ff;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: capitalize;
  padding-left: 20px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-right: 50px;
  background-color: rgba(247, 247, 247, 0.6);
  color: rgba(28, 39, 76, 0.6); 
  pointer-events: none;
  user-select: none;

  span {
    display: inline-block;
    opacity: 0.6;
  }
`;

export const CircleIconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
  margin-left: 15px;
`;

export const DropdownIconContainer = styled.div`
  position: absolute;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;
