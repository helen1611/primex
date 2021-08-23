import getFirestoreDb from '../services/firebase';

export const fetchUsers = () => async dispatch => {
  const db = getFirestoreDb();
  db.collection("users").get().then((querySnapshot) => {
    const usersDb = [];
    querySnapshot.forEach((doc) => {
        usersDb.push({
          id: doc.id,
          ...doc.data()
        })
    });
    dispatch({ type: 'FETCH_USERS', payload: usersDb });
  });
};

export const addUsers = () => async dispatch => {
  const db = getFirestoreDb();
  const user = {
    name: "Sean John",
    email: "test@domain.com",
    roles: 'Owner',
    organisation: 'Trader Joes',
    organisation_features: 'Trade Vault, Analytics',
    country: '1'
  };
  dispatch({ type: 'ADD_USERS', payload: user });
  db.collection("users").add(user)
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
};

export const fetchCountries = () => async dispatch => {
  const db = getFirestoreDb();
  db.collection("countries").get().then((querySnapshot) => {
    const countriesDb = [];
    querySnapshot.forEach((doc) => {
      countriesDb.push({
          id: doc.id,
          ...doc.data()
        })
    });
    dispatch({ type: 'FETCH_COUNTRIES', payload: countriesDb });
  });
};


export const fetchOrganisations = () => async dispatch => {
  const db = getFirestoreDb();
  db.collection("organisations").get().then((querySnapshot) => {
    const organisationsDb = [];
    querySnapshot.forEach((doc) => {
        organisationsDb.push({
          id: doc.id,
          ...doc.data()
        })
    });
    dispatch({ type: 'FETCH_ORGANISATION', payload: organisationsDb });
  });
};

