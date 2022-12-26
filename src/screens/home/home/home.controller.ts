import { useState, useEffect } from 'react';
import { homeControllerProps } from "./home.interface";
import { getWithParams } from '../../../services/config/request';
import { constant, params } from '../../../services/config';
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetailsSuccess } from '../../../services/redux/user/action';
import { Alert } from 'react-native';

const homeController = (): homeControllerProps => {
    const dispatch = useDispatch()
    const userData = useSelector((res: any) => res.userReducer)
    const [showLoader, setShowLoader] = useState<boolean>(false)
    const [pages, setPages] = useState<number>(1)
    const [data, setData] = useState<Array<{}>>([])
    useEffect(() => {
        userDetailsApiCall()
    }, [pages])
    const userDetailsApiCall = () => {
        getWithParams(constant.api, `?${params.result}=10&${params.page}=${pages}`, '').then(
            (response: any) => {
                if (pages == 1) {
                    dispatch(fetchDetailsSuccess(response))
                    setData(response?.results)
                } else {
                    setData([...data, ...response?.results])

                }
            }).catch(e => {
                // error shows here
            })
    }
    return { showLoader, pages, setPages, userDetailsApiCall, data }
}


export default homeController