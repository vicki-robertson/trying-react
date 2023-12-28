import styles from './button.module.css'

const Button = ({ href, children }) => {
    return (
      <button className={styles.button}>
        <a className={styles.buttonText}
            href={href} target="_blank">
            {children}
        </a>
      </button>
    );
  };

export default Button

