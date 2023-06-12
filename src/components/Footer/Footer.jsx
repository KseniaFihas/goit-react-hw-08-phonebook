import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div>
        <p>Ukraine 2023 | Powered by </p>
        <a
          href="https://github.com/NastyaSavchenko"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to Git Hub"
        >
        </a>
      </div>
    </footer>
  );
};

export default Footer;