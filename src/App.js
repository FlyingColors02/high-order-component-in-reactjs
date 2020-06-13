import React, { Component } from "react";
import Posts from "./components/posts";
import Albums from "./components/albums";

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        POSTS SECTION
                        <Posts/>
                    </div>
                    <div className="col-md-6">
                        ALBUMS SECTION
                        <Albums/>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default App;