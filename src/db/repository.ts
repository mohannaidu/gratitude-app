import {db, auth} from "../config/firebase";
import firebase from 'firebase/app';

export class Repository {
    getAllGratitudeByUserAndDate(date: string, uid: string): Promise<string> {
        return new Promise(async (resolve) => {
            let entry: string = '';
            // console.log(date);
            // '2021-10-02
            const timestamp = firebase.firestore.Timestamp.fromDate(
                new Date(date + ' 00:00:00')
            )

            if (uid !== undefined) {
                let collection = db.collection('users').doc(uid);
                const snapshot = await collection.collection('entry')
                    .where('date_of_entry', '==', timestamp)
                    .get();
                if (snapshot.empty) {
                    resolve('');
                } else {
                    let row: number = 1;
                    snapshot.docs.forEach(function (childSnapshot: any) {
                        //console.log(childSnapshot.data().text);
                        if (row === 1) {
                            entry = childSnapshot.data().text;
                            //console.log(entry);
                            resolve(entry);
                        } else {
                            resolve('');
                        }
                        row++;
                    });
                }

            }
        })
    }

    getAll() {
        return db.collection('users').get();
    }

    create(gratitude, date) {

        // console.log(date);
        // '2021-10-02
        const timestamp = firebase.firestore.Timestamp.fromDate(
            new Date(date+ ' 00:00:00')
        )
        let uid: string = '';
        uid=  auth.currentUser?.uid!;
        //const userEmail = auth.currentUser?.email;
        //console.log(userEmail);

        let collection = db.collection('users');
        if (uid!==undefined) {
            collection.doc(uid)
                .collection('entry')
                .where('date_of_entry', '==', timestamp)
                .get().then(function (record) {
                if (record.empty){ // this is for adding new record
                    collection.doc(uid)
                        .collection('entry').add({
                        'date_of_entry' : timestamp,
                        'text' : gratitude
                    })
                }
                else{
                    collection.doc(uid)
                        .collection('entry')
                        .doc(record.docs[0].id)
                        .update({
                            'date_of_entry' : timestamp,
                            'text' : gratitude
                        })
                }
            });

        }


    }

    update(docid, value) {
        return db.collection('users').doc(docid).update(value);
    }

    delete(docid) {
        return db.collection('users').doc(docid).delete();
    }


}