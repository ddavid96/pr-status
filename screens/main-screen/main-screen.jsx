import React, { useState } from "react";
import Container from "../../components/container/container";
import PullRequest from "../../components/pull-request/pull-request";
import { RefreshControl, SafeAreaView, ScrollView, View } from "react-native";
import { theme } from "../../theme";
import withStateHandling from "../../hoc/with-state-handling/with-state-handling";

const ID_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const ScrollViewWithStateHandling = withStateHandling(ScrollView);

const MainScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [removedItems, setRemovedItems] = useState([]);
  const filteredData = ID_ARRAY.filter((id) => !removedItems.includes(id));

  return (
    <Container>
      <SafeAreaView>
        <ScrollViewWithStateHandling
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => setRefreshing(true)}
              tintColor={theme.dark.accent}
              title="Pull to refresh"
              titleColor={theme.dark.accent}
            />
          }
          isEmpty={!filteredData.length}
          emptyMessage="You' re all caught up!"
        >
          {ID_ARRAY.filter((id) => !removedItems.includes(id)).map((id) => (
            <PullRequest
              key={id}
              onRemove={() => setRemovedItems([...removedItems, id])}
            />
          ))}
        </ScrollViewWithStateHandling>
      </SafeAreaView>
    </Container>
  );
};

export default MainScreen;
