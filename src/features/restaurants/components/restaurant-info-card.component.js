import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import Star from "../../../assets/icons/star.js";
import Open from "../../../assets/icons/open.js";
import Spacer from "../../../components/spacer/spacer.component.js";
import Text from "../../../components/typography/text.component.js";

import {
  Icon,
  IconsSection,
  IconsSectionEnd,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  RestaurantInfo,
} from "./restaurant-info-card.styles.js";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <RestaurantInfo>
        <Text variant={"label"}>{name}</Text>
        <IconsSection>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={Star} width={20} height={20} />
            ))}
          </Rating>
          <IconsSectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position={"left"} size={"large"}>
              {isOpenNow && <SvgXml xml={Open} width={20} height={20} />}
            </Spacer>
            <Spacer position={"left"} size={"large"}>
              <Icon source={{ uri: icon }} />
            </Spacer>
          </IconsSectionEnd>
        </IconsSection>
        <Text variant={"body"}>{address}</Text>
      </RestaurantInfo>
      <Card.Content />
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
