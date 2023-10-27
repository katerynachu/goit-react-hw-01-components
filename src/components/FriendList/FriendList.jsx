import { FriendItem } from "components/FriendItem/FriendItem"
import css from "./FriendList.module.css"
export const FriendList = ({friends}) => {
return (
    <ul className={css.friend_list}>
        {friends.map(({id,name,isOnline,avatar}) => {
          return (
            <li className={css.friend_item} key={id}>
              <FriendItem status={isOnline} avatar={avatar} name={name}/>
            </li>
          )
        })

        }
    </ul>
)
}