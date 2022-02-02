import MainContainer from "Components/MainContainer";
import GlobalStyle  from "style/GlobalStyle";
import GlobalFont from "style/GlobalFont";
import styled from "styled-components";

function App() {
  return <AppContainer className="App">
    <GlobalStyle/>
    <GlobalFont/>
    <MainContainer/>
  </AppContainer>;
}

const AppContainer = styled.div`
padding:50px 0;
`

export default App;
