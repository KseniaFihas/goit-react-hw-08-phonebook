import css from './Home.module.css';

export default function Home() {
  return (
      <div className={css.main}>
          <div className={css.wrapp}>
        <h1 className={css.title}>Welcome to your phonebook!</h1>
      </div>
    </div>
  );
}