//for test automtion synchronous is mandatory
//callback is first solutionto make JS test to behave asynchronous to synchronous

function enterUsername(username, password, cb, cb1) {
    setTimeout(()=> {
        console.log("Username entered: " + username);
        cb(password, cb1);
    }, 1000)
}

function enterPassword(password, cb) {
    setTimeout(()=> {
        console.log("Password entered: " + password);
        cb();
    }, 1000)
}

function clickLoginButton() {
    setTimeout(()=> {
        console.log("Login successful");
    }, 1000)
}

enterUsername("john_doe", "secret123", enterPassword, clickLoginButton);
