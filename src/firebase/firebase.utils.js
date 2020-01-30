import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyD5npZORRJP39jShinYqvzikSSh04af4lQ",
  authDomain: "portfolio-ef1b0.firebaseapp.com",
  projectId: "portfolio-ef1b0",
  storageBucket: "portfolio-ef1b0.appspot.com",
  appId: "1:1074070664895:web:b27e64229a56987b34380a",
  measurementId: "G-0J3565YP5T"
};


export const getVideoURL = async videoName => {
	if (!videoName) return;
	return await storageRef.child(videoName).getDownloadURL()
}

firebase.initializeApp(firebaseConfig);
firebase.analytics()

export const storageRef = firebase.storage().ref();