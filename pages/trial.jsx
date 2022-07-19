import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Trial() {
  const [name, setName] = useState([]);
  const [allData, setAllData] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState();

  const handleAdd = () => {
    if (name.length !== 0) {
      setAllData((newData) => [...newData, name]);
      setName("");
    }
  };

  const handleDelete = (index) => {
    allData.splice(index, 1);
    setAllData([...allData]);
  };

  const handleEdit = (i) => {
    setName(allData[i]);
    setShow(true);
    setEditIndex(i);
  };
  const handleUpdate = () => {
    allData.splice(editIndex, 1, name);
    setAllData([...allData]);
    setShow(false);
    setName("");
  };

  return (
    <Wrapper>
      <TodoContainer>
        <Nav>Todo</Nav>
        <Header>
          <h3>CREATE A TODO ITEM</h3>
        </Header>

        <Container>
          <FormContainer>
          <label>Enter Todo</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter todo item"
            />
            {!show ? (
              <ButtonDiv onClick={handleAdd}>Add</ButtonDiv>
            ) : (
              <ButtonDiv onClick={handleUpdate}>Update</ButtonDiv>
            )}
          </FormContainer>
        </Container>
        <Base>
          {allData.map((val, i) => (
            <Cards>
              <FlexContainer>
                <p>{val}</p>
                <FlexDiv>
                  <EditButton className="edit" onClick={() => handleEdit(i)}>
                    Edit
                  </EditButton>
                  <EditButton
                    className="delete"
                    onClick={() => handleDelete(i)}
                  >
                    Delete
                  </EditButton>
                </FlexDiv>
              </FlexContainer>
            </Cards>
          ))}
        </Base>
      </TodoContainer>
    </Wrapper>
  );
}
export default Trial;

const Wrapper = styled.div``;

const TodoContainer = styled.div`
  background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);
  /* height: 100vh; */
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  & > h3 {
    color: white !important;
    font-size: 20px;
    font-weight: 800;
  }
`;

const FormContainer = styled.div`
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 400px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > input {
    width: 60%;
    border-radius: 10px;
    padding: 15px 15px;
    margin-top: 10px;
  }

  & > label {
    padding: 5px 15px;
    margin-top: 10px;
  }

  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;

const Base = styled.div`
  color: white;
  padding: 40px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Cards = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px 30px;
  width: 700px;
  color: black !important;
  margin-top: 20px;

  @media (max-width: 500px) {
    width: 350px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  gap: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonDiv = styled.button`
  background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);
  color: white;
  /* width: 200px; */
  padding: 10px 50px;
  border: 0;
  outline: none;
  margin-top: 50px;
  border-radius: 10px;
  cursor: pointer;
`;

const EditButton = styled.button`
  background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);
  color: white;
  width: 100px;
  height: 50px;
  padding: 5px 10px;
  border: 0;
  outline: none;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  text-align: center;
`;

const Nav = styled.div`
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  color: purple;
  font-weight: 800;
  font-size: 25px;
  font-style: italic;
  /* position: absolute; */
`;
