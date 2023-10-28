import LoginForm from "@/components/LoginForm";
import { loginAction } from "../actions/login";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <LoginForm action={loginAction} />
    </div>
  );
}
