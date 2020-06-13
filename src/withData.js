import React, { Component } from "react";
import axios from "axios";
const withData = (Wrapdata,data)=>{
    class WithData  extends Component{
        constructor(props){
            super(props);
            this.state={
                storedata:[]
            }
        }
    
        async componentDidMount(){
            let response =  await axios.get(data);
            this.setState({storedata:response.data});
        }
        render(){
            return(
                <div>
                    <Wrapdata data={this.state.storedata}{...this.props}/>
                </div>
            )
        }
    }
    return WithData;
};
export default withData;