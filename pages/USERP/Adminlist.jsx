import React from "react";

const admins = [
  {
    name: "Clara Mist",
    username: "@mist.c",
    phone: "(208) 674-3424",
    email: "mist.e@mail.com",
    country: { code: "🇦🇪", name: "UAE" },
    purchases: 327,
    status: "Pending",
    image: "/avatars/clara.png",
  },
  {
    name: "Clinette Mark",
    username: "@c.mark",
    phone: "(208) 346-4687",
    email: "c.mark@mail.com",
    country: { code: "🇯🇵", name: "JPN" },
    purchases: 324,
    status: "Complete",
    image: "/avatars/clinette.png",
  },
  {
    name: "Dennis Hall",
    username: "@dennis",
    phone: "(208) 555-0112",
    email: "dennis.e@mail.com",
    country: { code: "🇮🇳", name: "IND" },
    purchases: 210,
    status: "Active",
    image: "/avatars/dennis.png",
  },
  {
    name: "Elon Musk",
    username: "@musk",
    phone: "(208) 555-0112",
    email: "musk.e@mail.com",
    country: { code: "🇺🇸", name: "USA" },
    purchases: 548,
    status: "Active",
    image: "/avatars/elon1.png",
  },
  {
    name: "Elon Musk",
    username: "@musk",
    phone: "(208) 555-0112",
    email: "musk.e@mail.com",
    country: { code: "🇬🇷", name: "GRC" },
    purchases: 548,
    status: "Hold",
    image: "/avatars/elon2.png",
  },
  {
    name: "Elon Musk",
    username: "@musk",
    phone: "(208) 555-0112",
    email: "musk.e@mail.com",
    country: { code: "🇰🇷", name: "S.KO" },
    purchases: 548,
    status: "Complete",
    image: "/avatars/elon3.png",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Pending":
      return "bg-orange-100 text-orange-500";
    case "Complete":
      return "bg-green-100 text-green-600";
    case "Active":
      return "bg-indigo-100 text-indigo-600";
    case "Hold":
      return "bg-blue-600 text-white";
    default:
      return "bg-gray-200 text-gray-800";
  }
};

const AdminList = () => {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">User List</h1>

      {/* Controls */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="entries" className="mr-2 text-gray-700">Show</label>
          <select
            id="entries"
            className="border rounded px-2 py-1 text-sm text-gray-600"
          >
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <span className="ml-2 text-gray-700">entries</span>
        </div>
        <div>
          <label htmlFor="search" className="mr-2 text-gray-700">Search:</label>
          <input
            id="search"
            type="text"
            placeholder="Search..."
            className="border px-2 py-1 rounded text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto rounded shadow">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-left">
            <tr className="text-gray-500 uppercase text-xs">
              <th className="px-6 py-3">Profiles</th>
              <th className="px-6 py-3">Contact</th>
              <th className="px-6 py-3">Email ID</th>
              <th className="px-6 py-3">Country</th>
              <th className="px-6 py-3">Purchases</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 flex items-center gap-4">
                  <img
                    src={admin.image}
                    alt={admin.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{admin.name}</div>
                    <div className="text-gray-500">{admin.username}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">{admin.phone}</td>
                <td className="px-6 py-4 text-gray-700">{admin.email}</td>
                <td className="px-6 py-4 flex items-center gap-1">
                  <span className="text-xl">{admin.country.code}</span>
                  <span>{admin.country.name}</span>
                </td>
                <td className="px-6 py-4 text-gray-700">{admin.purchases}</td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusStyle(
                      admin.status
                    )}`}
                  >
                    {admin.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2 text-white">
                    <button className="bg-blue-600 p-2 rounded-full">👤</button>
                    <button className="bg-blue-600 p-2 rounded-full">✏️</button>
                    <button className="bg-blue-600 p-2 rounded-full">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminList;
