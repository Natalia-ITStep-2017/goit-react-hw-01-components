import PropTypes from "prop-types";
import css from "./friends.module.css";
import FriendListItem from "./friendItem";


const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friendItem) => {
        return (<FriendListItem key={friendItem.id} item={friendItem} />)
      })}
    </ul>)
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired
  ).isRequired
};

export default FriendList;