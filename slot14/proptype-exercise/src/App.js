import React from "react";
import UserProfile from "./components/UserProfile";
import UserProfile2 from "./components/UserProfile2";
import MyForm from "./components/MyForm";

const App = () => {
  const handleFormSubmit = (data) => {
    console.log("Dữ liệu đã gửi:", data);
  };

  return (
    <div className="App">
      <h1>Ứng Dụng React</h1>

      {/* Ví dụ 1 */}
      <UserProfile name="Nguyễn Văn A" age={"25"} />
      <UserProfile name="" age={25} />
      <UserProfile name="Nguyễn Văn B" age="twenty five" />
      <UserProfile name="Nguyễn Văn C" age={null} />

      {/* Ví dụ 2 */}
      <UserProfile2 name="Nguyễn Văn D" age={20} onSubmit={handleFormSubmit} />

      {/* Ví dụ 3 */}
      <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
