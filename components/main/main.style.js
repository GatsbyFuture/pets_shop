import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    // main container
    container: {
        flex: 1,
        backgroundColor: "#FBFBFB"
    },
    // top bar style
    topBar: {
        height: 50,
        backgroundColor: "#FBFBFB",
        justifyContent: "center",
        shadowColor: "#000", // Soya rangi
        shadowOffset: {width: 0, height: 2}, // Pastga yo‘naltirilgan soya
        shadowOpacity: 0.25, // Shaffoflik
        shadowRadius: 3.84, // Yumshoqlik
        elevation: 5, // Android uchun
    },
    topBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    logo: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        borderWidth: 1,
        borderColor: "#3b5998"
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 5,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: "#3b5998",
        width: "85%", // Inputning kengligini sozlash
    },
    searchIcon: {
        marginRight: 5,
    },
    searchInput: {
        flex: 1,
        height: 40,
        color: "#000",
        fontSize: 16,
    },
    // body
    body: {
        flex: 1,
    },
    content: {
        paddingTop: 12,
        paddingHorizontal: 12,
    },
    item: {
        flexDirection: "row", // Chap va o‘ng qismlarni yonma-yon joylashtirish
        marginBottom: 15,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#eee",
    },
    imageContainer: {
        width: "30%", // Rasm uchun 30%
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: 150, // Rasm balandligini o‘zingiz sozlashingiz mumkin
        borderRadius: 5,
    },
    infoContainer: {
        width: "70%", // Ma’lumotlar uchun 70%
        paddingLeft: 10,
    },
    btnContainer: {
        width: "100%",
    },
    nickName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    desc: {
        fontSize: 14,
        color: "#555",
        marginBottom: 5,
    },
    date: {
        fontSize: 12,
        color: "#888",
    },
    age: {
        fontSize: 14,
        color: "#333",
    },
    status: {
        fontSize: 14,
        color: item => (item.isFree ? "#00cc00" : "#ff0000"), // Bu dinamik rang ishlamaydi, shunchaki misol
    },
    footer: {
        height: 50,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: "row",
        backgroundColor: "#FBFBFB",
        justifyContent: "space-around",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: -4},
        shadowOpacity: 0.7, // Shaffoflik
        shadowRadius: 6, // Yumshoqlik
        elevation: 5, // Android uchun
    },
    footerSearchCon: {
        width: 60,
        height: 60,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#f0f0f0",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -15
    },
    footerSearch: {
        width: 60,
        height: 60,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#3b5998",
        justifyContent: "center",
        alignItems: "center",
    },
    footerFilter: {
        width: 50,
        height: 50,
        borderRadius: 22,
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#3b5998",
        justifyContent: "center",
        alignItems: "center",
    },
    footerSign: {
        width: 50,
        height: 50,
        borderRadius: 22,
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#3b5998",
        justifyContent: "center",
        alignItems: "center",
    },
    // bottom sheet
    bottomSheetStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.59,
        shadowRadius: 2.30,
        elevation: 24,
    },
    bottomSheetMain: {
        flex: 1
    },
    btmHeaderT: {
        color: "#3b5998",
        textAlign: "center",
        fontSize: 18,
    }
});