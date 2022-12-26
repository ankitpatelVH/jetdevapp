import { ActivityIndicator, Alert, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { FC, useEffect } from 'react'
import { CustomStatusbar, Header } from '../../../component'
import homeStyle from './home.style'
import { color } from '../../../theme'
import homeController from './home.controller'
import { FlatList } from 'react-native-gesture-handler'
import UserDetailsCard from '../../../component/card/userDetailsCard'
import { all } from 'axios'

const Home: FC = () => {
    const { pages, setPages, showLoader, data, userDetailsApiCall } = homeController()
    return (
        <View style={homeStyle.container}>
            <CustomStatusbar backgroundColor={color.white} />
            <Header />
            {data ? <FlatList
                contentContainerStyle={homeStyle.listStyle}
                refreshControl={
                    <RefreshControl
                        refreshing={showLoader}
                        onRefresh={() => {
                            userDetailsApiCall()
                        }}
                    />
                }
                data={data ? data : []}
                renderItem={({ item, index }) => (
                    <UserDetailsCard
                        item={item}
                        index={index}
                    />
                )}
                pagingEnabled
                onEndReached={() => setPages(pages + 1)}
                ListFooterComponent={() => (
                    <ActivityIndicator
                        color="black"
                        style={{ margin: 15 }} />
                )}
            /> :
                <View style={homeStyle.loader}>
                    <ActivityIndicator />
                </View>
            }
        </View>
    )
}

export default Home
