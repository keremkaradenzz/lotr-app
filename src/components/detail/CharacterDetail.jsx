import React from 'react';
import {Link} from 'react-router-dom'

const CharacterDetail = ({character,search}) => {



    return (
        <>
               <h3 className="mt-2 mb-2">Character Details</h3>
        <div className="row mb-5">
  
    
        {
            character && character.map(item => item.race === search ? 
            <div className="col-md-3"><div className="card">
 
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">Hair:{item.hair ? item.hair : "Unknown" }</p>
              <p className="card-text">Gender:{item.gender ? item.gender : "Unknown"}</p>
              <p className="card-text">Realm:{item.realm ? item.realm : "Unknown"}</p>
              <p className="card-text">Height:{item.height ? item.height : "Unknown"}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Birth: {item.birth ? item.birth : "Unknown"}</li>
              <li className="list-group-item">Death: {item.death ? item.death : "Unknown"}</li>
              <li className="list-group-item">Wife :{item.spouse ? item.spouse : "Unknown"}</li>
            </ul>
            <div className="card-body">
              <a href={item.wikiUrl} style={{cursor:'pointer'}} target="_blank" className="card-link">Wiki URL</a>
            </div>
            {console.log(item.wikiUrl)}
          </div></div>: ""
          
          )
    
        }

        </div>
        </>
    )
   
}


export default CharacterDetail;