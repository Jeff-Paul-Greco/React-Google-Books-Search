import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SearchResult from "../components/Search"

class Search extends Component {
    state = {
        search: "",
        message: "",
        books: []
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    }

    handleFormSubmit = event => {

        event.preventDefault();

        API.searchBooks(this.state.search)

            .then(res => {

                if (res.data.items === "error") {

                    throw new Error(res.data.items);

                }

                else {

                    let results = res.data.items;

                    results = results.map(result => {

                        result = {

                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink

                        }

                        return result;

                    })

                    this.setState({ books: results, error: "" })

                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSaveButton = event => {

        event.preventDefault();

        let savedBooks = this.state.books.filter(book => book.id === event.target.id)

        savedBooks = savedBooks[0];

        API.saveBook(savedBooks)
            .then(res => this.setState({ message: alert(`Added ${res.data.title}!`) }))
            .catch(err => console.log(err))
    }

    render() {

        return (

            <div>

                <Nav />

                <Container>

                    <Row>

                        <Col size="md-12">

                            <Jumbotron>
                                <h1>Google Books Search</h1>
                                <h3>Search for and Save Books</h3>
                            </Jumbotron>

                        </Col>

                    </Row>

                </Container>

                <Container>

                    <form className="border card card-body">

                        <Row>

                            <Col size="md-12">

                                <h3>Book Search</h3>

                            </Col>

                        </Row>

                        <Row>

                            <Col size="md-12">

                                <input type="text" className="form-control" onChange={this.handleInputChange} />

                            </Col>

                        </Row>

                        <Row>
                            <Col size="md-2" float="right my-2">
                                <button type="submit" className="form-control btn btn-primary float-right" onClick={this.handleFormSubmit}>Search</button>
                            </Col>
                        </Row>

                    </form>

                </Container>

                <Container>

                    <Row className="results">
                        <Col size="md-12">
                            <SearchResult books={this.state.books} handleSaveButton={this.handleSaveButton} />
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Search;