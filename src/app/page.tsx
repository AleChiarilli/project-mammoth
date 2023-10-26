import { loginAction } from "./actions/login";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <LoginForm action={loginAction} />
    </div>
  );
}
