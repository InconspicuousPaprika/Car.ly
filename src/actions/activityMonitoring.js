export const ACTIVITY_INDICATOR = 'ACTIVITY_INDICATOR';
export const CAR_DATA_REQUEST = 'CAR_DATA_REQUEST';


export function loading(activityIndication) {
	return {
		type: ACTIVITY_INDICATOR,
		activityIndication
	}
}

export function requestedData(request) {
	return {
		type: CAR_DATA_REQUEST,
		request
	}
}
