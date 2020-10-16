import React, { Component } from "react";
import axios from "axios";
import Autocomplete from '@material-ui/lab/Autocomplete';

import TextField from '@material-ui/core/TextField';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Publisher: '',
      Author: '',
      Year: '',
      categories:[]
    }
    this.handleCategoryChange=this.handleCategoryChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePublisherChange = this.handlePublisherChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAllCategories=this.getAllCategories.bind(this);
  }
  componentDidMount()
  {
    this.getAllCategories();
  }
  getAllCategories()
  {
    axios.get('http://localhost:8080/v1/categories')
    .then(response => {
        console.log(response.data);
        this.setState({ categories: response.data });
    });
console.log(this.state.categories);

  }

  handleCategoryChange(e)
  {
    console.log("Category Change Event");
  }
  handleTitleChange(e) {
    this.setState({ Title: e.target.value })
  }
  handlePublisherChange(e) {
    this.setState({ Publisher: e.target.value })
  }
  handleAuthorChange(e) {
    this.setState({ Author: e.target.value })
  }
  handleYearChange(e) {
    this.setState({ Year: e.target.value })
  }
  handleSubmit(e) {
    axios.post(`http://localhost:8080/v1/books`, this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    e.preventDefault();

  }


  render() {
    return (
      <section className="form-elegant">

        {/* <!-- Grid row --> */}
        <div className="row">

          {/* <!-- Grid column --> */}
          <div className="col-md-9 col-lg-7 col-xl-5">

            {/* <!--Form without header--> */}
            <div className="card">

              <div className="card-body mx-4">

                {/* <!--Header--> */}
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5"><strong>AddBooks</strong></h3>
                </div>

                <div className="md-form pb-3">
                  <label className="active">Title</label>
                  <input type="search" className="form-control mdb-autocomplete" value={this.state.Title} onChange={this.handleTitleChange} />
                  {/* <button className="mdb-autocomplete-clear">
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="https://www.w3.org/2000/svg">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </button> */}
                </div>

                <div className="md-form pb-3">
                  {/* <button className="mdb-autocomplete-clear">
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="https://www.w3.org/2000/svg">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </button> */}
                  <label className="active">Publisher</label>
                  <input type="search" className="form-control mdb-autocomplete" value={this.state.Publisher} onChange={this.handlePublisherChange} />
                </div>

                <div className="md-form pb-3">
                  {/* <button className="mdb-autocomplete-clear">
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="https://www.w3.org/2000/svg">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </button> */}
                  <label className="active">Author</label>
                  <input type="search" className="form-control mdb-autocomplete" 
                  value={this.state.Author} onChange={this.handleAuthorChange} />
                </div>

                <div className="md-form">
                  <label >Year</label>
                  <input type="date" className="form-control" value={this.state.Year} onChange={this.handleYearChange} />
                </div>

                <div className="md-form">
                  <label >Category</label>
                  <Autocomplete
                    id="combo-box-demo"
                    options={this.state.categories}
                    getOptionLabel={option => option.CName}
                    style={{ width: 300 }}
                    renderInput={
                      params => 
                    <TextField {...params} label="Categories" variant="outlined"
                     value={this.state.categories.ID}
                    //  onChange={this.handleCategoryChange}
onSelect={this.handleCategoryChange}
                     />
                     
                    }
                  />
                </div>


                <div className="text-center btn-primary">
                  <button type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a" onClick={this.handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
    );
  }
}
export default AddBook;