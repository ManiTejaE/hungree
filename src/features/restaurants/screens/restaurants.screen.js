import React, { useState } from "react";
import { FlatList, Platform, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView as SFA } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Spacer from "../../../components/spacer/spacer.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const SafeAreaView = styled(SFA)({
  // flex: 1,
});

const SearchView = styled(View)({
  justifyContent: "center",
  margin: (props) => props.theme.spacing[3],
});

const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})({});

const isAndroid = Platform.OS === "android";

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SearchView>
        <Searchbar
          placeholder=""
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchView>
      <RestaurantsList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
        ]}
        renderItem={() => (
          <Spacer position={"bottom"} size={"large"}>
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};

export default RestaurantsScreen;
