import React from "react";

class child extends React.Component{

    constructor(props){
        
        super(props);
        this.state={
            child:false,
        }
        
      
    }
    componentDidUpdate(){
        console.log("component was updated successfully");
    }

    componentDidMount(){
        console.log("component was mount successfully");
    }

    componentWillUnmount(){
        console.log("component was willMount successfully");
    }

    render (){
        console.log("re-render");
        return(
            <div>
            <button onClick={()=>{
                
                     if(this.state.child){
                    this.setState({child:false,});
                }
                else{
                    this.setState({child:true,});
                }
            }}> ClickMe

            </button>
            </div>
        )
    }
    

} 

export default child;
