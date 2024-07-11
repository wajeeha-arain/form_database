const login = async (e) => {
    e.preventDefault()
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value
    console.log(email, password);

    try {
        const result = await firebase.auth().signInWithEmailAndPassword( email, password)
        console.log(result);
        alert(` user is successfullu login ${result.user.email}`)
    } catch (err) {
        alert(err.message)
    }
}

const logout = ()=>{
    firebase.auth().signOut()

    firebase.auth().onAuthStateChanged( (user) => {
        if (user) {
        console.log(user);
 
        } else {
        console.log(`user successfully log out`);
        alert(`user successfully log out`)
        }
      });
      
}