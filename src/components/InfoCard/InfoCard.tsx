import React, { useState } from 'react';
import { CardActionArea, CardContent, Typography, CardActions, DialogContent } from '@mui/material';
import { MyButton, MyCard, MyCardActions, MyCardContent } from './styles';
import { useSelector } from "react-redux"
import InfoCardEdit from '../InfoCardEdit';
// import { userSelectors } from "../../store/user/selectors";



interface Info {
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

interface InfoCardProps {
  info: Info;
  endpoint: string;
}


const InfoCard: React.FC<InfoCardProps> = ({ info, endpoint }: InfoCardProps) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  // const { authorities } = useSelector(userSelectors)


  const handleEditDialogOpen = () => {
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  return (
    <>
      <MyCard>
        <DialogContent>
          <Typography gutterBottom variant="h5" component="h2">
              {info.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {info.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <br />
              <b>Адрес:</b> {info.address}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Тел.:</b> {info.tel}
            </Typography>
            {info.link && (
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Сайт:</b> {info.link}
              </Typography>
            )}
        </DialogContent>
        <MyCardActions sx={{ padding: 2 }}>

          {/* {authorities.some(
            authority => authority.authority === "ROLE_ADMIN",
          ) && ( */}
              <MyButton size="small" variant="contained" color="primary" onClick={handleEditDialogOpen}>
                Редактировать
              </MyButton>
            {/* )} */}

        </MyCardActions>
      </MyCard>

      {/* Диалоговое окно редактирования */}
      <InfoCardEdit open={editDialogOpen} onClose={handleEditDialogClose} info={info} endpoint={endpoint} />
    </>
  )
};

export default InfoCard;
