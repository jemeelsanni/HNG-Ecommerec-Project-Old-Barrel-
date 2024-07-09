import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import BestSeller from "./BestSeller";
import YoutubeEmbed from "./Youtubeembed";
import Wine from "./Wine";
import Picks from "./Picks";

const Index = () => {
  return (
    <div>
      <Header />
      <BestSeller />
      <YoutubeEmbed embedId="2wn4qtsRi5c" />
      <Wine />
      <Picks />
      <Footer />
    </div>
  );
};

export default Index;
