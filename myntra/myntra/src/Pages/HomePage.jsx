import React from "react";
import { Box, Image } from "@chakra-ui/react";
import {
  bannerDiscountpic,
  BestofBeautyHeading,
  BestofBeautyImages,
  scndbanner,
  wardrobeheading,
  wardrobeImages,
  BudgetBuysheading,
  BudgetBuysImages,
  BestofClothingheading,
  BestofClothingimages,
  BestofInnerwareHeading,
  BestofInnerwareImages,
  BestofFootwearHeading,
  BestofFootwearImages,
  BestofKidsHeading,
  BestofKidsImages,
  BestofAccessoriesHeading,
  BestofAccessoriesImages,
  BestofHomeFurnshingHeading,
  BestofHomeFurnishingImages,
  ShopByCategoryHeading,
  ShopByCategoryImages,
} from "../HomePageData/HomepageData";

export const HomePage = () => {
  return (
    <Box>
      <Box>
        <Box w="100%" h="80px"></Box>
        <Box w="100%" h="400px">
          <Image margin="auto" src={bannerDiscountpic.image} alt="banner" />
        </Box>
        <Box w="100%" h="200px" marginTop="5px" display={"flex"}>
          <Image w="100%" src={scndbanner.image1} alt="banner" />
          <Image src={scndbanner.image2} alt="banner" />
        </Box>
      </Box>
      <Box w="100%" h="auto" marginTop={"3rem"}>
        <Image src={wardrobeheading.heading} alt="wardrobeheading" />
        <Box
          w="100%"
          h="88.6%"
          bg="rgb(246,245,250)"
          display="grid"
          gridTemplateColumns={"repeat(5,1fr)"}
        >
          {wardrobeImages.map((img) => (
            <Image key={img.id} src={img.image} />
          ))}
        </Box>
        <GridOFfive Arrheading={BudgetBuysheading} Arr={BudgetBuysImages} />
        <GridOFfive
          Arrheading={BestofClothingheading}
          Arr={BestofClothingimages}
        />
        <GridOFfive
          Arrheading={BestofInnerwareHeading}
          Arr={BestofInnerwareImages}
        />
        <GridOFfive
          Arrheading={BestofFootwearHeading}
          Arr={BestofFootwearImages}
        />
        <GridOFfive Arrheading={BestofKidsHeading} Arr={BestofKidsImages} />
        <GridOFfive Arrheading={BestofBeautyHeading} Arr={BestofBeautyImages} />
        <GridOFfive
          Arrheading={BestofAccessoriesHeading}
          Arr={BestofAccessoriesImages}
        />
        <GridOFfive
          Arrheading={BestofHomeFurnshingHeading}
          Arr={BestofHomeFurnishingImages}
        />
        <Image src={ShopByCategoryHeading.heading} alt="wardrobeheading" />
        <Box
          w="100%"
          h="88.6%"
          bg="white"
          display="grid"
          gridTemplateColumns={"repeat(6,1fr)"}
        >
          {ShopByCategoryImages.map((img) => (
            <Image key={img.id} src={img.image} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const GridOFfive = ({ Arrheading, Arr }) => {
  return (
    <>
      <Image src={Arrheading.heading} alt="wardrobeheading" />
      <Box
        w="100%"
        h="88.6%"
        display="grid"
        gridTemplateColumns={"repeat(5,1fr)"}
      >
        {Arr.map((img) => (
          <Image key={img.id} src={img.image} />
        ))}
      </Box>
    </>
  );
};
