import { useState, useEffect } from 'react';
import { favoriteProps } from "./favorite.interface";
import { getWithParams } from '../../../services/config/request';
import { constant, params } from '../../../services/config';
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetailsSuccess } from '../../../services/redux/user/action';
import { Alert } from 'react-native';
import { RootState } from '../../../services/redux/rootReducer';

const FavoriteController = (): favoriteProps => {
    const dispatch = useDispatch()
    const userData = useSelector((res: RootState) => res.userSaveDetails)
    return { userData }
}


export default FavoriteController