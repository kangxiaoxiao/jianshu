/**
 * Created by karila on 2019/3/6.
 */
import React, { PureComponent } from 'react';
import {
  HomeWrapper
} from "./style";
import {themes,ThemeContext} from "../../components/theme-context"
import ThemeButton from "../../components/themed-button"
import Modal from "../../components/modal"
import B from "../../components/HOC/B.js"
import C from "../../components/HOC/C.js"
import D from "../../components/HOC/D.js"

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={5}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
class Home extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      theme:themes.light,
      toggleTheme:this.toggleTheme,
      ref:React.createRef(),
      showModal:false
    }
    this.input = React.createRef();
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  toggleTheme = () =>{
    this.setState((preState)=>{
      return (
        {
          theme:
            preState.theme===themes.light?themes.dark:themes.light
        }
      )

    })
  }
  componentDidMount() {
  //  console.log('new props:', this.state.ref.current);
  }
  render() {
    const FancyButton = React.forwardRef((props,ref) => (
      <button ref={ref}
          className="FancyButton"
      >
        {props.children}
      </button>
    ));
    const {ref} = this.state;
    return (
      <HomeWrapper>
        <ThemeContext.Provider value={this.state}>
          <ThemeButton />
        </ThemeContext.Provider>
        <FancyButton
          ref={ref}
        >Click me!</FancyButton>;
        <ListOfTenThings></ListOfTenThings>
        <hr/>
        <h2>插槽</h2>
        <button onClick={this.showModal}>show modal</button>
          {
            this.state.showModal?(
              <Modal>
                <div className="modal">
                  <div>
                    With a portal, we can render content into a different
                    part of the DOM, as if it were any other React child.
                  </div>
                  This is being rendered inside the #modal-container div.
                  <button onClick={this.hideModal}>Hide modal</button>
                </div>
              </Modal>
            ):null
          }

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              ref={this.input}
              defaultValue="Bob"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <hr/>
        <B
          userName="karila"
          userAge="5"
          userSex="男"
        ></B>
        <C userName="karila"
           userAge="6"
           userSex="女"
        ></C>
        <D username="karila"
           userage="6"
           usersex="女"
        ></D>

      </HomeWrapper>
    )
  }
  handleSubmit(event){
    console.log("提交",this.input.current.value);
    event.preventDefault();
  }
  showModal=()=>{
    this.setState(()=>({
      showModal:true
    }))
  }
  hideModal=()=>{
    this.setState(()=>({
      showModal:false
    }))
  }
}


export default Home;