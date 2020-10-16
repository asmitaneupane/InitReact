import React, { Component } from "react";
// import { Form, Row, Col, Button } from "react-bootstrap";

class BookReturn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StudentName: '',
      BookName: '',
      SubmitDate: ''
    }
    this.handleStudentNameChange = this.handleStudentNameChange.bind(this);
    this.handleBookNameChange = this.handleBookNameChange.bind(this);
    this.handleSubmitDateChange = this.handleSubmitDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleStudentNameChange(e) {
    this.setState({ StudentName: e.target.value })
  }
  handleBookNameChange(e) {
    this.setState({ BookName: e.target.value })
  }
  handleSubmitDateChange(e) {
    this.setState({ SubmitDate: e.target.value })
  }
  handleSubmit(e) {
    console.log(this.state)
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
                  <h3 className="dark-grey-text mb-5"><strong>Book Return</strong></h3>
                </div>

                <div className="md-form pb-3">
                  <label className="active">Student Name</label>
                  <input type="search" className="form-control mdb-autocomplete" value={this.state.StudentName} onChange={this.handleStudentNameChange} />
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
                  <label className="active">Book Name</label>
                  <input type="search" className="form-control mdb-autocomplete" value={this.state.BookName} onChange={this.handleBookNameChange} />
                </div>

                <div className="md-form">
                  <label >Submit Date</label>
                  <input type="date" className="form-control" value={this.state.SubmitDate} onChange={this.handleSubmitDateChange} />
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
export default BookReturn;
