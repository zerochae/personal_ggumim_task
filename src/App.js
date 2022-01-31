import MainContainer from "Components/MainContainer";
import { GlobalStyle } from "style";
import styled from "styled-components";

function App() {
  return <AppContainer className="App">
    <GlobalStyle/>
    <MainContainer/>
  </AppContainer>;
}

const AppContainer = styled.div`
padding:50px 0;
`

export default App;
