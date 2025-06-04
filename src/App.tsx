import React from "react";
import styled from "styled-components";
import FAQ from "./components/FAQ/FAQ";

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <FAQ />
    </AppContainer>
  );
}

export default App;
