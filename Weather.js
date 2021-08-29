import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#373B44", "#4286f4"],
        title: "천둥",
        subtitle: "천둥이 치니 야외 활동을 자제하세요."
    },
    Drizzle: {
        iconName: "cloud-drizzle",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "이슬비",
        subtitle: "비가 조금 떨어집니다."
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "비",
        subtitle: "비가 내리니 우산을 챙기세요."
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "눈",
        subtitle: "눈이 내리고 있어요."
    },
    Clear: {
        iconName: "sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "맑음",
        subtitle: "야외 활동을 즐기세요."
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "흐림",
        subtitle: "비가 올 수도 있으니 우산을 챙기세요."
    }
}

export default function Weather({ temp, condition }){
     return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name="weather-cloudy" size={96} color="white"></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}°</Text> 
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Clear", "Clouds"]).isRequired
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    }
})