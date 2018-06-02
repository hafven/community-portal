const auth = {
  // isAuthenticated: false,
  isAuthenticated: true,

  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },

  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default auth;
