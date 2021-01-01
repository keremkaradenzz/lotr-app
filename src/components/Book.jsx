import React, { useEffect, useState } from "react";
import axios from "axios";
import ChapterDetail from './detail/ChapterDetail';
import {
    Route,
    Link
} from "react-router-dom";

const Book = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('/book')
            .then((response) => {
                console.log(response.data.docs)
                setItems(response.data.docs)
            }

            )
    },
        [])

    console.log(items)
    const imgData = ["https://prodimage.images-bn.com/pimages/9780358380238_p0_v2_s550x406.jpg",
        "https://prodimage.images-bn.com/pimages/9780358380245_p0_v2_s550x406.jpg",
        "https://prodimage.images-bn.com/pimages/9780358380252_p0_v2_s550x406.jpg"
    ]
    return (
        <div className="container">


            <div className="row mt-5">

                {items.map((item, index) => (
                    <div className="col-12 col-md-4 mb-3">
                        <div className="card" >
                            <img src={imgData[index]} altclassName="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>

                                <Link to={`/book/chapter/${item._id}`} className="btn btn-primary">Go Chapter</Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
      
                <Route path="/book/chapter/:topicId">
                    <ChapterDetail />
                </Route>
       
        </div>

    );

}

export default Book;


