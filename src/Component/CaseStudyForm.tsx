import React, { useState } from "react";

interface CaseStudyFormProps {
  onClose: () => void;
  onSubmit: (data: { name: string; contact: string; email: string }) => void;
}

const CaseStudyForm: React.FC<CaseStudyFormProps> = ({ onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, contact, email });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="relative p-8 border w-96 shadow-lg rounded-md bg-white">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Full Case Study</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              id="contact"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-md shadow-sm hover:bg-gray-400 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-md shadow-sm hover:bg-yellow-500 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CaseStudyForm;
