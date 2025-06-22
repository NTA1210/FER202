class OAuth2Handler {
  constructor() {
    this.handlerCallBack();
  }

  handlerCallBack() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const role = urlParams.get("role");
    const errror = urlParams.get("error");

    if (errror) {
      this.handleError(errror);
      return;
    }
    if (token && role) {
      this.handleSuccess(token, role);
    } else {
      this.handleError("no_token_or_role");
    }
  }

  handleSuccess(token, role) {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    window.history.replaceState({}, document.title, window.location.pathname);

    if (this.isTokenValid(token)) {
      this.redirectToBaseOnRole(role);
    } else {
      this.handleError("invalid_token");
    }
  }

  handleError(error) {
    console.error("OAuth2 Error:", error);

    const errorMessage = {
      oauth2_failed: "Google login failed. Please try again.",
      no_token: "No Authentication token receive.",
      invalid_token: "Invalid Authentication token.",
    };
    alert(errorMessage[error] || "Login failed. Please try again.");
    window.location.href = "/login";
  }
  isTokenValid(token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const expiry = payload.exp * 1000; // Convert to milliseconds
      return Date.now() < expiry;
    } catch (e) {
      return false;
    }
  }

  redirectBasedOnRole(role) {
    const roleRedirects = {
      JOB_SEEKER: "/dashboard",
      EMPLOYER: "/employer-dashboard",
      ADMIN: "/admin-dashboard",
    };

    window.location.href = roleRedirects[role] || "/dashboard";
  }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", () => {
  new OAuth2Handler();
});
export default OAuth2Handler;
