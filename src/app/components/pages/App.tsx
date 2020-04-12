import styled from 'styled-components';

const App = ({ children }: { children?: any }) => (
  <StyledMain>
    {children}
  </StyledMain>
)

export default App;

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
`;
