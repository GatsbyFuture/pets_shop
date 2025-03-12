// import React, {useEffect, useState} from "react";
// import {GestureHandlerRootView} from "react-native-gesture-handler";
// import Main from "../components/main/main";
//
// export default function Index() {
//     const [isLoading, setIsLoading] = useState(true);
//
//     useEffect(() => {
//         setTimeout(() => {
//             setIsLoading(false);
//         }, 2000);
//     }, []);
//
//     return (
//         <GestureHandlerRootView style={{flex: 1}}>
//             {isLoading ? <Loader/> : <Main/>}
//         </GestureHandlerRootView>
//     );
// }
// import {StyleSheet, View, Text, Button} from "react-native";
// import {GestureHandlerRootView} from "react-native-gesture-handler";
// import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import React, {useState, useEffect} from "react";
// import Loader from "../components/loader";
import Main from "../components/main/main";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    return (
        <Main/>
    );
};

export default App;