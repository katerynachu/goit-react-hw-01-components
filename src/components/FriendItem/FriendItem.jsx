export const FriendItem = ({status,avatar,name}) =>{
    return (
        <>
        <span className="status">{status}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
        </>
    )
}