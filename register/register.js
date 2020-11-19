function register(theForm) {
    var name = this.inputFirstName.value;
    name += " " + this.inputLastName.value;
    var mail = this.inputEmail.value;
    alert("Thanks for your register\n" + name + ", please go to your mail box : " + mail + " check the confirm email");
    alert("Go back to previous page");
    window.history.back();
}