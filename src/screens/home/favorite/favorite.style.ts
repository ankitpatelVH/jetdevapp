import { StyleSheet } from "react-native";
import { color } from "../../../theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.primary
    },
    favContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listStyle: {
        flexGrow: 1
    },
    nodataLabel: {
        fontSize: 17,
        color: color.black,
        fontWeight: '800'
    }
})