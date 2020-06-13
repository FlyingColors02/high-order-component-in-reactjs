import React from "react";
import withData from "../withData";

const Posts =(props)=>{
    
        return(
            <div>
                {
                    props.data.slice(0,20).map(item=>(
                        <div className="col-md-12" key ={item.id}>
                            <div class="card text-left">
                              <div class="card-body">
                                <h4 class="card-title">{item.title}</h4>
                                <p class="card-text">{item.body}</p>
                              </div>
                            </div>
                        </div>
                    ))
                }
                </div>
        )
    }

export default withData(Posts,"https://jsonplaceholder.typicode.com/posts");