import * as React from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ListItem } from "react-native-elements";
import { OperatingSystem, Genre, Language } from "../types/index";
import CategoryValueButton from "./CategoryValueButton";
import layout from "../../constants/ScreenLayout";
import CategoryValueContainer from "./CategoryValueContainer";
type Props = {
  removePlatform(value: OperatingSystem): void;
  addPlatform(value: OperatingSystem): void;
  genreFilters: Genre[];
};
const FiltersBottomSheet = (props: Props) => {
  return (
    <View style={styles.container}>
      <ListItem>
        <Entypo name="laptop" size={24} color="black" />
        <ListItem.Content>
          <ListItem.Title>Operating Systems</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ScrollView
        style={styles.categoryValuesContainer}
        contentContainerStyle={styles.contentContainer}
        horizontal>
        <CategoryValueButton
          add={props.addPlatform}
          remove={props.removePlatform}
          icon="windows"
          title="Windows"
        />
        <CategoryValueButton
          add={props.addPlatform}
          remove={props.removePlatform}
          icon="apple"
          title="Mac OS X"
        />
        <CategoryValueButton
          add={props.addPlatform}
          remove={props.removePlatform}
          icon="linux"
          title="Linux"
        />
      </ScrollView>
      <ListItem Component={TouchableOpacity}>
        <Entypo name="open-book" size={24} color="black" />
        <ListItem.Content>
          <ListItem.Title style={styles.titleStyle}>Genres</ListItem.Title>
        </ListItem.Content>
        {props.genreFilters.length === 0 ? null : (
          <ListItem.Subtitle style={styles.subtitle}>
            {props.genreFilters.join(" ")}
          </ListItem.Subtitle>
        )}
        <ListItem.Chevron />
      </ListItem>
      <ScrollView
        style={styles.categoryValuesContainer}
        contentContainerStyle={styles.contentContainer}
        horizontal>
          <CategoryValueButton
          add={props.addPlatform}
          remove={props.removePlatform}
          title="Action"
        />
        <CategoryValueButton
          add={props.addPlatform}
          remove={props.removePlatform}
          title="Casual"
        />
        <CategoryValueButton
          add={props.addPlatform}
          remove={props.removePlatform}
          title="RPG"
        />
        <CategoryValueButton
          add={props.addPlatform}
          remove={props.removePlatform}
          title="Strategy"
        />
        <CategoryValueButton
          add={props.addPlatform}
          remove={props.removePlatform}
          title="Adventure"
        />
        <CategoryValueButton
          add={props.addPlatform}
          remove={props.removePlatform}
          title="Simulation"
        />
        <CategoryValueButton
          add={props.addPlatform}
          remove={props.removePlatform}
          title="Sports"
        />
      </ScrollView>
      <ListItem Component={TouchableOpacity}>
        <Entypo name="price-tag" size={24} color="black" />
        <ListItem.Content>
          <ListItem.Title style={styles.titleStyle}>Price</ListItem.Title>
        </ListItem.Content>
        {props.genreFilters.length === 0 ? null : (
          <ListItem.Subtitle style={styles.subtitle}>
            {props.genreFilters.join(" ")}
          </ListItem.Subtitle>
        )}
        <ListItem.Chevron />
      </ListItem>

      <ListItem Component={TouchableOpacity}>
        <Entypo name="language" size={24} color="black" />
        <ListItem.Content>
          <ListItem.Title style={styles.titleStyle}>Languages</ListItem.Title>
        </ListItem.Content>
        {props.genreFilters.length === 0 ? null : (
          <ListItem.Subtitle style={styles.subtitle}>
            {props.genreFilters.join(" ")}
          </ListItem.Subtitle>
        )}
        <ListItem.Chevron />
      </ListItem>
    </View>
  );
};

export default FiltersBottomSheet;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
    flex: 1,
    justifyContent: "flex-end",
  },
  categoryValuesContainer: {
    padding:14,
    flex: 0,
    height: 35,
    overflow: "visible",
  },
  contentContainer: {
    flexGrow: 0,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    flex: 0,
    padding:10,
    flexDirection: "column",
    width: layout.window.width,
  },
  titleStyle: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
  },
});
