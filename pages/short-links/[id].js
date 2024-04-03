import Head from "next/head";
import ShortLinkForm, { ShortLinkFormType } from "@/components/ShortLinkForm";
import styles from "@/styles/ShortLinkEditPage.module.css";
import ShortLink from "@/db/models/ShortLink";
import { useRouter } from "next/router";
import axios from "@/lib/axios";

export async function getServerSideProps() {
  await dbConnect();
  const shortLinks = await ShortLink.findById(id);
  if (shortLinks) {
    return {
      props: {
        shortLinks: JSON.parse(JSON.stringify(shortLinks)),
      },
    };
  }
  return {
    notFound: true,
  };
}

export default function ShortLinkEditPage({ shortLink }) {
  const router = useRouter();
  const { id } = router.query;
  async function handleSubmit(values) {
    await axios.patch(`/short=links/${id}`, values);
    router.push(`/short-links/`);
  }
  return (
    <>
      <Head>
        <title>주소 수정하기 - Shortit</title>
      </Head>
      <div className={styles.page}>
        <h1 className={styles.title}>수정하기</h1>
        <ShortLinkForm
          type={ShortLinkFormType.Edit}
          initialValues={shortLink}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
