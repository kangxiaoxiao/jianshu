/**
 * Created by karila on 2019/3/11.
 */
import React from "react";
function Feed(props){
  return (
    <div>Feed user:{JSON.stringify(props.user)}</div>
  )
}

function Avatar(props){
  return (
    <div>
      <div>avatar user:{JSON.stringify(props.user)}</div>
      <div>avatar avatarSize:{props.size}</div>

    </div>
  )
}
function PageLayout(props){
  return (
    <div>
      <div className="topBar">
        {props.topBar}
      </div>
      <div className="content">
        {props.contentCom}
      </div>
    </div>

  )
}
function Page(props){
  const user = props.user;
  const content = <Feed user={user} />;
  const topBar = (
    <div>
      <a href={user.permalink}>
        <Avatar user={user} size={props.avatarSize}></Avatar>
      </a>
    </div>
  );
  return (
    <PageLayout
      topBar={topBar}
      contentCom={content}
    />
  );
}

export default Page;
