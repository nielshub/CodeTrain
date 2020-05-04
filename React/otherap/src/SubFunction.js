function Avatar(props){
    return (
        <img className = "Avatar"
        src = {props.user.avatarUrl}
        alt = {props.user.name}
        />
    )
}

function UserInfo(props){
    return (
        <div className="UserInfo">
        <Avatar user={props.user}/>
        <div className="UserInfo-name"> {props.user.name} </div>
      </div>
    )
}