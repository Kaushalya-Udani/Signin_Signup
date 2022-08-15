import { db } from "./firebase";
import {collection, getDoc, addDoc, doc} from 'firebase/firestore';


const userRef = collection(db,"user");

class userService {
    addUser = async (newUser)=>{
        return await addDoc(userRef, newUser);
    };
    
    getUser = async(id) => {
        const userDoc = doc(db, "user", id);
        console.log("user " + getDoc(userDoc));
        return await getDoc(userDoc);
    }
}
export default new userService()