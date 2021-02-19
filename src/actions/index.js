import axios from 'axios';

export const SMURF_FETCH_LOADING = "SMURF_FETCH";
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL =' FETCH_SMURF_FAIL';

export const fetchSmurfs = () => dispatch => {
    dispatch(smurfFetchLoading());

    axios
    .get('http:/localhost:3333/smurfs')
    .then(res => {
        dispatch(smurfFetchLoading(res.data.quote));
    })
    .catch(err =>{
        dispatch(err => {
            dispatch(fetchSmurfFail(err.Response.code));
        });
    });
    //1. start load
    //2. do our call
    //3. success on a successful call
    //4. fail on a fail call 

};

export const smurfFetchLoading = () => {
    return({ type: SMURF_FETCH_LOADING});
};

export const fetchSmurfSuccess = (smurf) => {
    return({ type:FETCH_SMURF_SUCCESS, payload:smurf});
};

export const fetchSmurfFail = (error) => {
    return({ type:FETCH_SMURF_FAIL, payload:error});
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.