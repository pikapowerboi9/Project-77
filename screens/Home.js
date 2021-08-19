import React, { Component } from "react";
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/space.gif')} style={styles.backgroundImage}>
                <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Stellar App</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SpaceCrafts")
                    }>
                        <Text style={styles.routeText}>Space Crafts</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}>1</Text>
                        <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("StarMap")
                    }>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}>2</Text>
                        <Image source={require("../assets/star_map.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("DailyPic")
                    }>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}>3</Text>
                        <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }
}