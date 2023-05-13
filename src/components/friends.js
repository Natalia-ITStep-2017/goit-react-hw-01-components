import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./friends.module.css";

const FriendListItem = ({ item }) => {
  const { avatar, name, isOnline } = item;

  return (
    <li className={css.item}>
      <span className={clsx(isOnline ? css.online : css.ofline)} ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li >
  )
};

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friendItem) => {
        return (<FriendListItem key={friendItem.id} item={friendItem} />)
      })}
    </ul>)
};

FriendListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;