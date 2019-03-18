/**
 * Created by karila on 2019/3/11.
 */
import React,{Component} from "react";
class Temperature extends Component{
  render(){
    const placeholderTxt=this.props.scale==="c"?"摄氏度":"华氏度";
    return (
      <div>
        <input
          placeholder={placeholderTxt}
          value={this.props.temperature}
          onChange={this.handleChangeTemp}
        ></input>
      </div>

    )
  }
  handleChangeTemp=(e)=>{
    this.props.handleChangeTemp(e.target.value);
  }
}
export default Temperature;