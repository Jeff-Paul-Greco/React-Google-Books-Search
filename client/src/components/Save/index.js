import React from "react";
import { Row, Col } from "../Grid"

const Save = props => {

    return (

        <div className="card shadow-lg">

            <div className="card-body">

                <div>

                    <h3>Saved Books</h3>

                    {props.books.map((book, index) => {

                        return (

                            <li className="list-group-item" key={index}>

                                <Row>

                                    <h3>{book.title}</h3>

                                </Row>

                                <Row>

                                    <h3 className="bookAuthor">By: {book.author.join(", ")}</h3>

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

                                <Row>
                                    <div className="container">

                                        <button className="saveBook btn btn-danger float-right" onClick={() => props.handleDeleteButton(book._id)}>
                                            Delete </button>

                                        <a href={book.link} target="_blank" rel="noreferrer noopener">
                                            <button className="viewBook btn btn-success float-right">
                                                View </button>
                                        </a>

                                    </div>
                                </Row>

                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Save