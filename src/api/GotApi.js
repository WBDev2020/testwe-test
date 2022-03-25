import axios from 'axios';

export const GetBooks = () => {
    return axios.get('https://anapioficeandfire.com/api/books')
}

export const GetBook = (id) => {
    return axios.get('https://anapioficeandfire.com/api/books/' + id)
}

export const GetCharacters = () => {
    return axios.get('https://anapioficeandfire.com/api/characters/')
}

export const GetCharacter = async (url) => {
    return await axios.get(url)
}