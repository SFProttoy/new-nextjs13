import Link from "next/link";
import styles from "../styles/quotes.module.css";

async function getData() {
  const res = await fetch("https://dummyjson.com/quotes");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const QuotesPage = async () => {
  const data = await getData();

  return (
    <>
      <div className={styles.card_container}>
        <div className={styles.cards}>
          {data?.quotes.map((quote) => {
            return (
              <div className={styles.card} key={quote.id}>
                <div className={styles.card_body}>
                  <h1 className={styles.quote}>
                    {quote?.quote.slice(0, 40)}...
                  </h1>
                  <Link className={styles.link} href={`/quotes/${quote.id}`}>
                    See more
                  </Link>
                  <h5 className={styles.author_name}>{quote?.author}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuotesPage;
