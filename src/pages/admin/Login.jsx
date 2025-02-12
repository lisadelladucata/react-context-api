import { useState } from "react";
import { useNavigate } from "react-router-dom";
const initialFormData = {
  email: "",
  password: "",
};

export default function Login() {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (fieldName, value) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [fieldName]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.email === "lisa.delladucata@gmail.com" &&
      formData.password === "1234"
    ) {
      navigate("/admin");
    } else {
      setError("accesso negato");
    }
  };

  return (
    <div className="container contacts">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Inserisci email"
            value={formData.email}
            onChange={() => handleInputChange("email", event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Inserisci password"
            value={formData.password}
            onChange={() => handleInputChange("password", event.target.value)}
            required></input>
        </div>

        <button type="submit">Login</button>
        <div className="error">{error}</div>
      </form>
    </div>
  );
}
