import { AuthNav, Navigation, UserMenu } from 'components';

import { useAuth } from '../../hooks/useAuth';
import css from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <h2 className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </h2>
  );
};

export default AppBar;