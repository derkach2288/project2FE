import React, { useState, MouseEvent } from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, TextField, Button, DialogActions } from '@mui/material';
import { instance } from '../../utils/axios';

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
  }
}

interface InfoEditDialogProps {
  open: boolean;
  onClose: () => void;
  info: Info;
  endpoint: string
}

function InfoCardEdit({ open, onClose, info, endpoint }: InfoEditDialogProps) {
  const [editedInfo, setEditedInfo] = useState<Info>({
    id: info.id,
    link: info.link,
    title: info.title,
    description: info.description,
    address: info.address,
    tel: info.tel,
    status: info.status,
    city: info.city
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedInfo(prevState => ({
      ...prevState,
      [name]: value !== null && value !== undefined ? value : ''
    }));
  };  

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await instance.put(`${endpoint}/admin`, editedInfo);
      console.log("User data updated successfully:", editedInfo);
      onClose()
      window.location.reload(); // Перезагрузка страницы
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await instance.delete(`${endpoint}/admin/${editedInfo.id}`);
      console.log("User data deleted successfully:", editedInfo.id);
      onClose()
      window.location.reload(); // Перезагрузка страницы
    } catch (error) {
      console.error("Error deleting user data:", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <DialogTitle>Редактировать информацию</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Id"
          name="id"
          value={editedInfo.id}
          onChange={handleInputChange}
          sx={{ marginBottom: '15px', marginTop: '15px' }}
        />

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
        <Button onClick={handleDelete} variant="contained" color="error">
          Удалить
        </Button>
        <Button onClick={onClose} variant="contained" color="secondary">
          Отмена
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoCardEdit;
