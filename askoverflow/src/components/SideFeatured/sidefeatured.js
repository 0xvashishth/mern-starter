import React from 'react';
import { Link } from 'react-router-dom';

const SideFeatured = (props) => {
    const  book  = props.book;

    return(
        <div class="list-group container">
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" style={{background: "none"}}>
                  <div class="d-flex w-100 justify-content-between">
                    
                    <small>The Overflow Blog</small>
                  </div>
                  
                </a>
                <div class="list-group-item list-group-item-action flex-column align-items-start" style={{background: "none"}}>
                  <a href="#"><i class="fas fa-pencil-alt"></i><small class="text-muted">Donec id elit non mi porta.</small></a><br/><br/>
                  <a href="#"><i class="fas fa-pencil-alt"></i><small class="text-muted">Donec id elit non mi porta.</small></a>
                </div>
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" style={{background: "none"}}>
                  <div class="d-flex w-100 justify-content-between">
                    
                    <small>The Featured Questions</small>
                  </div>
                  
                </a>
                <div class="list-group-item list-group-item-action flex-column align-items-start" style={{background: "none"}}>
                  <a href="#"><i class="fab fa-stack-overflow"></i><small class="text-muted">Whats your name ?</small></a><br/><br/>
                  <a href="#"><i class="fab fa-stack-overflow"></i><small class="text-muted">Whats your college name where you are studying ?</small></a><br/><br/>
                  <a href="#"><i class="fas fa-comment-alt"></i><small class="text-muted">Where are you from ?</small></a><br/><br/>
                  <a href="#"><i class="fas fa-comment-alt"></i><small class="text-muted">Where are the statue of liberty situated ?</small></a><br/>
                </div>
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" style={{background: "none"}}>
                  <div class="d-flex w-100 justify-content-between">
                    
                    <small>Hot on Meta</small>
                  </div>
                  
                </a>
                <div class="list-group-item list-group-item-action flex-column align-items-start" style={{background: "none"}}>
                  <a href="#"><i class="fas fa-pencil-alt"></i><small class="text-muted">Changing initializer-list tag wiki</small></a><br/><br/>
                  <a href="#"><i class="fas fa-pencil-alt"></i><small class="text-muted">Changing initializer-list tag wiki</small></a>
                </div>
              </div>
    )
};

export {SideFeatured};