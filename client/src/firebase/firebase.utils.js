import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user.selectors';

const config = {
    apiKey: "AIzaSyDJcJ82mrvdk0et-Ld_Cw-ZXAWGlM2xP_o",
    authDomain: "crwn-datab.firebaseapp.com",
    databaseURL: "https://crwn-datab.firebaseio.com",
    projectId: "crwn-datab",
    storageBucket: "",
    messagingSenderId: "761358635016",
    appId: "1:761358635016:web:3b35e32627add3b7"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      const premiumStatus = 0;

      try {
        await userRef.set({ displayName, email, createdAt, premiumStatus, ...additionalData})
      } catch (error ) {
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  };

    export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj)
    });

    return await batch.commit()
  };

  export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject)
    })
  }

  export const makeUserPremium = async (userAuth) => {
    if (!userAuth) return;
    console.log(userAuth)
    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log("isdoing1")
    if(snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = 0;
      const premiumStatus = 1;
      console.log(displayName)
      console.log(email)
      console.log(userAuth)
      try {
        console.log("isdoing2")
        await userRef.set({displayName, email, createdAt, premiumStatus})
      } catch (error ) {
        console.log('error adding premium membership', error.message)
      }
    
    }
    return userRef;
  };
  


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);




  export default firebase;