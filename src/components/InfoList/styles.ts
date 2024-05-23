import styled from "styled-components";
import { colors } from 'styles/colors';

export const MainLowerPartContainer = styled.section`
  width: 100%;
  max-width: 1400px;
  padding: 0 15px;
  margin: 0 auto 20px;
`;

export const MainLowerPartFlex = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const MainLowerPartItem = styled.div`
  width: 25%;
  padding: 20px 10px;
  min-height: 100%;
`;

export const MainLowerPartTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center
`;