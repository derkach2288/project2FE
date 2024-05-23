import { v4 as uuidv4 } from "uuid"
import { Button } from '@mui/material';
import { useState } from 'react';
import { MainLowerPartFlex, MainLowerPartItem } from "./styles";
// import { useSelector } from "react-redux"
// import { userSelectors } from "../../store/user/selectors";
import InfoCardAdd from "../InfoCardAdd";
import InfoCard from "../InfoCard";



export interface InfoProps {
  id: number;
  title: string;
  description: string;
  address: string;
  tel: string;
  link: string;
  status: number;
  city: {
    id: number;
    name: string;
  };
}

export interface InfoListProps {
  infoList: InfoProps[];
  endpoint: string
}

function InfoList({ infoList, endpoint }: InfoListProps) {
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  // const { authorities } = useSelector(userSelectors)
  
  const handleAddDialogOpen = () => {
    setAddDialogOpen(true);
  };

  const handleAddDialogClose = () => {
    setAddDialogOpen(false);
  };

  return (
    <>
      {/* {authorities.some(authority => authority.authority === "ROLE_ADMIN") && ( */}
        <Button
          onClick={handleAddDialogOpen}
          variant="contained"
          color="primary"
          sx={{ marginBottom: "15px" }} // Добавляем отступ снизу
        >
          Добавить
        </Button>
      {/* )} */}

      <MainLowerPartFlex >
        {addDialogOpen && (
          <InfoCardAdd
            open={addDialogOpen}
            onClose={handleAddDialogClose}
            info={{
              title: "",
              description: "",
              address: "",
              tel: "",
              link: "",
              status: 0,
            }}
            endpoint={endpoint}
          />
        )}

        {infoList.map(info => (
          <MainLowerPartItem key={uuidv4()}>
            <InfoCard info={info} endpoint={endpoint} />
          </MainLowerPartItem>
        ))}
      </MainLowerPartFlex>
    </>
  )
};

export default InfoList;