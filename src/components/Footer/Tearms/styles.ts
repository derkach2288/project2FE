import styled from "styled-components";
import { Grid, Card } from '@mui/material';

export const MainLowerPartContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;

`;
export const MainLowerPartFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-start;
`;

export const MainLowerPartItem = styled.div({
  width: 'calc(25% - 20px)', // Adjusting for margin
  margin: '10px',
});

export const InfoCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const TermsOUcontainer = styled.div`
    width: 80%;
    margin: 30px auto;
`

export const TermsHeader = styled.h1`
  font-family: 'Montserrat';
  margin-bottom: 25px;
  text-align: center;
`
export const TermsSubHeader = styled.h2`
  font-family: 'Montserrat';
  margin-bottom: 10px;
`

export const TermsText = styled.p`
  font-family: 'Montserrat';
  font-size: 17px;
  margin-bottom: 15px;
`
