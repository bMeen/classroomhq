import LoginForm from "../components/LoginForm";
import AnimatePage from "../ui/AnimatePage";
import { xAnimations } from "../lib/constants";

function Login() {
  return (
    <AnimatePage
      animations={xAnimations}
      className="grid h-screen place-items-center"
    >
      <LoginForm />
    </AnimatePage>
  );
}

export default Login;
