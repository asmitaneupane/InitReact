import React, { Component } from 'react';
import axios from "axios";

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";


class ListBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
        };
        this.deleteBook = this.deleteBook.bind(this);
        this.editBook = this.editBook.bind(this);
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks() {
        axios.get('http://localhost:8080/v1/books')
            .then(response => {
                console.log(response.data);
                this.setState({ books: response.data });
            });

    }

    deleteBook(e) {
        console.log(e.target.value);
        axios.delete('http://localhost:8080/v1/books/' + e.target.value)
            .then(response => {
                console.log(response.data);
                this.getBooks();
            });
    }



    editBook(e) {
        console.log(e.target.value);
        // axios.edit('http://localhost:8080/v1/books/' + e.target.value)
        // .then(response => {
        //     console.log(response.data);
        //     this.getBooks();
        // });

    }


    render() {
        return (
            <div className='App'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <th>Title</th>
                            <th>Publisher</th>
                            <th>Author</th>
                            <th>Year</th>
                            <th>Actions</th>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.books.map((book) => (
                            <TableRow key={book.ID} >
                                <TableCell>{book.Title}</TableCell>
                                <TableCell>{book.Publisher}</TableCell>
                                <TableCell>{book.Author}</TableCell>
                                <TableCell>{book.Year}</TableCell>
                                <TableCell><button value={book.ID} onClick={this.editBook}>Edit</button><button value={book.ID} onClick={this.deleteBook}>Del</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }

}
export default ListBook;