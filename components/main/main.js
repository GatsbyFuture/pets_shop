import React, {useCallback, useMemo, useRef, useState} from "react";
import {TextInput, Text, View, ScrollView, Image, TouchableOpacity, Button} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faArrowDownWideShort,
    faPaperPlane,
    faRightToBracket,
    faSearch
} from "@fortawesome/free-solid-svg-icons";
// filter
import FilterBottomSheet from "../filterBottomSheet/filter";
// styles of main
import {styles} from "./main.style";
// mock data
import {animalsData} from "../../mock_data/animals";

export default function Main() {
    const [animals, setAnimals] = useState(animalsData);
    const searchInputRef = useRef(null);
    const sheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ["65%", "65%"], []);

    // searching
    const handleSearchPress = () => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    };
    // callbacks
    const handleSheetChange = useCallback((index) => {
        console.log("handleSheetChange", index);
    }, []);
    const handleSnapPress = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);

    // render
    return (
        <GestureHandlerRootView style={styles.container}>
            {/* Top Bar Section */}
            <View style={styles.topBar}>
                <View style={styles.topBarContainer}>
                    <Image
                        source={require("../../assets/custom/images/pets.logo.jpg")}
                        style={styles.logo}
                        resizeMode="cover"
                    />
                    <View style={styles.searchContainer}>
                        <FontAwesomeIcon icon={faSearch} size={15} color="#3b5998" style={styles.searchIcon}/>
                        <TextInput
                            ref={searchInputRef}
                            style={styles.searchInput}
                            placeholder="Qidiruv..."
                            placeholderTextColor="#888"
                            onChangeText={(text) => console.log("Qidiruv matni:", text)} // Matn o‘zgarganda ishlaydi
                        />
                    </View>
                </View>
            </View>
            {/* Body Section with ScrollView */}
            <ScrollView style={styles.body}>
                <View style={styles.content}>
                    {animals.map((item) => (
                        <View key={item.id} style={styles.item}>
                            {/* Chap tarafdagi rasm */}
                            <View style={styles.imageContainer}>
                                <Image
                                    source={{uri: item.image}} // Agar lokal rasm bo‘lsa, require ishlatiladi
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                            </View>

                            {/* O‘ng tarafdagi ma’lumotlar */}
                            <View style={styles.infoContainer}>
                                <Text style={styles.nickName}>{item.nick_name}</Text>
                                <Text style={styles.desc}>{item.desc}</Text>
                                <Text style={styles.age}>Yosh: {item.age}</Text>
                                <Text style={styles.status}>
                                    Holat: {item.isFree ? "Bepul" : "Pullik"}
                                </Text>
                                <Text style={styles.date}>
                                    Yaratilgan: {item.createdAt}
                                </Text>
                                <View style={styles.btnContainer}>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: "#3b5998",
                                            padding: 10,
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                        onPress={() => console.log("Button pressed")}
                                    >
                                        <FontAwesomeIcon icon={faPaperPlane} size={20} color="white"/>
                                        <Text style={{color: "white", marginLeft: 5}}>Contact</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
            {/* footer for search, filter and sign*/}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.footerFilter}
                    onPress={() => handleSnapPress(1)}
                >
                    <FontAwesomeIcon
                        icon={faArrowDownWideShort}
                        size={15}
                        color="white"
                    />
                </TouchableOpacity>
                <View style={styles.footerSearchCon}>
                    <TouchableOpacity
                        style={styles.footerSearch}
                        onPress={handleSearchPress}
                    >
                        <FontAwesomeIcon
                            icon={faSearch}
                            size={18}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.footerSign}
                    onPress={() => console.log("Button pressed")}
                >
                    <FontAwesomeIcon
                        icon={faRightToBracket}
                        size={15}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={snapPoints}
                enableDynamicSizing={false}
                enablePanDownToClose={true} // true qiymat olsa qo'l bilan pastga surib yopib yuborsa bo'ladi
                onChange={handleSheetChange}
                backgroundStyle={styles.bottomSheetStyle}
            >
                {/*<BottomSheetView style={styles.bottomSheetMain}>*/}
                {/*    <Text style={styles.btmHeaderT}>BARCHA FILTERLAR</Text>*/}

                {/*</BottomSheetView>*/}
                <FilterBottomSheet/>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};
