import { StyleSheet } from "react-native";
import { color, fontFamily } from "../../../theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
        marginHorizontal: 30,
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
    },
    profilePic: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        left: -40
    },
    details: {
        left: -20
    },
    nameLabel: {
        fontSize: 16,
        color: color.black,
        fontWeight: 'bold'
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        flex: 1
    },
    locationLabel: {
        fontSize: 14,
        color: color.neutralGray,
        fontWeight: 'bold',
        marginLeft: 5,
        marginRight: 80
    },
    hobbyLabel: {
        fontSize: 14,
        color: color.darkBlue,
        fontWeight: 'bold',
        marginLeft: 5,
        padding: 1,
        borderRadius: 7
    },
    star: {
        position: 'absolute',
        right: 10,
        top: 10,
        flex: 1
    }
})