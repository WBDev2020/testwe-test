import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Book({book}) {

  const navigate = useNavigate();

  function openBook(id) {
    navigate('/book/' + book.id)
  }

  return (
    <Button variant="outlined" onClick={() => openBook(book.id)}>{book.name}</Button>
  )
}
