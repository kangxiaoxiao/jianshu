/**
 * Created by karila on 2019/3/13.
 */
import {Component} from "react";
import ReactDOM from 'react-dom';
const rootEl=document.body;
class Modal extends Component{
  constructor(props){
    super(props);
    this.el=document.createElement("div");
    this.el.className="modal_jianshu"
  }
  componentDidMount(){
    rootEl.appendChild(this.el);
  }
  componentWillUnmount(){
    rootEl.removeChild(this.el);
  }
  render(){
    return  ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}
export default Modal;