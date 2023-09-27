
"use client"

export default function ClientsView({ users }) {
  return (
    <div className="text-black">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-teal-950 bg-opacity-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Rol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={user._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-6 py-3 whitespace-nowrap text-md  text-gray-500">{index + 1}</td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p className="text-sm text-gray-500">{user.email}</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p className="text-sm text-gray-500">{user.role}</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
