import useData from "@/services/hooks/contextHooks/useData";
import { useRouter } from "next/navigation";

import styles from "../styles/login.module.css";

const LoginPage = () => {
  const { setUser, googleSignIn } = useData();
  const router = useRouter();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        localStorage.setItem(
          "token",
          JSON.stringify(`next_${result.user.accessToken}`)
        );
        router.push("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className={styles.login_container}>
        <div className={styles.login_box}>
          <div className={styles.google_btn_container}>
            <button onClick={handleGoogleSignIn} className={styles.btn}>
              Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
