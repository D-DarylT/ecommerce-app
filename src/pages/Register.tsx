import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const buyerFields = [
  {
    category: "Personal Information",
    fields: [
      { label: "Full Name", name: "fullName", type: "text", required: true },
      { label: "Email Address", name: "email", type: "email", required: true },
      { label: "Phone Number", name: "phone", type: "tel", required: true },
      { label: "Password", name: "password", type: "password", required: true },
      { label: "Confirm Password", name: "confirmPassword", type: "password", required: true },
    ],
  },
  {
    category: "Location",
    fields: [
      { label: "Country", name: "country", type: "text", required: true },
      { label: "City", name: "city", type: "text", required: true },
      { label: "Address", name: "address", type: "text", required: true },
      { label: "Postal Code", name: "postalCode", type: "text", required: false },
    ],
  },
  {
    category: "Preferences",
    fields: [
      { label: "Preferred Contact Method", name: "contactMethod", type: "select", options: ["Email", "Phone"], required: true },
      { label: "Interested Product Types", name: "interests", type: "text", required: false },
    ],
  },
];

const supplierFields = [
  {
    category: "Personal Information",
    fields: [
      { label: "Full Name", name: "fullName", type: "text", required: true },
      { label: "Email Address", name: "email", type: "email", required: true },
      { label: "Phone Number", name: "phone", type: "tel", required: true },
      { label: "Password", name: "password", type: "password", required: true },
      { label: "Confirm Password", name: "confirmPassword", type: "password", required: true },
    ],
  },
  {
    category: "Company Details",
    fields: [
      { label: "Company Name", name: "companyName", type: "text", required: true },
      { label: "Company Website", name: "companyWebsite", type: "url", required: false },
      { label: "Business Type", name: "businessType", type: "select", options: ["Manufacturer", "Distributor", "Retailer", "Other"], required: true },
      { label: "Years in Business", name: "yearsInBusiness", type: "number", required: false },
    ],
  },
  {
    category: "Location",
    fields: [
      { label: "Country", name: "country", type: "text", required: true },
      { label: "City", name: "city", type: "text", required: true },
      { label: "Address", name: "address", type: "text", required: true },
      { label: "Postal Code", name: "postalCode", type: "text", required: false },
    ],
  },
  {
    category: "Product & Service",
    fields: [
      { label: "Main Products", name: "mainProducts", type: "text", required: true },
      { label: "Service Regions", name: "serviceRegions", type: "text", required: false },
    ],
  },
];

function RegistrationForm({ role }: { role: "buyer" | "supplier" }) {
  const fields = role === "buyer" ? buyerFields : supplierFields;
  const [form, setForm] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // TODO: handle registration logic
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 via-white to-fuchsia-100 dark:from-gray-900 dark:via-gray-950 dark:to-cyan-950 py-12 px-4">
      <form
        className="w-full max-w-2xl bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-10 space-y-10 border border-cyan-100 dark:border-cyan-900 backdrop-blur-xl"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 className="text-3xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-2 text-center">
          {role === "buyer" ? "Buyer" : "Supplier"} Registration
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Please fill in all required details to create your account.
        </p>
        {fields.map((section) => (
          <div key={section.category} className="space-y-4">
            <h3 className="text-xl font-bold text-fuchsia-700 dark:text-fuchsia-300 mb-2">
              {section.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.fields.map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="mb-1 font-semibold text-cyan-800 dark:text-cyan-200" htmlFor={field.name}>
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  {field.type === "select" ? (
                    <select
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      value={form[field.name] || ""}
                      onChange={handleChange}
                      className="rounded-lg border border-cyan-200 dark:border-cyan-800 px-4 py-2 bg-white dark:bg-gray-800 text-cyan-900 dark:text-cyan-100 focus:ring-2 focus:ring-cyan-400 outline-none"
                    >
                      <option value="" disabled>
                        Select {field.label}
                      </option>
                      {field.options?.map((opt: string) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      value={form[field.name] || ""}
                      onChange={handleChange}
                      className="rounded-lg border border-cyan-200 dark:border-cyan-800 px-4 py-2 bg-white dark:bg-gray-800 text-cyan-900 dark:text-cyan-100 focus:ring-2 focus:ring-cyan-400 outline-none"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold text-lg shadow-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all"
        >
          Register
        </button>
        {submitted && (
          <div className="mt-6 text-center text-cyan-700 dark:text-cyan-300 font-semibold">
            Registration submitted! (Demo only)
          </div>
        )}
      </form>
    </div>
  );
}


// Modal wrapper for registration form
function RegistrationModal({ open, onClose, role }: { open: boolean; onClose: () => void; role: "buyer" | "supplier" }) {
  return (
    <Dialog open={open} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black/40 dark:bg-black/70 backdrop-blur-sm" aria-hidden="true" />
        <div className="relative z-10 w-full max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-cyan-100 dark:border-cyan-900 p-0">
            <RegistrationForm role={role} />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-cyan-400 hover:text-fuchsia-400 text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

const RegisterPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [role, setRole] = useState<"buyer" | "supplier" | null>(null);

  function openModal(selectedRole: "buyer" | "supplier") {
    setRole(selectedRole);
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
    setTimeout(() => setRole(null), 300);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-100 via-white to-fuchsia-100 dark:from-gray-900 dark:via-gray-950 dark:to-cyan-950 py-12 px-4">
      <div className="w-full max-w-xl bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-10 border border-cyan-100 dark:border-cyan-900 backdrop-blur-xl flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-2 text-center">Register</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Choose your registration type:
        </p>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          <button
            onClick={() => openModal("buyer")}
            className="flex-1 py-6 px-8 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 dark:from-cyan-700 dark:to-cyan-900 text-white font-bold text-xl shadow-lg hover:from-cyan-500 hover:to-cyan-700 transition-all border-4 border-transparent hover:border-cyan-200 dark:hover:border-cyan-800 focus:outline-none"
          >
            Register as Buyer
          </button>
          <button
            onClick={() => openModal("supplier")}
            className="flex-1 py-6 px-8 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 dark:from-fuchsia-700 dark:to-fuchsia-900 text-white font-bold text-xl shadow-lg hover:from-fuchsia-500 hover:to-fuchsia-700 transition-all border-4 border-transparent hover:border-fuchsia-200 dark:hover:border-fuchsia-800 focus:outline-none"
          >
            Register as Supplier
          </button>
        </div>
      </div>
      {role && (
        <RegistrationModal open={modalOpen} onClose={closeModal} role={role} />
      )}
    </div>
  );
};

export default RegisterPage;
