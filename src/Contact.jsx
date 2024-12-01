import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
}

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState(""); // Da prikažemo status uspeha/greške

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Ime je obavezno.";
    if (!formData.email) {
      newErrors.email = "Email je obavezan.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Unesite validan email.";
    }
    if (!formData.message) newErrors.message = "Poruka je obavezna.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
const response = await fetch("/api/contact", {          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (response.ok) {
          setStatus("Poruka je uspešno poslata!");
          setFormData({ name: "", email: "", message: "" }); // Resetovanje forme
        } else {
          setStatus("Došlo je do greške prilikom slanja poruke.");
        }
      } catch (error) {
        console.error("Error:", error);
        setStatus("Greška prilikom slanja poruke.");
      }
    }
  };

  return (
    <>
      <h1 className={styles.title}>Kontaktiraj me👻</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Ime</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Poruka</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>
        <button type="submit">Pošaljite</button>
        {status && <p>{status}</p>} {/* Status poruka */}
      </form>
    </>
  );
}

export default Contact;
