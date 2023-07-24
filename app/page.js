import BannerPage from "@/components/BannerPage";
import QuotesPage from "@/components/QuotesPage";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_TOKEN);
  return (
    <>
      <BannerPage />
      <QuotesPage />
    </>
  );
}
