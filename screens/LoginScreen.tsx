import React, { useContext, useEffect, useState } from "react";
import Firebase from "../config";
import { StatusBar } from "expo-status-bar";

import useColorScheme from "../hooks/useColorScheme";
import Navigation from "../navigation";
import { AppContext } from "../context";
import { firebaseUserToUser } from "../utils";
import { Button, Text, View } from "../components/Themed";
import { ColorScheme } from "../types";
import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { createAccount, signInEmail } from "../functions/auth";
import Colors from "../constants/Colors";
import Loading from "../components/shared/Loading";
import GlobalStyles from "../constants/GlobalStyles";

const LoginScreen = () => {
  const { user, setUser } = useContext(AppContext);
  const colorScheme = useColorScheme() ?? "light";
  const styles = createStyles(colorScheme);

  const [isLoadingUser, setLoadingUser] = useState(false);
  const [err, setError] = useState("");
  const [currScreen, setCurrScreen] = useState<
    undefined | "login" | "signup"
  >();
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleSignUp = async () => {
    setIsLoading(true);
    setError("");
    const errMsg = await createAccount(
      credentials.email,
      credentials.password,
      credentials.firstName,
      credentials.lastName,
    );
    if (!!errMsg) {
      setError(errMsg);
    }
    setIsLoading(false);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");
    const errMsg = await signInEmail(credentials.email, credentials.password);
    if (!!errMsg) {
      setError(errMsg);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser && firebaseUser.email) {
        setUser(firebaseUserToUser(firebaseUser));
        console.log("Auth state changed => " + firebaseUser.email);
      } else {
        setUser(undefined);
      }
      setLoadingUser(false);
    });
  }, []);

  useEffect(() => {
    setCredentials({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    });
  }, [currScreen]);

  useEffect(() => {
    setError("");
  }, [currScreen, credentials]);

  if (isLoadingUser) {
    return <Text>loading</Text>;
  } else if (!user) {
    return (
      <View style={styles.container}>
        {currScreen === undefined ? (
          <Image
            resizeMode="center"
            style={styles.loginIcon}
            source={require("../assets/images/amalgamy-logo.png")}
          />
        ) : (
          <>
            <Text style={styles.header}>
              {currScreen === "login" ? "Login" : "Sign Up"}
            </Text>
          </>
        )}
        <View style={{ flex: 1 }}>
          {currScreen === "signup" && (
            <>
              <View style={styles.inputMainContainer}>
                <TextInput
                  style={styles.inputMain}
                  placeholder="First Name"
                  value={credentials.firstName}
                  onChangeText={(value) =>
                    setCredentials({ ...credentials, firstName: value })
                  }
                />
              </View>
              <View style={styles.inputMainContainer}>
                <TextInput
                  style={styles.inputMain}
                  placeholder="Last Name"
                  value={credentials.lastName}
                  onChangeText={(value) =>
                    setCredentials({ ...credentials, lastName: value })
                  }
                />
              </View>
            </>
          )}
          {currScreen !== undefined && (
            <>
              <View style={styles.inputMainContainer}>
                <TextInput
                  style={styles.inputMain}
                  placeholder="Email Address"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="email"
                  value={credentials.email}
                  onChangeText={(value) =>
                    setCredentials({ ...credentials, email: value })
                  }
                />
              </View>
              <View style={styles.inputMainContainer}>
                <TextInput
                  style={styles.inputMain}
                  placeholder="Password"
                  secureTextEntry={true}
                  value={credentials.password}
                  onChangeText={(value) =>
                    setCredentials({ ...credentials, password: value })
                  }
                />
              </View>
            </>
          )}
          <Text style={styles.errorText}>{err}</Text>
          <View style={styles.buttonsContainer}>
            {currScreen === undefined && (
              <>
                <TouchableOpacity
                  style={[styles.button, styles.buttonSecondary]}
                  onPress={() => setCurrScreen("signup")}
                >
                  <Text style={styles.buttonTextSecondary}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonPrimary]}
                  onPress={() => setCurrScreen("login")}
                >
                  <Text style={styles.buttonTextPrimary}>Login</Text>
                </TouchableOpacity>
              </>
            )}
            {currScreen === "signup" && (
              <>
                <TouchableOpacity
                  style={[styles.button, styles.buttonBack]}
                  onPress={() => setCurrScreen(undefined)}
                >
                  <Text style={styles.buttonTextSecondary}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonPrimary]}
                  onPress={handleSignUp}
                >
                  <Text style={styles.buttonTextPrimary}>
                    Create an Account
                  </Text>
                </TouchableOpacity>
              </>
            )}
            {currScreen === "login" && (
              <>
                <TouchableOpacity
                  style={[styles.button, styles.buttonBack]}
                  onPress={() => setCurrScreen(undefined)}
                >
                  <Text style={styles.buttonTextSecondary}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonPrimary]}
                  onPress={handleLogin}
                >
                  <Text style={styles.buttonTextPrimary}>Login</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>
    );
  }
  // User logged in -> go to whatever
  return (
    <>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </>
  );
};

const createStyles = (colorScheme: ColorScheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "stretch",
      justifyContent: "center",
      height: "100%",
      width: "100%",
      padding: 50,
    },
    header: {
      fontSize: 36,
      fontWeight: "bold",
      marginVertical: 40,
      paddingBottom: 20,
    },
    buttonsContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-end",
    },
    button: {
      flex: 1,
      margin: 6,
      padding: 14,
      alignItems: "center",
      borderRadius: GlobalStyles.consts.borderRadius,
    },
    buttonPrimary: {
      backgroundColor: Colors[colorScheme].primary,
    },
    buttonSecondary: {
      backgroundColor: Colors[colorScheme].lightgrey2,
    },
    buttonBack: {
      flex: 0.3,
      backgroundColor: Colors[colorScheme].lightgrey2,
    },
    buttonTextPrimary: {
      color: Colors[colorScheme].background,
    },
    buttonTextSecondary: {
      color: Colors[colorScheme].primary,
    },
    inputMainContainer: {
      marginBottom: 10,
      padding: 14,
      borderRadius: 11,
      backgroundColor: Colors[colorScheme].lightgrey2,
    },
    inputMain: {},
    loginIcon: {
      flex: 1,
      alignSelf: "center",
    },
    errorText: {
      textAlign: "center",
      padding: 10,
      color: Colors[colorScheme].red,
    },
  });

export default LoginScreen;
