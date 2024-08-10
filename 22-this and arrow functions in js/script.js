// this function ka matlab hota hai ke to current context ke ander variables hai unko access kerne ke liye or jab ham current context se bahir koi dosra user add kerdein to wo update hojaye ga 

const obj = {
   username: "fahad",
    price: 999,

    messagealert: function () {
        console.log(`${this.usernamename}, welcome to website` );
        console.log(this);
    }
}

username.messagealert();

// video 23 immediatelly invoked function

