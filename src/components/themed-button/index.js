/**
 * Created by karila on 2019/3/12.
 */
import React,{Component} from "react";
import {ThemeContext} from "../theme-context";
class ThemeButton extends Component{
  render(){
    return(
      <ThemeContext.Consumer>
        {({theme,toggleTheme}) => {
          return (
            <button
              onClick={toggleTheme}
              style={{
                background: theme.background,
                color: theme.foreground
              }}>
              Toggle Theme
            </button>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
ThemeButton.contextType=ThemeContext;
export default ThemeButton;