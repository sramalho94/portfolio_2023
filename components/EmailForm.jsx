import React, { useState } from 'react'

const EmailForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const msg = {
      to: 'stephanramalho@gmail.com',
      from: formData.email,
      subject: `New message from ${formData.name}`,
      text: formData.message
    }

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(msg)
    })

    if (response.ok) {
      alert('Email sent successfully!')
    } else {
      console.error(await response.json())
      alert('Failed to send email.')
    }
  }

  return (
    <div
      className={`flex items-center m-3 ${
        darkMode ? 'dark' : ''
      } bg-emerald-200 p-3 rounded-xl shadow-xl dark:bg-emerald-500 dark:bg-gradient-to-r from-teal-500`}
    >
      <form onSubmit={handleSubmit} className="w-full ">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-center dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-center dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-center dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <div className="flex flex-row justify-center">
          <button
            type="submit"
            className="bg-purple-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-purple-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default EmailForm
