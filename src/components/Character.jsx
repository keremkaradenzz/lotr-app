import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CharacterDetail from './detail/CharacterDetail';

const Character = () => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        axios.get('/character')
            .then((response) => {
                console.log(response.data.docs)
                setItems(response.data.docs)
            }

            )
    },
        [])

    let _items = []
    _items = items.map(item => item.race)
    _items = [...new Set(_items)];
    console.log(search)

    return (
        <div className="container">
            <div className="row">
            <ul class="list-group">
                <div className="container">
                    <div className="row mt-5">
                       {_items.map((item, index) => <div className="col-2 ">  <li style={{ cursor: 'pointer' }} onClick={e => setSearch(e.target.innerHTML)} class="list-group-item">{item ? item : "Other"}</li></div>)}
                    </div>
                </div>
            </ul>

        
          
            </div>
            <CharacterDetail character={items} search={search}/>
        </div>
    )
}


export default Character;