import "@/styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { BaseLayout } from "@/layouts/BaseLayout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
};

export default trpc.withTRPC(MyApp);
