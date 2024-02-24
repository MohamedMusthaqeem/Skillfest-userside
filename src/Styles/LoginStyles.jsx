const logindiv = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};
const title = {
  initial: {
    x: -150,
  },
  animate: {
    x: 0,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};
const login_text = {
  initial: {
    x: 150,
  },
  animate: {
    x: 0,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

export { logindiv, title, login_text };
//same can be used for signup
