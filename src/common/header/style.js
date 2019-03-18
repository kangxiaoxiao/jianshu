/**
 * Created by karila on 2019/3/6.
 */
import styled from "styled-components";
export const HeaderWrapper = styled.div`
  position:relative;
  border-bottom:1px solid #f0f0f0;
  box-sizing:border-box;
`

export const HeaderCon = styled.div`
  position:relative;
  width:1440px;
  margin:0 auto;
  .leftItem{
      position:absolute;
      left:0;
      top:0;
      img{
        display:block;
        width:100px;
        height:56px;
      }
  }
  .rightItem{
     position:absolute;
     right:0;
     top:0;
  }
  .centerItem{
     width:945px;
     margin:0 auto;
  }  
`
export const Btn = styled.div`
  display:inline-block;
  margin:9px 0;
  line-height:38px;
  padding:0 20px;
  font-size:17px;
  color:#333;
  margin-right:10px;
  &.left{
    float:left;
  }
  &.right{
   float:right;
  }
  &.active{
    color:#ea6f5a;
  }
  &.primary{
    border:1px solid;#ea6f5a;
    background:#ea6f5a;
    color:#fff;
    border-radius:19px;
    &.empty{
      border-color:#ea6f5a;
      color:#ea6f5a;
      background:#fff;
    }
  }
`
export const InputWrapper = styled.div`
  position:relative;
  &.left{
   float:left;
  }
`
export const InputCon = styled.div`
  height:38px;
  line-height:38px;
  border-radius:19px;
  margin:10px 0;
  box-sizing:border-box;
  padding:0 7px 0 20px;
  background:#eee;
  i{
    display:inline-block;
    width:30px;
    height:30px;
    margin:4px 0;
    line-height:30px;
    border-radius:15px;
    color:#333;
    text-align:center;
    transition:all .2s ease-in;
    &.isFocus{
     color:#fff;
     background:#999;
    }
  }
`
export const Input = styled.input`
  display:inline-block;
  vertical-align:top;
  width:140px;
  line-height:38px;
  border:0;
  outline:none;
  color:#333;
  background:#eee;
  padding:0;
  &.inputStar-enter{
    transition:all . 2s ease-out;
  }
  &.inputStar-enter-active {
    width:200px;
  }
  &.inputStar-enter-done{
    width:200px;
  }
  &.inputStar-exit{
    transition:all .2s ease-out;
  }
  &.inputStar-exit-active{
    width:140px;
  }
  &::placeholder{
   color:#999;
  }
`
export const TagsWrapper= styled.div`
  position:absolute;
  left:0;
  top:56px;
  z-index:1;
`