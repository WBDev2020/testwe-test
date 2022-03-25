import React, { useEffect, useState } from 'react'

import Pagination from '@mui/material/Pagination';

import ClipLoader from "react-spinners/ClipLoader";
import CharacterItem from '../../molecules/character/CharacterItem';
import { GetCharacter } from '../../../api/GotApi';

export default function CharactersList({characters}) {
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [currentCharacters, setCurrentCharacters] = useState([]);

    const handleChange = (event, value) => {
        setOffset((value - 1) * 10);
        setPage(value);
        getAllChar((value - 1) * 10)
    };

    async function getAllChar(offset) {
        setLoading(true)
        let charactersArray = []
        for (let index = offset; index < offset + 10; index++) {
            const element = characters[index];
            if (element) {
                await GetCharacter(element).then(res => charactersArray.push(res.data))
            }
        }
        setCurrentCharacters(charactersArray)
        console.log(charactersArray);
        setLoading(false)
    }

    useEffect(() => {
        getAllChar(offset)
    }, [])
    

    return (
        <>
            <p>Characters list</p>

            {loading ? 
                <ClipLoader color='white' loading={loading} size={10} /> 
                : 
                currentCharacters.map((character, key) => <CharacterItem key={key} character={character} />)
            }

            <Pagination disabled={loading} count={Math.ceil(characters.length / 10)} page={page} color="primary" onChange={handleChange} />
        </>
    )
}
