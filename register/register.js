function register(theForm) {
    var name = this.inputFirstName.value;
    name += " " + this.inputLastName.value;
    var mail = this.inputEmail.value;
    alert("Thanks for your register\n" + name + "Please go to your mail box : " + mail + " check the confirm email");
    alert("Now return to home page");
    location.href = "../index.html";
}