/**
 * Created by karila on 2019/3/6.
 */
import styled from "styled-components";
export const TagsWrapper = styled.div`
  width:280px;
  background:#fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  padding:10px 10px 0 10px;
`
export const TagItem = styled.div`
  display:inline-block;
  border:1px solid #ddd;
  font-size:12px;
  color:#787878;
  padding:0 7px;
  line-height:20px;
  border-radius:3px;
  margin:0 5px 10px 5px
  cursor:pointer;
`
export const TagTitle = styled.div`
  overflow:hidden;
  margin-bottom:10px;
  span{
    cursor:pointer;
    display:inline-block;
    font-size:14px;
    color:#969696;
    line-height:20px;
    &.left{
      float:left;
    }
    &.right{
      float:right;
    }
  }
`
