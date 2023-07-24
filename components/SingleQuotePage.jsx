import styles from "../styles/quotes.module.css";

const SingleQuotePage = ({ quoteData }) => {
  return (
    <>
      <div className={styles.quote_container}>
        <div className={styles.box}>
          <h1 className={styles.single_quote}>{quoteData.quote}</h1>
          <h4 className={styles.author_name}>{quoteData.author}</h4>
        </div>
      </div>
    </>
  );
};

export default SingleQuotePage;
