import React, {Component} from "react";
import "./style.css";

class GetSquare extends Component{
  constructor(props){
    super(props)
  }

  buildSquare = (width, height) => {
    return {
      margin: '1px solid black',
      width: `${width}px`,
      height: `${height}px`
    }
  }

  render(){
    return(
      <div style = {this.buildSquare(this.props.width, this.props.height)}></div>
    )
  }
  
}


class OverlapArea extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <GetSquare width = '30' height = '20'/>
        
      </div>
    )
  }
}


export default function App() {
  return (
    <div>
      <OverlapArea/>
    </div>
  );
}
