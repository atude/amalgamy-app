import * as React from "react";
import { StyleSheet } from "react-native";
import axios from "axios";
import { Text, View } from "../components/Themed";
import gameIds from "../data/gameIds"


type GamesHomeProps = {};
type GamesHomeState = {
    recommendedGames: Array<object>,
    trendingGames: Array<object>,
    topSellingGames: Array<object>
};
export default class GamesHome extends React.Component<GamesHomeProps, GamesHomeState> {
    constructor(props: GamesHomeProps) {
        super(props);
        this.state = {
            recommendedGames: [],
            trendingGames: [],
            topSellingGames: []
        }
    }
    getGameDetails = (appId: number) => {
        return new Promise((resolve, reject) => {
            axios.get(`http://store.steampowered.com/api/appdetails?appids=${appId}&cc=au&l=en`)
                .then((res) => {
                    resolve([appId, res])
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
    getAllGames = () => {
        const allGamePromises = gameIds.map((game) => {
            return this.getGameDetails(game.appid)
        })
        Promise.all(allGamePromises)
            .then((values) => {
                this.setState({
                    recommendedGames: [...this.state.recommendedGames, values]
                })
            })
    }
    recommendedGamesList = () => {
        return this.state.recommendedGames.map((game: any, index) => {
            let [appId, res] = game;
            let data = res[appId].data;
            return <Text key={index}>{data.name}</Text>
        })
    }
    componentDidMount() {
        // this.getAllGames();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Games Home</Text>
                <View
                    style={styles.separator}
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
