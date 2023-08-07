import Head from "next/head";
import CallToAction from "../components/call-to-action/CallToAction";
import BannerComponent from "../components/custom/sections/bannercomponent";
import SpacerComponent from "../components/spacer/Spacer";
import FeatureComponent from "../components/custom/sections/featurecomponent";
import ContactComponent from "../components/custom/sections/contactcomponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Titulo home</title>
        <meta
          name="description"
          content="ENCA - este es el titulo del proyecto"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CallToAction />
      <SpacerComponent />
      <BannerComponent />
      <FeatureComponent />
      <ContactComponent />
    </div>
  );
}
