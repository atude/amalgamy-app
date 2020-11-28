import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import { Text, View } from "../components/Themed";
import gameIds from "../data/gameIds"
import { hasKey } from "../utils/index"
import GameListItem from "../components/games/GameListItem"
import layout from "../constants/ScreenLayout"

type ExtractedGameData = {
    name: string,
    platforms: object,
    header_image: string,
    genres: object[],
    steam_appid: number
}
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
                    if (!this.extractStatus(res.data)) {
                        console.log(`failed: ${appId}`)
                    } else {

                        this.setState({
                            recommendedGames: [...this.state.recommendedGames, this.extractGameRequestData(res.data)]
                        }, () => {
                            resolve(res)
                        })
                    }

                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
    getAllGames = () => {
        // return new Promise((resolve, reject) => {
        //     axios.get(`http://store.steampowered.com/api/appdetails?appids=12170&cc=au&l=en`)
        //         .then((res) => {
        //             this.setState({
        //                 recommendedGames: [this.extractGameRequestData(res.data)]
        //             }, () => {
        //                 resolve(res)
        //             })

        //         })
        //         .catch((err) => {
        //             reject(err)
        //         })
        // })
        const allGamePromises = gameIds.map((game) => {
            return this.getGameDetails(game.appid)
        })
        Promise.all(allGamePromises)
    }
    recommendedGamesList = () => {
        return this.state.recommendedGames.map((game: any, index) => {
            // let [appId, res] = game;
            // let data = res[appId].data;
            if (game.name === "failed") {
                return <Text key={index}>{game.name}</Text>
            }
            return <GameListItem key={index} gameId={game.steam_appid} gameName={game.name} gameImage={game.header_image} genres={game.genres} />
        })
    }
    extractStatus = (resultData: { [key: string]: any }) => {
        let id = Object.keys(resultData)[0];
        return resultData[id.toString()].success;

    }
    extractGameRequestData = (resultData: { [key: string]: { data: ExtractedGameData } }) => {
        let id = Object.keys(resultData)[0];
        if (hasKey(resultData, id.toString())) {
            let data = resultData[id.toString()].data;
            if (typeof data === "undefined") {
                return { "name": "failed" }
            }

            return {
                "name": data.name,
                "platforms": data.platforms,
                "header_image": data["header_image"],
                "genres": data.genres || [],
                "steam_appid": data.steam_appid
            }
        }
        return { "name": "failed" }

    }
    componentDidMount() {
        this.getAllGames();
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Games Home</Text>
                <View
                    style={styles.separator}
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                />
                {this.recommendedGamesList()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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
