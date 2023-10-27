import css from './FriendItem.module.css';

export const FriendItem = ({ status, avatar, name }) => {
  return (
    <>
      <span className={`${status ? css.true : css.false} ${css.status}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
}
