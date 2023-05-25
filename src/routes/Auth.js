import { authService } from "fBase";
import React, { useState } from "react";

// export default () => <span>Auth</span>;
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  // input의 값을 변경할 때 마다 onChange fucntion 호출
  // input의 값을 react에서 사용하기 위함
  const onChange = (event) => {
    const {
      target: { name, value },
      // name = 태그의 name 값
      // value = 키보드를 통해 입력된 값
    } = event;
    // name 이름이 email 이거나 password인 곳의 state를 변경
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    // submit 할 때마다 input과 html이 새로고침 되는 것을 방지하기 위함.
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        // create account
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        // log in
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};
export default Auth;
// 자동으로 import할 수 있음.
