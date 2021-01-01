import React,{ useEffect, useState} from 'react'
import axios from 'axios';




const Movie = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('/movie')
            .then((response) => {
                console.log(response.data.docs)
                setItems(response.data.docs)
            }

            )
    },
        [])

        const imgData = ["https://images-na.ssl-images-amazon.com/images/I/91siaYzL3GL._SL1500_.jpg",
        "https://www.nash-news.com/wp-content/uploads/2018/01/The-Hobbit-Smaug-W.jpg",
        "https://www.birdunyafilm.co/wp-content/uploads/2014/11/hobbit-battle-five-armies-banner-thranduill-banner-109530.jpeg",
    "https://images-na.ssl-images-amazon.com/images/I/81eqQvveI6L._AC_SL1294_.jpg",
"https://images-na.ssl-images-amazon.com/images/I/71sLg08monL._SL1073_.jpg",
"https://images-na.ssl-images-amazon.com/images/I/81kUINEtUbL._AC_SL1408_.jpg"]
        const _items = items.slice(2)
        console.log(_items)
    return (
        <div className="container">
             <div className="row mt-5">

            {_items.map((item, index) => (
                <div className="col-12 col-md-4 mb-3">
                    <div className="card" >
                        <img style={{height:500}} src={imgData[index]} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="d-inline-block me-5">Time:{item.runtimeInMinutes} Minutes</p>
                            <p className="d-inline-block">Box Office : {item.boxOfficeRevenueInMillions}$</p>
                            {/* <Link to={`/book/chapter/${item._id}`} className="btn btn-primary">Go Chapter</Link> */}
                        </div>
                    </div>
                </div>
))}

</div>


        </div>
    )
}



export default Movie