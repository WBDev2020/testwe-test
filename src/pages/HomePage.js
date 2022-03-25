import React from 'react'
import Booklist from '../components/organisms/booklist/Booklist';
import logo from '../Logo_Game_of_Thrones.png';

export default function Homepage() {
  return (
    <div>
        <div>
            <h2>List of books</h2>
            <Booklist/>
        </div>
    </div>
  )
}
