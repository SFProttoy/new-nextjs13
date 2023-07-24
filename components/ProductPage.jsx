import useData from "@/services/hooks/contextHooks/useData";
import axios from "axios";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import styles from "../styles/products.module.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const { getToken } = useData();

  useEffect(() => {
    if (getToken() !== undefined) {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://app-area.bestu.com.bd/api/nextjs/products?page=${page}`,
        headers: {
          Authorization: process.env.NEXT_PUBLIC_TOKEN,
          //   Authorization: "GETUPLTD2023NEXTJS",
        },
      };

      axios
        .request(config)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [getToken, page]);

  const handleViewMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className={styles.cards}>
        {products?.data?.data.map((product) => {
          return (
            <Fragment key={product?.id}>
              <div className={styles.product_card}>
                <div className={styles.card_body}>
                  <Image
                    src={`/images/iphone-14-pro-max.jpg`}
                    width={100}
                    height={100}
                    alt="phone"
                  />
                  <div className={styles.product_info}>
                    <h1 className={styles.product_name}>{product?.name}</h1>

                    <p className={styles.product_description}>
                      {product?.short_description}
                    </p>

                    <h5 className={styles.product_price}>${product?.price}</h5>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>

      <div className={styles.view_more_container}>
        {products?.data?.data?.length > 0 ? (
          <div className="flex justify-center">
            <button className={styles.view_more} onClick={handleViewMore}>
              More
            </button>
          </div>
        ) : (
          <h1>Sorry No Data Found !</h1>
        )}
      </div>
    </>
  );
};

export default ProductPage;
