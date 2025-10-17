"use client";
import { useEffect, useState } from "react";
import DashboardTable from "./DashboardTable";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Users Marks Dashboard</h1>
      <DashboardTable users={users} />
    </div>
  );
}
