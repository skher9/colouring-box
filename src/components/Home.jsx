import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoxContainer = styled.div`
  margin-top: 100px;
  height: 100px;
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const Box = styled.button`
  border: 1px solid;
  height: 100px;
  width: 100px;
  background-color: transparent;
`;

const Header = styled.h1``;

const Home = () => {
  const [place, setPlace] = useState(0);
  const [boxArray, setBoxArray] = useState([
    { isColored: false, position: null },
    { isColored: false, position: null },
    { isColored: false, position: null },
    { isColored: false, position: null },
    { isColored: false, position: null },
    { isColored: false, position: null },
  ]);

  const handleBoxClick = (e, index) => {
    if (place === 5) {
      console.log(index);
      const newArray = [...boxArray];
      newArray[index].isColored = true;
      newArray[index].position = place;
      setPlace(place + 1);
      setBoxArray(newArray);
      resetButton();
    } else {
      console.log(index);
      const newArray = [...boxArray];
      newArray[index].isColored = true;
      newArray[index].position = place;
      setPlace(place + 1);
      setBoxArray(newArray);
    }
  };

  const resetButton = () => {
    console.log("reset Called");
    let count = 0;

    const intervalId = setInterval(() => {
      const newArray = [...boxArray];
      newArray.map((ele) => {
        if (ele.position === count) {
          ele.isColored = false;
          ele.position = null;
        }
      });
      setBoxArray(newArray);

      count++;

      if (count === 6) {
        setPlace(0);
        clearInterval(intervalId);
      }
    }, 2000);
  };

  return (
    <Container>
      <Header>Color Blocks</Header>
      <BoxContainer>
        {boxArray.map((ele, index) => {
          return (
            <Box
              style={{ backgroundColor: ele.isColored ? "green" : "initial" }}
              onClick={(e) => handleBoxClick(e, index)}
            ></Box>
          );
        })}
      </BoxContainer>
    </Container>
  );
};

export default Home;
