import {Text, View} from "react-native";
import Loader from "../components/loader";
import Main from "../components/main/main";
import {useEffect, useState} from "react";

export default function Index() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return isLoading ? (
        <Loader/>
    ) : (
        <Main/>
    );
}
