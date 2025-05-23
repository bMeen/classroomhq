import { LogIn } from "lucide-react";
import FormInput from "../ui/FormInput";
import Button from "./Button";

import Logo from "./Logo";
import PasswordVisible from "./PasswordVisible";
import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("Stud0000.");

  const { login, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!username || !password) return;
    login(username, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) {
        navigate("/");
      }
    },
    [isAuthenticated, navigate],
  );

  return (
    <div className="w-full max-w-md shadow-md">
      <Logo />
      <p className="-mt-3 text-center">Login into your account </p>

      <form className="mx-auto my-5 w-4/5 space-y-5" onSubmit={handleLogin}>
        <div>
          <FormInput id="username" label="Username">
            <input
              type="text"
              id="username"
              className="mt-1 w-full"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormInput>
        </div>
        <div>
          <FormInput id="password" label="Password">
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                id="password"
                className="mt-1 w-full"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <PasswordVisible show={show} onclick={() => setShow((s) => !s)} />
            </div>
          </FormInput>
        </div>

        <Button
          className="mx-auto items-center disabled:cursor-not-allowed"
          disabled={!username || !password}
        >
          Login
          <LogIn size={16} />
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
