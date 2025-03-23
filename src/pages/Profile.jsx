import React, { useState } from 'react'; import { db, auth } from '../firebase'; import { collection, doc, setDoc } from 'firebase/firestore';

function Profile() { const [name, setName] = useState(''); const [interests, setInterests] = useState([]); const travelTags = ['Adventure', 'Nature', 'Food', 'Culture', 'Beach', 'Mountains'];

const handleInterestClick = (tag) => { setInterests((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag] ); };

const handleSubmit = async () => { const userRef = doc(db, 'users', auth.currentUser.uid); await setDoc(userRef, { name, email: auth.currentUser.email, interests }); alert('Profile saved!'); };

return ( <div className="p-8"> <h2 className="text-xl font-bold">Complete Your Profile</h2> <input placeholder="Your Name" className="border p-2 my-4 w-full" onChange={(e) => setName(e.target.value)} /> <div className="mb-4"> <p>Select your travel interests:</p> <div className="flex flex-wrap gap-2 mt-2"> {travelTags.map((tag) => ( <button key={tag} className={px-3 py-1 rounded-full border ${ interests.includes(tag) ? 'bg-blue-600 text-white' : 'bg-gray-200' }} onClick={() => handleInterestClick(tag)} > {tag} </button> ))} </div> </div> <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded"> Save Profile </button> </div> ); }

export default Profile;
