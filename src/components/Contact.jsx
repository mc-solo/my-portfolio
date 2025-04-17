// src/components/Contact.jsx
import React from 'react'

// Contact component: Displays contact information or a call-to-action.
const Contact = () => {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">Contact</h2>
      <p className="max-w-xl mx-auto text-lg text-gray-300">
        Have a project in mind or just want to connect? Reach out via email at{' '}
        <a href="mailto:your-email@example.com" className="text-neonGreen hover:underline">
          your-email@example.com
        </a>.
      </p>
    </div>
  )
}

export default Contact
