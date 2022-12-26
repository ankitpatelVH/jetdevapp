import { FC, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabProps } from './BottomTab.interface';
import { color } from '../../theme';
import { Image } from 'react-native-svg';
import Svg from '../../assets/svg';
import screenName from '../../utils/screenName';

const CustomBottomTab: FC<BottomTabProps> = ({ navigation }) => {
    const [isFocus, setIsFocus] = useState(1)
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                onPress={() => {
                    setIsFocus(1);
                    navigation.navigate(screenName.home)
                }}
                style={[style.container, { borderTopWidth: isFocus == 1 ? 3 : 0, borderColor: isFocus ? color.secondary : color.white }]}>
                {isFocus == 1 ? <Svg.HomeSvg fill={color.secondary} /> : <Svg.homeFill fill={color.secondary} />}
                <Text style={{ color: isFocus == 1 ? color.secondary : color.black }}>Home
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { setIsFocus(2); navigation.navigate(screenName.favorite) }}
                style={[style.container, { borderTopWidth: isFocus == 2 ? 3 : 0, borderColor: isFocus ? color.secondary : color.white }]}>
                {isFocus == 2 ? <Svg.starFill fill={color.secondary} /> : <Svg.star fill={color.secondary} />}
                <Text style={{ color: isFocus == 2 ? color.secondary : color.black }}>Favorite</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CustomBottomTab