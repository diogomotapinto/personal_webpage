import React from "react";
import Cols from "../components/Cols/Cols";
import Container from "../components/Container/Container";
import Rows from "../components/Rows/Rows";
import MainLayout from "../layouts/MainLayout";

const a = () => {
  return (
    <>
      <MainLayout>
        <Container>
          <Rows>
            <Cols cols="2">hey</Cols>
            <Cols cols="2">hey</Cols>
            <Cols cols="2">hey</Cols>
            <Cols cols="2">hey</Cols>
          </Rows>
        </Container>
      </MainLayout>
    </>
  );
};

export default a;
