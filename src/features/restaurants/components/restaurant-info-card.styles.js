import { Image, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

// export const Address = styled(Text)({
//   fontFamily: (props) => props.theme.fonts.body,
//   fontSize: (props) => props.theme.fontSizes.body,
//   color: (props) => props.theme.colors.ui.primary,
//   fontWeight: (props) => props.theme.fontWeights.bold,
// });

export const RestaurantCard = styled(Card)({
  overflow: "hidden",
  backgroundColor: (props) => props.theme.colors.bg.primary,
});

export const RestaurantCardCover = styled(Card.Cover)({
  backgroundColor: (props) => props.theme.colors.bg.primary,
  borderRadius: 0,
  padding: (props) => props.theme.spacing[2],
});

export const RestaurantInfo = styled(View)({
  padding: (props) => props.theme.spacing[2],
});

export const IconsSection = styled(View)({
  flexDirection: "row",
  alignItems: "center",
  paddingTop: (props) => props.theme.spacing[2],
  paddingBottom: (props) => props.theme.spacing[2],
  // paddingLeft: (props) => props.theme.spacing[2],
  paddingRight: (props) => props.theme.spacing[2],
});

export const IconsSectionEnd = styled(View)({
  flexDirection: "row",
  flex: 1,
  justifyContent: "flex-end",
});

export const Rating = styled(View)({
  flexDirection: "row",
});

export const Icon = styled(Image)({
  width: "15px",
  height: "15px",
});
