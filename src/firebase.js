import * as firebase from 'firebase'
const config = {
	apiKey: 'AIzaSyBFfHDcZ9psYeQZG6k-mnjSFkMfyRqU__Q',
	authDomain: 'passdown-22edd.firebaseapp.com',
	databaseURL: 'https://passdown-22edd.firebaseio.com',
	projectId: 'passdown-22edd',
	storageBucket: '',
	messagingSenderId: '530511410510'
}
firebase.initializeApp(config)

export const database = firebase.database().ref()

export const reportsRef = database.child('reports')
