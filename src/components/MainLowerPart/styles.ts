import styled from "styled-components";

export const MainLowerPartContainer = styled.section`
  width: 100%;
  height: 100vh; /* 100% от высоты видимой области страницы */
  max-width: 1400px;
  padding: 0 15px;
  margin: 0 auto 20px;
  overflow-y: auto; /* добавляет вертикальную прокрутку, если контент превышает высоту */
`;

export const MainLowerPartFlex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const MainLowerPartTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center
`;