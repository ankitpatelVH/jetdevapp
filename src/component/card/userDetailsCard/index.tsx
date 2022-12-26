import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import { userDetailsProps } from './userDetailsCard.interface'
import userDetailsCardStyle from './userDetailsCard.style'
import Svg from '../../../assets/svg'
import { UserObject } from '../../../services/redux/user/interface'
import { useDispatch, useSelector } from 'react-redux'
import { removeDetailsSuccess, saveDetailsSuccess } from '../../../services/redux/saveDetails/action'
import { RootState } from '../../../services/redux/rootReducer'
import { color } from '../../../theme'
import Snackbar from 'react-native-snackbar'

const UserDetailsCard: FC<userDetailsProps> = ({ item }) => {
    const dispatch = useDispatch()
    const saveUserData = useSelector((res: RootState) => res.userSaveDetails)
    const onClickItems = (data: UserObject) => {
        // Find index and id from Array
        let isInclude = saveUserData?.userData?.filter((res: UserObject) => res?.id?.value == data.id?.value)
        let index = saveUserData?.userData?.findIndex((value: UserObject) => value?.id?.value == data.id?.value)
        if (isInclude?.length == 0) {
            dispatch(saveDetailsSuccess({ data: data }))
            Snackbar.show({
                text: `Successfully add in favorites`
            })
        } else {
            dispatch(removeDetailsSuccess({ index: index }))
            Snackbar.show({
                text: `Successfully remove from favorites`
            })
        }

    }
    let ids = saveUserData?.userData?.map((values: any) => values?.id?.value)
    return (
        <View style={userDetailsCardStyle.container}>
            <View>
                <Image source={{ uri: item?.picture?.medium }}
                    style={userDetailsCardStyle.profilePic}
                />
            </View>
            <View style={userDetailsCardStyle.details}>
                <Text style={userDetailsCardStyle.nameLabel}>{`${item?.name?.first}  ${item?.name?.last}`}</Text>
                <View style={userDetailsCardStyle.locationContainer}>
                    <Svg.pinIcon />
                    <Text style={userDetailsCardStyle.locationLabel}>{`${item?.location?.city}  ${item?.location?.country}`}</Text>
                </View>
                <View style={userDetailsCardStyle.locationContainer}>
                    <Text style={[userDetailsCardStyle.hobbyLabel]}>Music</Text>
                    <Text style={[userDetailsCardStyle.hobbyLabel]}>Singing</Text>
                    <Text style={[userDetailsCardStyle.hobbyLabel]}>Dancing</Text>
                </View>

            </View>
            <TouchableOpacity
                style={userDetailsCardStyle.star}
                onPress={() => onClickItems(item)}
            >
                {!ids?.includes(item?.id?.value) ? <Svg.star fill={color.secondary} /> : <Svg.starFill fill={color.secondary} />}
            </TouchableOpacity>
        </View>
    )
}

export default UserDetailsCard