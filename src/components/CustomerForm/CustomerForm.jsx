import { useState } from "react";
import "./CustomerForm.css";
const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = {
      id: Math.random(),
      customerName,
    };
    addNewCustomer(newCustomer);
    setCustomerName(" ");
  };

  return (
    <form className="customerForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="customerInput "
        placeholder="Add a new customer"
        onChange={(e) => setCustomerName(e.target.value)}
        value={customerName}
      />

      <button>
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};
export default CustomerForm;