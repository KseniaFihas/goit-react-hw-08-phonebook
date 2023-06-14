import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={css.wrap}>
      <p className={css.name}>Welcome, {user.name}</p>
      <button className={css.button} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;