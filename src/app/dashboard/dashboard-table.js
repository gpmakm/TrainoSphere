export default function DashboardTable({ users }) {
  if (!users.length) return <p>No user data available.</p>;

  return (
    <table className="min-w-full border border-gray-300 text-sm text-left">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Test Name</th>
          <th className="border p-2">Score</th>
          <th className="border p-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u._id}>
            <td className="border p-2">{u.name}</td>
            <td className="border p-2">{u.email}</td>
            <td className="border p-2">{u.testName}</td>
            <td className="border p-2">{u.score}</td>
            <td className="border p-2">
              {new Date(u.date).toLocaleDateString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
