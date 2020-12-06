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
import { OperatingSystem, Genre, Language } from "../../types/index";
import CategoryValueButton from "./CategoryValueButton";
import layout from "../../constants/ScreenLayout";
import { genresList, languageList } from "../../constants/FilterValues";
import FilterActions from "./FilterActions";
type Props = {
  removePlatform(value: OperatingSystem): void;
  addPlatform(value: OperatingSystem): void;
  genreFilters: string[];
  addGenre(value: string): void;
  removeGenre(value: string): void;
  platformFilters: OperatingSystem[];
  openMenu(value: string): void;
  languageFilters: string[];
  addLanguage(value: string): void;
  removeLanguage(value: string): void;
  priceMin: number;
  priceMax: number;
  applyFilters(): void;
};

const FiltersBottomSheet = (props: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ListItem>
          <Entypo name="laptop" size={24} color="black" />
          <ListItem.Content>
            <ListItem.Title>Operating Systems</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ScrollView
          style={styles.categoryValuesContainer}
          contentContainerStyle={styles.contentContainer}
          horizontal
        >
          <CategoryValueButton
            add={props.addPlatform}
            remove={props.removePlatform}
            icon="windows"
            title="Windows"
            parentFilters={props.platformFilters}
          />
          <CategoryValueButton
            add={props.addPlatform}
            remove={props.removePlatform}
            icon="apple"
            title="Mac OS X"
            parentFilters={props.platformFilters}
          />
          <CategoryValueButton
            add={props.addPlatform}
            remove={props.removePlatform}
            icon="linux"
            title="Linux"
            parentFilters={props.platformFilters}
          />
        </ScrollView>
        <ListItem
          Component={TouchableOpacity}
          onPress={() => props.openMenu("genres")}
        >
          <Entypo name="open-book" size={24} color="black" />
          <ListItem.Content>
            <ListItem.Title style={styles.titleStyle}>Genres</ListItem.Title>
          </ListItem.Content>
          {props.genreFilters.length === 0 ? null : props.genreFilters.length <=
            3 ? (
            <ListItem.Subtitle style={styles.subtitle}>
              {props.genreFilters.join(", ")}
            </ListItem.Subtitle>
          ) : (
            <ListItem.Subtitle>({props.genreFilters.length})</ListItem.Subtitle>
          )}
          <ListItem.Chevron />
        </ListItem>
        <ScrollView
          style={styles.categoryValuesContainer}
          contentContainerStyle={styles.contentContainer}
          horizontal
        >
          {genresList.map((genreName, i) => {
            return (
              <CategoryValueButton
                key={i}
                add={props.addGenre}
                remove={props.removeGenre}
                title={genreName}
                parentFilters={props.genreFilters}
              />
            );
          })}
        </ScrollView>
        <ListItem
          Component={TouchableOpacity}
          onPress={() => props.openMenu("Price")}
        >
          <Entypo name="price-tag" size={24} color="black" />
          <ListItem.Content>
            <ListItem.Title style={styles.titleStyle}>Price</ListItem.Title>
          </ListItem.Content>
          {props.priceMin !== -1 && props.priceMax !== -1 ? (
            <ListItem.Subtitle style={styles.subtitle}>
              {props.priceMin !== -1 ? `$${props.priceMin / 100}` : "0"}
              {` - `}
              {props.priceMax !== -1 ? `$${props.priceMax / 100}` : "Any"}
            </ListItem.Subtitle>
          ) : null}
          <ListItem.Chevron />
        </ListItem>

        <ListItem
          Component={TouchableOpacity}
          onPress={() => props.openMenu("languages")}
        >
          <Entypo name="language" size={24} color="black" />
          <ListItem.Content>
            <ListItem.Title style={styles.titleStyle}>Languages</ListItem.Title>
          </ListItem.Content>
          {props.languageFilters.length === 0 ? null : props.languageFilters
              .length <= 1 ? (
            <ListItem.Subtitle style={styles.subtitle}>
              {props.languageFilters.join(", ")}
            </ListItem.Subtitle>
          ) : (
            <ListItem.Subtitle>
              ({props.languageFilters.length})
            </ListItem.Subtitle>
          )}
          <ListItem.Chevron />
        </ListItem>
        <ScrollView
          style={styles.categoryValuesContainer}
          contentContainerStyle={styles.contentContainer}
          horizontal
        >
          {languageList.map((genreName, i) => {
            return (
              <CategoryValueButton
                key={i}
                add={props.addLanguage}
                remove={props.removeLanguage}
                title={genreName}
                parentFilters={props.languageFilters}
              />
            );
          })}
        </ScrollView>
      </ScrollView>
      <FilterActions applyFilters={props.applyFilters} />
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
    padding: 14,
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
    flex: 1,
    padding: 10,
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
