import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    Alert,
    Switch,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-web";
export default function App({ navigation, route }) {
    const [text, setText] = useState("Hello nghia");
    const [isEnabled, setIsEnabled] = useState(false);
    const inputAccessoryViewId = "uniqueID";
    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.hello}> You entered {text} </Text>
                <View style={styles.box}></View>
                <StatusBar style="auto" />
                <Image
                    style={styles.image}
                    source={require("./assets/favicon.png")}
                />
                <Button
                    title="click me"
                    style={styles.button}
                    onPress={() => Alert.alert("you press button")}
                />
                <TextInput
                    onChangeText={(text) => setText(text)}
                    placeholder="Input hear"
                ></TextInput>
                <Switch
                    value={isEnabled}
                    onValueChange={(value) => setIsEnabled(value)}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={true ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                />

                <View style={styles.large}>
                    <ScrollView horizontal>
                        <View style={styles.small}></View>
                        <View style={styles.small}></View>
                        <View style={styles.small}></View>
                    </ScrollView>
                    <View styles={styles.large}></View>
                    <View styles={styles.large}></View>
                    <View styles={styles.large}></View>
                </View>
            </View>
        </ScrollView>
    );
}

// export default function NavigatorCom() {
//   return(
//     <NavigationContainer>
//       <Root.Navigator>
//         <Root.Screen name="Home" component={App} />
//         <Root.Screen name="Scroll" component={ScrollScreen} />
//       </Root.Navigator>
//     </NavigationContainer>
//   )
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    hello: {
        padding: 10,
        backgroundColor: "#fffeee",
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        borderRadius: 10,
        boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    },
    image: {
        width: 200,
        height: 200,
    },
    button: {
        padding: 10,
        backgroundColor: "red",
    },

    large: {
        width: "100%",
        height: 300,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: "steelblue",
    },

    small: {
        width: 200,
        height: 200,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: "shyblue",
    },

    container: {
        flex: 1,
    },
});
