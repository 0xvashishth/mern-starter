import React from 'react';
import { Link } from 'react-router-dom';
import './questions.css';
import fox from "./fox.jpg";
import TextTruncate from 'react-text-truncate';

const Questions = (props) => {
    const  book  = props.book;
    var repeatQuestions = [];
    for(var i=0;i<8;i++){
    repeatQuestions[i] = <div>
        <div class="row">
                <div class="col-2">
                  <div class="">
                    <div class="paracomment float-center">2 comments</div>
                    <div href="#" class="float-center badge badge-success">4 answers</div>
                    <div class="paracomment float-center">3 tags</div>
                    <div class="paracomment float-center">36 views</div>
                  </div>
                </div>

                <div class="col-7">
                    <a href="#" class="header-question text-primary" style={{textDecoration: "none"}}>
                      Test Question 10 :) How are you ?
                    </a><br/>
                    <a href="#" class="badge badge-secondary badge-pad">html</a>&nbsp;
                    <a href="#" class="badge badge-secondary badge-pad">javascript</a>&nbsp;
                    <a href="#" class="badge badge-secondary badge-pad">ajax</a>&nbsp;
                    <a href="#" class="badge badge-secondary badge-pad">multithreading</a>&nbsp;
                </div>

                <div class="col-3">
                    <div class="daysagocss">
                      asked 14 days ago
                    </div>
                    <div class="d-flex">
                      <img 
                      width="40"
                      height="40"
                      class="" style={{borderRadius: "10px"}} src={fox} />&nbsp;
                      <a href="#" style={{textDecoration: "none"}}><span class="avatarname">vasu</span></a>
                    </div>
                </div>
              </div>
              <hr/>
              </div>

          }

    repeatQuestions[3] = <div>
        <div class="row">
                <div class="col-2">
                  <div class="">
                    <div class="paracomment float-center">2 comments</div>
                    <div href="#" class="float-center badge badge-success">4 answers</div>
                    <div class="paracomment float-center">3 tags</div>
                    <div class="paracomment float-center">36 views</div>
                  </div>
                </div>

                <div class="col-7">
                    <a href="#" class="header-question text-primary" style={{textDecoration: "none"}}><TextTruncate line={1} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/></a>
                    <a href="#" class="badge badge-secondary badge-pad">html</a>&nbsp;
                    <a href="#" class="badge badge-secondary badge-pad">javascript</a>&nbsp;
                    <a href="#" class="badge badge-secondary badge-pad">ajax</a>&nbsp;
                    <a href="#" class="badge badge-secondary badge-pad">multithreading</a>&nbsp;
                </div>

                <div class="col-3">
                    <div class="daysagocss">
                      asked 14 days ago
                    </div>
                    <div class="d-flex">
                      <img 
                      width="40"
                      height="40"
                      class="" style={{borderRadius: "10px"}} src={fox} />&nbsp;
                      <a href="#" style={{textDecoration: "none"}}><span class="avatarname">vasu</span></a>
                    </div>
                </div>
              </div>
              <hr/>
              </div>

	return(repeatQuestions)
};

export {Questions};