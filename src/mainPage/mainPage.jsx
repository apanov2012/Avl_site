import React from "react";
import SixCardsWithLink from "../pageBlocks/cardsBlocks/sixCardsWithLink";
import HorizontalBlock from "../pageBlocks/horizontalBlock";
import HorizontalBlockDropdown from "../pageBlocks/horizontalBlockDropdown";
import HorizontalBlockSmall from "../pageBlocks/horizontalBlockSmall";
import HorizontalBlockUnnamed from "../pageBlocks/horizontalBlockUnnamed";
import LargeImage from "../pageBlocks/largeImage";
import PageHead from "../pageBlocks/pageHead/pageHead";
import content from "../textContent";

const pageName = content.mainPage.pageName;
const subMenuList = content.mainPage.subMenuList;
const imageUrls = content.mainPage.imageUrls;

const forBusiness = content.mainPage.blocks.forBusiness;
const subscribe = content.mainPage.blocks.subscribe;
const demonstration = content.mainPage.blocks.demonstration;
const sixCardsBlock = content.mainPage.blocks.sixCardsBlock;
const platform = content.mainPage.blocks.platform;
const situationCenter = content.mainPage.blocks.situationCenter;
const analysis = content.mainPage.blocks.analysis;
const vulnerabilitiesScan = content.mainPage.blocks.vulnerabilitiesScan;
const analytics = content.mainPage.blocks.analytics;
const unnamedBlock = content.mainPage.blocks.unnamedBlock;
const aboutUs = content.mainPage.blocks.aboutUs;

const MainPage = () => {
    return (
        <div className="mainPage">
            <PageHead
                pageName={pageName}
                subMenuList={subMenuList}
            />
            <LargeImage imageUrl={imageUrls.img1} />
            <HorizontalBlock blockContent={forBusiness} />
            <HorizontalBlock blockContent={subscribe} />
            <HorizontalBlockSmall blockContent={demonstration} />
            <SixCardsWithLink blockContent={sixCardsBlock} />
            <LargeImage imageUrl={imageUrls.img2} />
            <HorizontalBlock blockContent={platform} />
            <HorizontalBlockDropdown blockContent={situationCenter} />
            <HorizontalBlockDropdown blockContent={analysis} />
            <HorizontalBlockDropdown blockContent={vulnerabilitiesScan} />
            <HorizontalBlockDropdown blockContent={analytics} />
            <HorizontalBlockUnnamed blockContent={unnamedBlock} />
            <LargeImage imageUrl={imageUrls.img3} />
            <HorizontalBlock blockContent={aboutUs} />
        </div>
    );
};

export default MainPage;
