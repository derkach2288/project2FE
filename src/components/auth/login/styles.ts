import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Auth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 30px 0;
`

export const Form = styled.form`
    width: 100%;
    max-width: 80%;
`

export const IncitingText = styled(NavLink)`
    color: blue;
    font-weight: 600;
    display: inline-block;
    margin-left: 15px;
    &:hover {
        cursor: pointer;

    }
`