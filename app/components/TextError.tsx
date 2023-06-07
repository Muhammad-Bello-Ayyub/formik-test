import styles from '../App.module.css';

function TextError (props) {
  return <div className={styles.error}>{props.children}</div>
}

export default TextError;