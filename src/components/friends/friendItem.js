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



FriendListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
  }).isRequired
};


export default FriendListItem 