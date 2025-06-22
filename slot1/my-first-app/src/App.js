import "./App.css";

function App() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };
  return (
    <div style={{ padding: 32 }}>
      <h1>Login Page</h1>
      <button
        onClick={handleGoogleLogin}
        style={{ fontSize: 18, padding: "10px 20px" }}
      >
        Login with Google
      </button>
    </div>
  );
}

export default App;
