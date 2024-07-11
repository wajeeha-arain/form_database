const signin = async (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value
    // console.log(email, password);

    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
        // console.log(result);
        alert(` wellcom ${result.user.email}`)
    } catch (err) {
        alert(err.message)
    }
}






