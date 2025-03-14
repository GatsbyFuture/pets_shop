import {useState, useMemo} from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from "react-native";
import {BottomSheetView} from "@gorhom/bottom-sheet";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RadioGroup from "react-native-radio-buttons-group";
// styles
import {styles} from "./filter.style";

export default function FilterBottomSheet() {
    // State variables
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [region, setRegion] = useState("");
    const [animalType, setAnimalType] = useState("");
    const [age, setAge] = useState("");
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState({male: false, female: false});
    const radioButtons = useMemo(() => ([
        {
            id: "1", // acts as primary key, should be unique and non-empty string
            label: "Pullik e'lonlar",
            value: "payment",
            color: "#3b5998",
            size: 24
        },
        {
            id: "2",
            label: "Tekin e'lonlar",
            value: "free",
            color: "#3b5998",
            size: 24
        }
    ]), []);
    const [payment, setPayment] = useState();

    // Date Picker handler
    const onDateChange = (event, selectedDate) => {
        console.log(selectedDate);
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === "ios");
        setDate(currentDate);
    };

    // Checkbox handler
    const toggleGender = (key) => {
        setGender((prev) => ({...prev, [key]: !prev[key]}));
        console.log("gender :", gender);
    };

    // Radio button handler
    const onPaymentPress = (selectedButtons) => {
        console.log("payment : ", selectedButtons);
        setPayment(selectedButtons);
    };

    return (
        <BottomSheetView style={styles.bottomSheetMain}>
            <Text style={styles.btmHeaderT}>BARCHA FILTERLAR</Text>

            {/* Select Regions */}
            <View style={styles.regionContainer}>
                <Text style={styles.label}>Viloyat:</Text>
                <View style={styles.select}>
                    <RNPickerSelect
                        onValueChange={(value) => setRegion(value)}
                        items={[
                            {label: "Toshkent", value: "toshkent"},
                            {label: "Samarqand", value: "samarqand"},
                            {label: "Buxoro", value: "buxoro"},
                        ]}
                        // style={pickerSelectStyles}
                        placeholder={{label: "Barcha viloyatlar", value: null}}
                        value={region}
                    />
                </View>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                {/* Date Input */}
                <View style={styles.dualContainer}>
                    <Text style={styles.label}>Sana:</Text>
                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <Text style={styles.dateInput}>{date.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={onDateChange}
                        />
                    )}
                </View>

                {/* Select Animal Type */}
                <View style={styles.dualContainer}>
                    <Text style={styles.label}>Turi:</Text>
                    <View style={styles.select}>
                        <RNPickerSelect
                            onValueChange={(value) => setAnimalType(value)}
                            items={[
                                {label: "Mushuk", value: "cat"},
                                {label: "It", value: "dog"},
                                {label: "Qush", value: "bird"},
                            ]}
                            placeholder={{label: "Turini tanlang", value: null}}
                            value={animalType}
                        />
                    </View>
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>

                {/* Select Age */}
                <View style={styles.dualContainer}>
                    <Text style={styles.label}>Yosh:</Text>
                    <View style={styles.select}>
                        <RNPickerSelect
                            onValueChange={(value) => setAge(value)}
                            items={[
                                {label: "1 oylik", value: "1"},
                                {label: "1.5 oylik", value: "1.5"},
                                {label: "2 oylik", value: "2"},
                            ]}
                            placeholder={{label: "Yoshni tanlang", value: null}}
                            value={age}
                        />
                    </View>
                </View>

                {/* Select Status (Active/Inactive) */}
                <View style={styles.dualContainer}>
                    <Text style={styles.label}>Maqsad:</Text>
                    <View style={styles.select}>
                        <RNPickerSelect
                            onValueChange={(value) => setStatus(value)}
                            items={[
                                {label: "Mehmonga", value: "guest"},
                                {label: "Sotib olish", value: "buy"},
                            ]}
                            placeholder={{label: "Maqsadni tanlang", value: null}}
                            value={status}
                        />
                    </View>
                </View>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>

                {/* Checkbox Gender */}
                <View style={styles.dualContainer}>
                    <Text style={styles.label}>Jins:</Text>
                    <View style={styles.checkboxContainer}>
                        <BouncyCheckbox
                            size={24} // Checkbox o‘lchami
                            fillColor="#3b5998" // Tanlanganda rang
                            unFillColor="#f9f9f9" // Tanlanmagan holatda rang
                            text="Erkak"
                            textStyle={{fontSize: 16, justifyContent: "center", alignItems: "center"}}
                            iconStyle={{borderColor: "#3b5998"}} // Chegara rangi
                            innerIconStyle={{borderWidth: 2}} // Ichki chegara qalinligi
                            onPress={() => toggleGender("male")}
                            isChecked={gender.male}
                        />
                        <View style={{marginBottom: 10}}></View>
                        <BouncyCheckbox
                            size={24}
                            fillColor="#ff69b4" // Ayollar uchun boshqa rang (pushti)
                            unFillColor="#f9f9f9"
                            text="Urg'ochi"
                            textStyle={{fontSize: 16, justifyContent: "center", alignItems: "center"}}
                            iconStyle={{borderColor: "#ff69b4"}}
                            innerIconStyle={{borderWidth: 2}}
                            onPress={() => toggleGender("female")}
                            isChecked={gender.female}
                        />
                    </View>
                </View>


                {/* Radio Button Payment */}
                <View style={styles.dualContainer}>
                    <Text style={styles.label}>To‘lov:</Text>
                    <RadioGroup
                        radioButtons={radioButtons}
                        onPress={onPaymentPress}
                        selectedId={payment}
                        containerStyle={styles.radio}
                    />
                </View>
            </View>
        </BottomSheetView>
    );
}