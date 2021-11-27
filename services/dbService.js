import moment from "moment";
import firebase from "./FirebaseSetup";

const db = firebase.firestore().collection("devotees");
const batch = firebase.firestore().batch();

import "moment/locale/en-in";

class DBService {
    getAll() {
        return db.get();
    }

    getFromTo(fromDate, toDate) {
        console.log("from" + fromDate.unix());

        console.log("to" + toDate.unix());
        return db.where(`created`, `>`, fromDate.unix()).where(`created`, `<`, toDate.unix()).get();
    }

    create(devotee) {
        return db.add({ ...devotee, created: moment().unix() });
    }

    get(phone) {
        return db.doc(phone).get();
    }

    upload(devotees) {
        devotees.forEach((devotee) => {
            var docRef = db.doc(devotee.phone.toString()); //automatically generate unique id
            batch.set(docRef, { ...devotee, created: moment().unix() });
        });
        return batch.commit();
    }

    update(phone, devotee) {
        return db.doc(phone).set({ ...devotee, created: moment().unix() });
    }

    delete(phone) {
        return db.doc(phone).delete();
    }
}

export default new DBService();