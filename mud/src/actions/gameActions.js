import {
    GET_ROOMS_FAILURE,
    GET_ROOMS_START,
    GET_ROOMS_SUCCESS,
    INIT_FAILURE,
    INIT_START,
    INIT_SUCCESS,
    MOVE_FAILURE,
    MOVE_START,
    MOVE_SUCCESS,
    SAY_FAILURE,
    SAY_START,
    SAY_SUCCESS
} from './types'
import { axiosWithAuth } from '../helpers'

///INITIALIZE
export const init = () => dispatch => {
  dispatch({type: INIT_START});
  return axiosWithAuth()
      .get('api/adv/init/')
      .then(response => {
          dispatch({type: INIT_SUCCESS, payload: response.data})
      })
      .catch(error => {
          dispatch({type: INIT_FAILURE, payload: 'Error starting up MUD'})
      });
}

//MOVE
export const move = direction => dispatch => {
  dispatch({type: MOVE_START});
  return axiosWithAuth()
      .post('api/adv/move/', { direction })
      .then(response => {
          dispatch({type: MOVE_SUCCESS, payload:response.data});
      })
      .catch(err => {
          dispatch({ type: MOVE_FAILURE, payload: err.response.data });
        });
}

//GET ALL ROOMS
export const getRooms = () => dispatch => {
  dispatch({type: GET_ROOMS_START});
  return axiosWithAuth()
    .get('api/adv/getallrooms/')
    .then(response => {
      dispatch({ type: GET_ROOMS_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({
        type: GET_ROOMS_FAILURE,
        payload: ('error loading game rooms',err)
      });
    });
};

//STRETCH: PUSHER
export const say = message => dispatch => {
  dispatch ({type: SAY_START})
  return axiosWithAuth()
    .post('api/adv/say/', { message })
    .then(res => {
      dispatch({ type: SAY_SUCCESS });
    })
    .catch(err => {
      dispatch({
        type: SAY_FAILURE,err
      });
    });
};