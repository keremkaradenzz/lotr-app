import React from 'react';


const Main = () => {


    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img style={{ maxHeight: 600 }} src="https://cdn.vox-cdn.com/thumbor/nRu2ccLSeYke8-EGrIi1ohMDLdI=/0x0:825x464/1200x800/filters:focal(347x166:479x298)/cdn.vox-cdn.com/uploads/chorus_image/image/57584235/DOiAi2WUEAE3A1Y.0.jpg" className="d-block w-100 " alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img style={{ maxHeight: 600 }} src="https://tr.web.img4.acsta.net/newsv7/20/10/07/21/09/0451411.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img style={{ maxHeight: 600 }} src="https://media.contentapi.ea.com/content/dam/gin/images/2017/01/lotr-the-battle-for-middle-earth-keyart-min.jpg.adapt.crop191x100.628p.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-8 mb-5">
                        <p className="position-relative top-50 start-50 translate-middle  fst-italic fs-5"> John Ronald Reuel Tolkien CBE FRSL (3 January 1892 – 2 September 1973) was an English writer, poet, philologist, and academic, best known as the author of the high fantasy works The Hobbit and The Lord of the Rings.

                        He served as the Rawlinson and Bosworth Professor of Anglo-Saxon and Fellow of Pembroke College, Oxford, from 1925 to 1945 and Merton Professor of English Language and Literature and Fellow of Merton College, Oxford, from 1945 to 1959. He was a close friend of C. S. Lewis—they were both members of the informal literary discussion group known as The Inklings. Tolkien was appointed a Commander of the Order of the British Empire by Queen Elizabeth II on 28 March 1972.

                        After Tolkien's death, his son Christopher published a series of works based on his father's extensive notes and unpublished manuscripts, including The Silmarillion. These, together with The Hobbit and The Lord of the Rings, form a connected body of tales, poems, fictional histories, invented languages, and literary essays about a fantasy world called Arda and Middle-earth within it. Between 1951 and 1955, Tolkien applied the term legendarium to the larger part of these writings.

                    While many other authors had published works of fantasy before Tolkien, the great success of The Hobbit and The Lord of the Rings led directly to a popular resurgence of the genre. This has caused Tolkien to be popularly identified as the "father" of modern fantasy literature—or, more precisely, of high fantasy. In 2008, The Times ranked him sixth on a list of "The 50 greatest British writers since 1945". Forbes ranked him the fifth top-earning "dead celebrity" in 2009.</p>
                    </div>
                    <div className="col-12 col-md-4 mb-5">
                        <div class="card">
                            <img src="https://cdn.britannica.com/65/66765-050-63A945A7/JRR-Tolkien.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">J.R.R Tolkien</h5>
                               
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">3 January 1892</li>
                                <li class="list-group-item">2 September 1973</li>                   
                            </ul>
                            <div class="card-body">
                                <a href="https://tr.wikipedia.org/wiki/J._R._R._Tolkien" class="card-link">Details</a>
                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Main;