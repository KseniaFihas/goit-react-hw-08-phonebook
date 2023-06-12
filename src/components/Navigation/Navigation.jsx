import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/" >PhoneBook </NavLink>
      {isLoggedIn && <NavLink className={css.link} to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;