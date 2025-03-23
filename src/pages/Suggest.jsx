import React, { useEffect, useState } from 'react'; import { db, auth } from '../firebase'; import { doc, getDoc } from 'firebase/firestore';

const places = [ { name: 'Bali', tags: ['Beach', 'Culture'] }, { name: 'Switzerland', tags: ['Mountains', 'Nature'] }, { name: 'Thailand', tags: ['Food', 'Adventure'] }, { name: 'Rajasthan', tags: ['Culture', 'Desert'] } ];

function Suggest() { const [userTags, setUserTags] = useState([]); const [suggestions, setSuggestions] = useState([]);

useEffect(() => { const fetchUser = async () => { const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid)); const data = userDoc.data(); setUserTags(data.interests || []); };

scss
Copy
Edit
fetchUser();
}, []);

useEffect(() => { const result = places.filter(place => place.tags.some(tag => userTags.includes(tag)) ); setSuggestions(result); }, [userTags]);

return ( <div className="p-6"> <h2 className="text-xl font-bold mb-4">Suggested Destinations</h2> <div className="grid gap-4 grid-cols-1 sm:grid-cols-2"> {suggestions.map((place, i) => ( <div key={i} className="p-4 border rounded-xl shadow bg-white"> <h3 className="text-lg font-semibold">{place.name}</h3> <p className="text-sm text-gray-500">Tags: {place.tags.join(', ')}</p> </div> ))} </div> </div> ); }

export default Suggest;
