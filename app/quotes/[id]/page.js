import SingleQuotePage from "@/components/SingleQuotePage";

async function getSingleQuote(id) {
  const res = await fetch(`https://dummyjson.com/quotes/${id}`);
  return res.json();
}

const SingleQuote = async ({ params: { id } }) => {
  const quoteData = await getSingleQuote(id);

  return (
    <>
      <SingleQuotePage quoteData={quoteData} />
    </>
  );
};

export default SingleQuote;
