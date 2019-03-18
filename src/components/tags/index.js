/**
 * Created by karila on 2019/3/6.
 */
import React,{PureComponent} from "react";
import {connect} from "react-redux";
import {actionCreators} from "../../common/header/store"
import {
  TagsWrapper,
  TagTitle,
  TagItem,
} from "./style"
class Tags extends PureComponent{
  getTagItem(){
    const { isFocus,tagsList,tagPage,mouseIn,handlePageChange} = this.props;
    if(isFocus || mouseIn){
      const JSList = tagsList.toJS();
      let curList=[];
      if(JSList.length){
        let endItem=(tagPage+1)*10<JSList.length?(tagPage+1)*10:JSList.length;
        for(let i=tagPage*10;i<endItem;i++){
          if(JSList[i]){
            curList.push(<TagItem key={JSList[i]}>{JSList[i]}</TagItem>)
          }
        }
      }
      return (
        <TagsWrapper>
          <TagTitle>
            <span className="left">热门搜索</span>
            <span className="right" onClick={()=>{handlePageChange(tagPage,tagsList)}}>换一批</span>
          </TagTitle>
          <div>
            {
              curList
            }
          </div>
        </TagsWrapper>
      );
    }else{
      return null;
    }
  }
  render(){
    return (
      <React.Fragment>
        { this.getTagItem()}
      </React.Fragment>
    )
  }
};
const mapStateToProps=(store)=>{
  return{
    isFocus:store.getIn(["header","isFocus"]),
    tagsList:store.getIn(["header","list"]),
    tagPage:store.getIn(["header","tagPage"]),
    mouseIn:store.getIn(["header","mouseIn"]),
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    handlePageChange(page,list){
      if(list.size>0){
        const curList = list.toJS();
        const totalPage=Math.ceil(curList.length/10);
        let curPage=parseInt(page);
        if(curPage<totalPage-1){
          curPage++;
        }else{
          curPage=0;
        }
        dispatch(actionCreators.getTabPageAction(curPage));
      }

    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tags);