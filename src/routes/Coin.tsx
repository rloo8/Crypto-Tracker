import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 30px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface RouterState {
  state: {
    name: string;
  };
}

function Coin() {
  const [isLoading, setIsLoading] = useState(true);
  const { coinId } = useParams();

  // router v6부터 제네릭을 지원하지 않아서 쓰는 방법
  const { state } = useLocation() as RouterState;

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading"}</Title>
      </Header>
      {isLoading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
