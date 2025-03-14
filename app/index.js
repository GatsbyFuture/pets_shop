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


import React, {useState, useEffect} from "react";
import Loader from "../components/loader";
import Main from "../components/main/main";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    return isLoading ? (<Loader/>) : (<Main/>);

};

export default App;
