import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetBook } from '../api/GotApi'
import CharactersList from '../components/organisms/characterslist/CharactersList'
import ClipLoader from "react-spinners/ClipLoader";
import Moment from 'moment';

export default function BookPage() {

    const [loading, setLoading] = useState(true)
    const [book, setBook] = useState(null)

    const { id } = useParams()

    function getBook() {
        GetBook(id).then(response => {
            setLoading(false)
            setBook(response.data)
        })
    }    

    useEffect(() => {
        getBook()
    }, [])


    if (loading) {
        return <ClipLoader color='white' loading={loading} size={50} />
    }

    return (
        <div>
            {book &&
                <>
                    <p style={{fontWeight: 'bold'}}>{book.name} <span style={{fontSize: 14}}>({book.numberOfPages} pages)</span></p>
                    <p>Written by :</p>{book.authors.map((author => <p style={{fontWeight: 'bold'}}>{author}</p>))}
                    <p style={{fontSize: 18}}>Released the {Moment(book.released).format('d MMMM y')}</p>
                    <CharactersList characters={book.characters} />
                </>
            }
        </div>
    )
}
