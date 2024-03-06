// function getNameFromAuth() {
//     firebase.auth().onAuthStateChanged(user => { 
//         // Check if a user is signed in:
//         if (user) {
//             // Do something for the currently logged-in user here: 
//             console.log(user.uid); //print the uid in the browser console
//             console.log(user.displayName);  //print the user name in the browser console

//             document.getElementById("name-goes-here").innerHTML = user.displayName
//             userName = user.displayName;

//             //method #1:  insert with JS
//             //document.getElementById("name-goes-here").innerText = userName;    

//             //method #2:  insert using jquery
//             //$("#name-goes-here").text(userName); //using jquery

//             //method #3:  insert using querySelector
//             //document.querySelector("#name-goes-here").innerText = userName

//         } else {
//             // No user is signed in.
//             console.log ("No user is logged in");
//         }
//     });
// }
// getNameFromAuth(); //run the function

function insertNameFromFirestore() {
    // Check if the user is logged in:
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.uid); // Let's know who the logged-in user is by logging their UID
            currentUser = db.collection("users").doc(user.uid); // Go to the Firestore document of the user
            currentUser.get().then(userDoc => {
                // Get the user name
                let userName = userDoc.data().name;
                console.log(userName);
                //$("#name-goes-here").text(userName); // jQuery
                document.getElementById("name-goes-here").innerText = userName;
            })
        } else {
            console.log("No user is logged in."); // Log a message when no user is logged in
        }
    })
}

insertNameFromFirestore();

function readQuote(day){
    db.collection("quotes").doc(day).onSnapshot(dayDocument =>{
        quoteOfDay = dayDocument.data().quote;
        document.getElementById("quote-goes-here").innerHTML = quoteOfDay;
    })
}
readQuote("tuesday");


// function writeHikes() {
//     //define a variable for the collection you want to create in Firestore to populate data
//     var hikesRef = db.collection("hikes");

//     hikesRef.add({
//         code: "BBY01",
//         name: "Burnaby Lake Park Trail", //replace with your own city?
//         city: "Burnaby",
//         province: "BC",
//         level: "easy",
// 				details: "A lovely place for lunch walk",
//         length: 10,          //number value
//         hike_time: 60,       //number value
//         lat: 49.2467097082573,
//         lng: -122.9187029619698,
//         last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
//     });
//     hikesRef.add({
//         code: "AM01",
//         name: "Buntzen Lake Trail", //replace with your own city?
//         city: "Anmore",
//         province: "BC",
//         level: "moderate",
//         details: "Close to town, and relaxing",
//         length: 10.5,      //number value
//         hike_time: 80,     //number value
//         lat: 49.3399431028579,
//         lng: -122.85908496766939,
//         last_updated: firebase.firestore.Timestamp.fromDate(new Date("March 10, 2022"))
//     });
//     hikesRef.add({
//         code: "NV01",
//         name: "Mount Seymour Trail", //replace with your own city?
//         city: "North Vancouver",
//         province: "BC",
//         level: "hard",
//         details:  "Amazing ski slope views",
//         length: 8.2,        //number value
//         hike_time: 120,     //number value
//         lat: 49.38847101455571,
//         lng: -122.94092543551031,
//         last_updated: firebase.firestore.Timestamp.fromDate(new Date("January 1, 2023"))
//     });
// }