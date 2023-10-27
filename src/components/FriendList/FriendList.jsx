import { FriendItem } from "components/FriendItem/FriendItem"
export const FriendList = ({friends}) => {
return (
    <ul className="friend-list">
        {friends.map(({id,name,status,avatar}) => {
          return (
            <li key={id}>
              <FriendItem status={status} avatar={avatar} name={name}/>
            </li>
          )
        })

        }
    </ul>
)
}