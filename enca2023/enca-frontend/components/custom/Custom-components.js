import React from "react";

// core components
import Banner2 from "../banner/Banner2";

// sections for this page
import HeaderComponent from "./sections/headercomponent";
import BannerComponent from "./sections/bannercomponent";
import FormBannerComponent from "./sections/formbannercomponent";

import PortfolioComponent from "./sections/portfoliocomponent";
import PricingComponent from "./sections/pricingcomponent";
import TeamComponent from "./sections/teamcomponent";
import TestimonialComponent from "./sections/testimonialcomponent";
import BlogComponent from "./sections/blogcomponent";
import C2aComponent from "./sections/c2acomponent";
import ContactComponent from "./sections/contactcomponent";

const CustomComponents = () => {
  return (
    <div>
      <Banner2 />
      <HeaderComponent />
      <BannerComponent />
      <FormBannerComponent />
      <PortfolioComponent />
      <PricingComponent />
      <TeamComponent />
      <TestimonialComponent />
      <BlogComponent />
      <C2aComponent />
    </div>
  );
};

export default CustomComponents;
