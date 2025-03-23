import React, { useEffect, useState } from "react"; import { db } from "../firebase"; import { collection, getDocs } from "firebase/firestore";

function Leaderboard() { const [leaders, setLeaders] = useState([]);

useEffect(() => { const fetchLeaders = async () => { const usersSnap = await getDocs(collection(db, "users")); const sorted = [];

javascript
Copy
Edit
  usersSnap.forEach((doc) => {
    const data = doc.data();
    sorted.push({
      name: data.name,
      count: (data.visitedPlaces || []).length,
    });
  });

  sorted.sort((a, b) => b.count - a.count);
  setLeaders(sorted);
};

fetchLeaders();
}, []);

return ( <div className="p-6"> <h2 className="text-xl font-bold mb-4">🏆 Travel Leaderboard</h2> <ol className="list-decimal pl-6 space-y-2"> {leaders.map((user, index) => ( <li key={index} className="text-gray-700"> {user.name} — {user.count} places visited </li> ))} </ol> </div> ); }

export default Leaderboard;
