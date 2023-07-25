import useData from "@/services/hooks/contextHooks/useData";
import axios from "axios";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import styles from "../styles/products.module.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [page, setPage] = useState(1);

  const { getToken } = useData();

  useEffect(() => {
    if (getToken() !== undefined) {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${process.env.BASE_URL}/products?page=${page}`,
        headers: {
          Authorization: process.env.NEXT_PUBLIC_TOKEN,
        },
      };

      axios
        .request(config)
        .then((response) => {
          // setProducts(response.data);
          setProducts((prevProducts) => [
            ...prevProducts,
            ...response?.data?.data?.data,
          ]);
          setNewProducts(response?.data?.data?.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [getToken, page]);

  const handleViewMore = () => {
    setPage(page + 1);
  };

  console.log(products, newProducts);

  return (
    <>
      <div className={styles.cards}>
        {products.map((product) => {
          return (
            <Fragment key={product?.id}>
              <div className={styles.product_card}>
                <div className={styles.card_body}>
                  <Image
                    src={`${process.env.BASE_URL}/${product?.image}`}
                    width={250}
                    height={100}
                    alt="phone"
                  />
                  <div className={styles.product_info}>
                    <h1 className={styles.product_name}>{product?.name}</h1>

                    {product?.description && (
                      <p
                        className={styles.product_description}
                        dangerouslySetInnerHTML={{
                          __html: product?.description?.slice(0, 100) + "...",
                        }}
                      ></p>
                    )}

                    <h5 className={styles.product_price}>${product?.price}</h5>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>

      <div className={styles.view_more_container}>
        {newProducts?.length > 0 ? (
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
