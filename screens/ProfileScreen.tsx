import * as React from "react";
import { ProfileAvatar } from "../components/profile/ProfileAvatar"
import ProfileMenuItem from "../components/profile/ProfileMenuItem"
import { Layout, Text, View } from "../components/Themed";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const DUMMY_PROFILE = {
	firstName: "Mozamel",
	lastName: "Anwary",
	avatar: "../../assets/images/icon.png"
}

const OPTIONS = [
	{
		optionText: "Account",
		link: "askldfj"
	},
	{
		optionText: "Connected Services",
		link: "askldfj"
	},
	{
		optionText: "Saved Games",
		link: "askldfj"
	},
	{
		optionText: "Reviews",
		link: "askldfj"
	}
]

export default function ProfileScreen() {
	return (
		<Layout>
			<ProfileAvatar
				firstName={DUMMY_PROFILE.firstName}
				lastName={DUMMY_PROFILE.lastName}
				avatar={DUMMY_PROFILE.avatar} />
			<View style={styles.menuContainer}>
				{
					OPTIONS.map((option) => (
						<ProfileMenuItem
							optionText={option.optionText}
							pageLink={option.link}
						/>
					))
				}
			</View>
		</Layout>
	);
}

const styles = StyleSheet.create({
	menuContainer:{
		flex:1,
		alignContent:"flex-start"
	}
})