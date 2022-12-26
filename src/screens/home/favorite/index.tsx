import React from 'react'
import { View, Text, ActivityIndicator, RefreshControl, FlatList } from 'react-native'
import favoriteStyle from './favorite.style'
import { CustomStatusbar, Header } from '../../../component'
import { color } from '../../../theme'
import UserDetailsCard from '../../../component/card/userDetailsCard'
import FavoriteController from './favorite.controller'

const Favorite = () => {
    const { userData } = FavoriteController()

    const ListEmptyView = () => (
        <View style={favoriteStyle.favContainer}>
            <Text style={favoriteStyle.nodataLabel}>You don't have any favorite users.</Text>
        </View>
    )
    return (
        <View style={favoriteStyle.container}>
            <CustomStatusbar backgroundColor={color.white} />
            <Header />
            {userData?.userData ?
                <FlatList
                    contentContainerStyle={favoriteStyle.listStyle}
                    data={userData?.userData}
                    renderItem={({ item, index }) => (
                        <UserDetailsCard
                            index={index}
                            item={item}
                        />
                    )}
                    ListEmptyComponent={ListEmptyView}
                /> :
                <View style={favoriteStyle.favContainer}>
                    <ActivityIndicator />
                </View>
            }
        </View>
    )
}

export default Favorite
