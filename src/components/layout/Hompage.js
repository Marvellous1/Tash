import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import SignUp from "../auth/SignUp";

class Homepage extends Component {
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/dashboard" />;
    return (
      <div>
        <header id="home">
          <Navbar />

          <div class="row  valign-wrapper" style={{ minHeight: "90vh" }}>
            <div class=" col s12 m7  valign-wrapper">
              <div className=" container valign-wrapper">
                <div>
                  <h1>
                    Join The Tash <br /> Community
                  </h1>
                  <a class=" btn-large btn-rounded red lighten-3">
                    Join Now
                  </a>
                </div>
              </div>
            </div>
            <div class="grid-example col s12 m5"></div>
          </div>
        </header>

        <section id="about" className="section">
          <div className="row">
            <div className="col s12 m5">
              <div className=" container">
                <img
                  src="/assets/people.png"
                  className="responsive-img"
                  alt="People"
                />
              </div>
            </div>
            <div className="col s12 m7">
              <div className="container">
                <h1>Meet New People</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  doloribus pariatur sunt eaque aliquam harum cupiditate
                  distinctio quisquam. Distinctio autem excepturi consequatur
                  corrupti dicta natus fuga voluptatum corporis non at.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                doloribus pariatur sunt eaque aliquam harum cupiditate
                distinctio quisquam. Distinctio autem excepturi consequatur
                corrupti dicta natus fuga voluptatum corporis non at.
              </p>
              </div>
            </div>
          </div>
        </section>

        <section id="share" className="section">
          <div className="row">
            <div className="col s12 m6">
              <div className="container">
                <h1>Share Ideas</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  doloribus pariatur sunt eaque aliquam harum cupiditate
                  distinctio quisquam. Distinctio autem excepturi consequatur
                  corrupti dicta natus fuga voluptatum corporis non at.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                doloribus pariatur sunt eaque aliquam harum cupiditate
                distinctio quisquam. Distinctio autem excepturi consequatur
                corrupti dicta natus fuga voluptatum corporis non at.
              </p>
              </div>
            </div>
            <div className="col s12 m6">
              <div className=" container">
                <img
                  src="/assets/book.png"
                  className="responive-img img-resized"
                  alt="book"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="grow" className="section">
          <div className="row">
            <div className="col s12 m5">
              <div className=" container">
                <img
                  src="/assets/GrowBg.png"
                  className="img-resized"
                  alt="People"
                />
              </div>
            </div>
            <div className="col s12 m7">
              <div className="container">
                <h1>Meet New People</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  doloribus pariatur sunt eaque aliquam harum cupiditate
                  distinctio quisquam. Distinctio autem excepturi consequatur
                  corrupti dicta natus fuga voluptatum corporis non at.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                doloribus pariatur sunt eaque aliquam harum cupiditate
                distinctio quisquam. Distinctio autem excepturi consequatur
                corrupti dicta natus fuga voluptatum corporis non at.
              </p>
              </div>
            </div>
          </div>
        </section>

        <section id="homeSignUp" className="section">
          <h1 className="center">Join The Community Now</h1>
          <div className="row">
            <div className="col s12 m7">
              <SignUp />
            </div>
          </div>
        </section>

        <footer className="black white-text center">
          <div className=" darken-4 container" style={{ padding: "20px 0" }}>
            &copy; 2019 Study Guru. All Rights Reserved
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Homepage);
