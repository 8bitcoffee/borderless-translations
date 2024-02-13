import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAllContractors() {
    try {
        // the config includes credentials which allow the server session to recognize the user
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        // TODO: Set to correct URL and request type
        const response = yield axios.get('/api/contractor', config);

        // Puts the response in the reducer allContractors
        yield put({ type: 'SET_ALL_CONTRACTORS', payload: response.data });

    }
    catch (error) {
        console.error('GET for all contractors failed', error);
    }
}

// Worker function  - Saga: will be fired on "GET_ALL_CONTRACTORS" actions
function* getAllContractorsSaga() {
    yield takeLatest('GET_ALL_CONTRACTORS', getAllContractors);
}

export default getAllContractorsSaga;