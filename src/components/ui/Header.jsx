import React from "react";
import styled from "styled-components";
import "./곰돌이 푸.png";

const Header = () => {
  return (
    <div>
      <StContainer>
        <div>My Todo List</div>
        <div>React</div>
      </StContainer>
      <div>
        <img
          src={require("./곰돌이 푸.png")}
          width="1200"
          height="300"
          alt="testA"
        />
      </div>
    </div>
  );
};
export default Header;

const StContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px 10px 0 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: teal;
  font-size: large;
  font-weight: 20px;
  color: white;
`;
