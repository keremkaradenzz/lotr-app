import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const ChapterDetail = () => {

    let { topicId } = useParams();
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get(`/book/${topicId}/chapter`)
            .then((response) =>

                setItems(response.data.docs)
             
            )
    },
        [topicId])

    return (
        <React.Fragment>
            <h3 className="text-center">Chapter</h3>
        <div className="mb-5 pb-5">
        <ul class="list-group mb-5">
            {
                items.map((item) =>
                <li class="list-group-item">{item.chapterName}</li>
                )
            }
        </ul>
        </div>
       </React.Fragment>
    )
}

export default ChapterDetail;