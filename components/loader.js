import {StyleSheet} from "react-native";
import AnimatedLoader from "react-native-animated-loader";

export default function Loader() {
    return (
        <AnimatedLoader
            visible={true}
            overlayColor="3FD6AA"
            source={require("../assets/custom/loader.cat.json")}
            animationStyle={styles.lottie}
            speed={1}
        >
        </AnimatedLoader>
    );
}

const styles = StyleSheet.create({
    lottie: {
        width: 200,
        height: 200
    }
});