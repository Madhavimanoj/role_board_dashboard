'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface User {
  id: number
  name: string
  email: string
  role: string
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [suggestion, setSuggestion] = useState('')
  const router = useRouter()

  useEffect(() => {
    // In a real application, you would fetch this data from your backend
    const mockUsers: User[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'manager' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'admin' },
    ]
    setUsers(mockUsers)

    const storedUser = localStorage.getItem('currentUser')
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser))
    } else {
      router.push('/')
    }
  }, [router])

  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const handleEdit = (id: number) => {
    // In a real application, you would open a modal or navigate to an edit page
    alert(`Edit user with id ${id}`)
  }

  const handleSuggestion = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this suggestion to your backend
    alert(`Suggestion submitted: ${suggestion}`)
    setSuggestion('')
  }

  if (!currentUser) return null

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">User List</h1>
          <Link href="/users/new" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Add New User
          </Link>
        </div>
        {currentUser.role === 'manager' && (
          <form onSubmit={handleSuggestion} className="mb-4">
            <input
              type="text"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              placeholder="Enter your suggestion"
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit Suggestion
            </button>
          </form>
        )}
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(user.id)}
                    disabled={currentUser.role === 'user'}
                    className={`mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 ${currentUser.role === 'user' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    disabled={currentUser.role === 'user'}
                    className={`px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 ${currentUser.role === 'user' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

