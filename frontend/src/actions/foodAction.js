import axios from 'axios'

export const getAllFoods=()=> async dispatch=>{
    dispatch({type: 'GET_FOODS_REQUEST'})

    try{
        const response = await axios.get('/api/props/getallfoods')
        console.log(response)
        dispatch({type: 'GET_FOODS_SUCCESS', paylaod : response.data})
    } catch (error){
        dispatch({type: 'GET_FOODS_FAILED' , paylaod : error})
        
    }
}