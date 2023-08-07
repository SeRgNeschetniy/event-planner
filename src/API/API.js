import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./config";

export const getAllEvents = async (filter, sortBy) => {
  const q = query(
    collection(db, "Events"),
    filter !== "All" ? where("category", "==", filter) : "",
    orderBy(sortBy.type, sortBy.order)
  );
  const querySnapshot = await getDocs(q);

  const arr = [];
  querySnapshot.forEach((doc) => {
    arr.push({ ...doc.data(), id: doc.id });
  });

  return { events: arr };
};

export const getEventById = async (id) => {
  const q = doc(db, "Events", id);
  const querySnapshot = await getDoc(q);

  if (querySnapshot.exists()) {
    return querySnapshot.data();
  } else {
    console.log("No such document!");
    return {};
  }
};

export const createEvent = async (event) => {
  try {
    const docRef = await addDoc(collection(db, "Events"), event);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const deleteEvent = async (id) => {
  try {
    const q = doc(db, "Events", id);
    return await deleteDoc(q);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};

export const editEvent = async (id, event) => {
  try {
    const q = doc(db, "Events", id);
    return await updateDoc(q, event);
  } catch (e) {
    console.error("Error editing document: ", e);
  }
};
