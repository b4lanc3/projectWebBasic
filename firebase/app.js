import { collection, addDoc } from "firebase/firestore";
document.getElementById("submit").onclick = function() {
    const title = document.getElementById("Title").value;
    const content = document.getElementById("Content").value;
    const author = document.getElementById("Author").value;

    let checkInput = true;
    if (title.lenght <= 3) {
        alert(Warning)
        let checkInput = false;
    } else if (content.lenght <= 3) {
        alert(Warning)
        let checkInput = false;
    } else if (author.lenght <= 3) {
        alert(Warning)
        let checkInput = false;
    } else {


        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "cities"), {
            name: "Tokyo",
            country: "Japan"
        });
        console.log("Document written with ID: ", docRef.id);;
    }


}