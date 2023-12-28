import styles from './button.module.css'

const ButtonSmall = ({ href, children }) => {
    return (
      <button className={styles.button}>
        <a className={styles.buttonText}
            href={href} target="_blank">
            {children}
        </a>
      </button>
    );
  };

export default ButtonSmall