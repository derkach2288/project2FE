import React, { useState, MouseEvent } from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, TextField, Button, DialogActions } from '@mui/material';
import { instance } from '../../utils/axios';

interface Info {
  title: string;
  description: string;
  address: string;
  tel: string;
  link: string;
  status: number;
}

interface InfoCardAddProps {
  open: boolean;
  onClose: () => void;
  info: Info;
  endpoint: string;
}

const InfoCardAdd: React.FC<InfoCardAddProps> = ({ open, onClose, info, endpoint }) => {
  const [editedInfo, setEditedInfo] = useState<Info>({
    link: info.link,
    title: info.title,
    description: info.description,
    address: info.address,
    tel: info.tel,
    status: info.status,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedInfo(prevState => ({
      ...prevState,
      [name]: value !== null && value !== undefined ? value : ''
    }));
  };  

  const handleSubmit = async (e: MouseEvent<unknown>) => {
    e.preventDefault();
    try {
      await instance.post(`${endpoint}/admin`, editedInfo);
      console.log("User data updated successfully:", editedInfo);
      onClose();
      window.location.reload(); // Перезагрузка страницы
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <DialogTitle>Добавить информацию</DialogTitle>
      <DialogContent>

        <TextField
          fullWidth
          label="Заголовок"
          name="title"
          value={editedInfo.title || ''}
          onChange={handleInputChange}
          sx={{ marginBottom: '15px', marginTop: '15px' }}
        />
        <TextField
          fullWidth
          label="Описание"
          name="description"
          value={editedInfo.description || ''}
          onChange={handleInputChange}
          multiline
          rows={4}
          InputProps={{
            style: {
              overflowY: 'auto' // Добавление вертикальной прокрутки
            }
          }}
          sx={{ marginBottom: '15px' }}
        />
        <TextField
          fullWidth
          label="Адрес"
          name="address"
          value={editedInfo.address || ''}
          onChange={handleInputChange}
          sx={{ marginBottom: '15px' }}
        />
        <TextField
          fullWidth
          label="Телефон"
          name="tel"
          value={editedInfo.tel || ''}
          onChange={handleInputChange}
          sx={{ marginBottom: '15px' }}
        />
        <TextField
          fullWidth
          label="Ссылка"
          name="link"
          value={editedInfo.link || ''}
          onChange={handleInputChange}
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          fullWidth
          label="Статус"
          name="status"
          value={editedInfo.status}
          onChange={handleInputChange}
          sx={{ marginBottom: '10px' }}
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Сохранить
        </Button>
        <Button onClick={onClose} variant="contained" color="secondary">
          Отмена
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoCardAdd;