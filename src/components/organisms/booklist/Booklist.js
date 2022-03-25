import React, { useEffect, useState } from 'react'
import { GetBooks } from '../../../api/GotApi';
import Book from '../../molecules/book/Book';
import Stack from '@mui/material/Stack';

export default function Booklist() {

    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState([])

    function getBooks() {
        GetBooks().then(response => {
            setLoading(false)
            setBooks(response.data)
        })
    }

    useEffect(() => {
        getBooks()
    }, [loading])
    

  return (
    <Stack spacing={2} direction="column">
        {books.map((book, key) => (
            <Book key={key} book={{...book, id: key + 1}}/>
        ))}
    </Stack>
  )
}
