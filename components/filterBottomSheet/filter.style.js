import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    bottomSheetMain: {
        padding: 18,
        backgroundColor: "#fff",
    },
    btmHeaderT: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center"
    },
    // label
    label: {
        fontSize: 16,
        marginBottom: 5,
        marginHorizontal: 2
    },
    // region container
    regionContainer: {
        width: "100%",
        marginBottom: 10
    },
    // region select
    select: {
        height: 45,
        fontSize: 16,
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    },
    // date and region container
    dualContainer: {
        width: "49%",
        marginBottom: 20,
    },
    // date picker
    dateInput: {
        height: 45,
        fontSize: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        backgroundColor: "#f9f9f9",
    },
    // age and status
    typeAgeGoalContainer: {
        width: "32%",
        marginBottom: 20
    },
    typeAgeGoalSelect: {
        height: 45,
        fontSize: 16,
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    },
    // checkbox
    checkboxContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxText: {
        fontSize: 15,
        color: "#333",
        marginLeft: 8,
        textDecorationLine: "none",
        marginBottom: 10,
    },
    // radio button
    radio: {
        alignItems: "flex-start",
    }
});

export {
    styles,
};