class User {
  constructor(fullName, profilePic, email) {
    this.fullName = fullName || "User";
    this.profilePic =
      profilePic ||
      `https://ui-avatars.com/api/?name=${encodeURIComponent(
        this.fullName
      )}&background=random&color=fff&size=200`;
    this.email = email;
  }

  saveUser() {
    const currentUser = JSON.stringify({
      fullName: this.fullName,
      email: this.email,
      profilePic: this.profilePic,
    });

    localStorage.setItem("user", currentUser);
  }
}

export default User;
