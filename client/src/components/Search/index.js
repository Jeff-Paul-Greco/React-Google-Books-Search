import React from "react";
import { Row, Col } from "../Grid"

const Search = props => {
    return (

        <div className="card">

            <div className="card-body">

                <h3>Search Results</h3>

                {props.books.map((book, index) => {

                    return (

                        <li className="list-group-item" key={index}>

                            <Row>

                                <h2>{book.title}</h2>

                                <div className="float-right">

                                    <button className="saveBook btn btn-primary float-right" id={book.id} onClick={(event) => props.handleSaveButton(event)}>
                                        Save </button>

                                    <a href={book.link} target="_blank" rel="noreferrer noopener">
                                        <button className="viewBook btn btn-success float-right">
                                            View </button>
                                    </a>

                                </div>

                            </Row>

                            <Row>
                                <h3 className="bookAuthor">By: {book.author ? book.author.join(", ") : book.author} </h3>
                            </Row>

                            <Row id={book.title + "Card"} key={book._id}>

                                <Col size="3" className="bookImage">
                                    <img src={book.image} alt={book.title} />
                                </Col>

                                <Col size="9" className="bookInfo">

                                    <Row>
                                        <p className="bookDescription">{book.description}</p>
                                    </Row>

                                </Col>

                            </Row>

                        </li>
                    );
                })}
            </div>
        </div>
    )
}
export default Search