import * as React from "react";
import { Text, StyleSheet, View, ScrollView, TextInput } from "react-native";
import Colors from "../../../constants/Colors";
import layout from "../../../constants/ScreenLayout";
import { priceItem, commonPriceList } from "../../../constants/FilterValues";
import PriceValueButton from "../PriceValueButton";
import { Divider } from "react-native-elements";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { useEffect } from "react";
import { Entypo } from "@expo/vector-icons";

type Props = {
  setPriceMin(value: number): void;
  setPriceMax(value: number): void;
  priceMin: number;
  priceMax: number;
};
export default function PriceMenu(props: Props) {
  const { priceMin, priceMax } = props;
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [isError, setError] = useState("");
  const handleMinChange = (value: string) => {
    const isnum = /^\d+$/.test(value);
    if (isnum) {
      setMin(value);
      props.setPriceMin(parseInt(value) * 100);
    }
    if (value === "") {
      setMin("");
      props.setPriceMin(-1);
    }
  };
  useEffect(() => {
    if (priceMin !== -1) {
      setMin((priceMin / 100).toString());
    }
    if (priceMax !== -1) {
      setMax((priceMax / 100).toString());
    }
    if (priceMin > priceMax) {
      setError("Minimum must be less than maximum");
    } else {
      setError("");
    }
  });
  const handleMaxChange = (value: string) => {
    const isnum = /^\d+$/.test(value);
    if (value === "") {
      setMax("");
      props.setPriceMax(-1);
    } else if (isnum) {
      setMax(value);
      props.setPriceMax(parseInt(value) * 100);
    }
  };
  const resetPrices = () => {
    setMin("");
    setMax("");
    props.setPriceMax(-1);
    props.setPriceMin(-1);
  };
  return (
    <View style={styles.innerContainer}>
      <Text style={styles.title}>Popular Price Ranges</Text>
      <ScrollView
        style={styles.categoryValuesContainer}
        contentContainerStyle={styles.contentContainer}
        horizontal
      >
        {commonPriceList.map((p: priceItem, i) => {
          return (
            <PriceValueButton
              key={i}
              max={p.max}
              min={p.min}
              title={p.title}
              setPriceMin={props.setPriceMin}
              setPriceMax={props.setPriceMax}
              priceMin={priceMin}
              priceMax={priceMax}
            />
          );
        })}
      </ScrollView>
      <Divider
        style={{
          backgroundColor: Colors.light.lightgrey3,
          height: 1,
          width: "90%",
          marginLeft: "5%",
        }}
      />
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={styles.title}>Enter Your Price Range</Text>
        <Button
          onPress={resetPrices}
          icon={{
            name: "refresh",
            size: 15,
            color: Colors.light.primary,
          }}
          type="outline"
          title="Reset"
          buttonStyle={{
            borderColor: Colors.light.primary,
            borderWidth: 1,
            borderRadius: 500,
            justifyContent: "center",
            padding: 5,
            height: 30,
            alignItems: "center",
            paddingRight: 15,
            marginRight: 20,
            width: 100,
          }}
          titleStyle={{ fontSize: 16, color: Colors.light.primary }}
        />
      </View>
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TextInput
          onChangeText={handleMinChange}
          placeholder="$ Min."
          value={min}
          style={styles.inputBar}
        />
        <Entypo
          name="minus"
          size={28}
          color="black"
        />
        <TextInput
          onChangeText={handleMaxChange}
          placeholder="$ Max."
          value={max}
          style={styles.inputBar}
        />
      </View>
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View style={{ flex: 1, paddingHorizontal: 25 }}>
          <Text style={{ textAlign: "left" }}>Min.</Text>
        </View>
        <View style={{ flex: 1, paddingHorizontal: 25 }}>
          <Text style={{ textAlign: "right" }}>Max.</Text>
        </View>
      </View>
      {isError !== "" ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMsg}>{isError}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "white",
    width: layout.window.width,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 0,
  },
  title: {
    flexGrow: 1,
    fontSize: 18,
    paddingLeft: 20,
    fontWeight: "400",
    color: Colors.light.darkgrey,
  },
  categoryValuesContainer: {
    padding: 20,
    height: 80,
    width: "90%",
    overflow: "visible",
  },
  contentContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.light.lightgrey3,
    marginTop: 5,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginHorizontal: 20,
  },
  subtitle: {},
  errorMsg: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
  errorContainer: {
    padding: 10,
    marginTop: 20,
    borderColor: "red",
    borderWidth: 1,
    marginHorizontal: 20,
    width: layout.window.width - 40,
  },
});
