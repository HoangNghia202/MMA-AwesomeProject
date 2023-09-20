import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    ScrollView,
} from "react-native";

export default function ScrollScreen() {
    return (
        <ScrollView>
            <ScrollView>
                <View
                    style={{ width: 100, height: 100, backgroundColor: "blue" }}
                ></View>
                <View
                    style={{ width: 100, height: 100, backgroundColor: "blue" }}
                ></View>
                <View
                    style={{ width: 100, height: 100, backgroundColor: "blue" }}
                ></View>
            </ScrollView>
        </ScrollView>
    );
}
