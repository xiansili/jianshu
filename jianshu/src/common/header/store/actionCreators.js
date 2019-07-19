import * as constans from './constants';
import { fromJS } from "immutable";
import axios from 'axios';

export const searchFocus = ()=> ({
    type:constans.SEARCH_FOCUS 
});

export const searchBlur = ()=> ({
    type:constans.SEARCH_BLUR 
});

const changeList = (data) => ({
    type: constans.CHANGE_LIST,
    data: fromJS(data)
})


export const getList = ()=>{
    return (dispatch) => {
        axios({
            method:'get',
            url:'/api/headerList.json'
        }).then((res)=>{
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch((err)=>{

        })
    }
}