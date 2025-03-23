import React, { useEffect, useState } from 'react'; import { db, auth } from '../firebase'; import { collection, getDocs } from 'firebase/firestore';

function Match() { const [matches, setMatches] = useState([]); const userId = auth.currentUser.uid;

useEffect(() => { const fetchMatches = async () => { const usersSnap = await getDocs(collection(db, 'users')); let currentUser = null; const others = [];

kotlin
Copy
Edit
  usersSnap.forEach(doc => {
    const data = doc.data();
    if (doc.id === userId) {
      currentUser = data;
    } else {
      others.push({ id: doc.id, ...data });
    }
  });

  if (currentUser) {
    const matched = others.filter(other =>
      other.interests?.some(tag => currentUser.interests?.includes(tag))
    );
    setMatches(matched);
  }
};

fetchMatches();
}, [userId]);

return ( <div className="p-6"> <h2 className="text-xl font-bold mb-4">Your Travel Matches</h2> <div className="grid gap-4 grid-cols-1 sm:grid-cols-2"> {matches.map((user) => ( <div key={user.id} className="p-4 border rounded-xl shadow"> <h3 className="font-semibold">{user.name}</h3> <p className="text-sm text-gray-500">Shared Interests: {user.interests?.join(', ')}</p> </div> ))} </div> </div> ); }

export default Match;
