import { fstore, fauth } from "../config/firebaseConfig";

export const onRegister = async (payload) => {
  try {
    const res = await fauth.createUserWithEmailAndPassword(
      payload.email,
      payload.password
    );
    delete payload.password;
    payload.uid = res.user.uid;
    await fstore.collection("users").add(payload);
    alert("account created");
    return true;
  } catch (error) {
    return false;
  }
};

export const onLogin = async (E, P) => {
  try {
    await fauth.signInWithEmailAndPassword(E, P).then((res) => {
      localStorage.setItem("loginInfo", true);
      alert("login successfull");
    });
    return true;
  } catch (error) {
    alert("something wrong");
  }
};
