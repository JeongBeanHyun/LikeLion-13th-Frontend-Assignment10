import { useState } from "react";
import LoginForm from "../components/LoginForm";
import LoginStatus from "../components/LoginStatus";
import { useAuthStore } from "../stores/authStore";
import "../styles/Home.css";

export default function Home() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <div className="home-page">
      <h1 className="home-title">홈</h1>
      <LoginStatus />
      {!isLoggedIn && <LoginForm />}
      {isLoggedIn && <p className="home-text">로그인 완료!</p>}
      {isLoggedIn && !showChangePassword && (
        <button onClick={() => setShowChangePassword(true)}>
          비밀번호 변경
        </button>
      )}
    </div>
  );
}
