import React, { useState } from "react"; import { db, auth } from "../firebase"; import { doc, updateDoc, arrayUnion } from "firebase/firestore";

function TravelLog() { const [place, setPlace] = useState("");

const handleAddPlace = async () => { if (!place) return; const userRef = doc(db, "users", auth.currentUser.uid); await updateDoc(userRef, { visitedPlaces: arrayUnion(place), }); setPlace(""); alert("Place added!"); };

return ( <div className="p-6"> <h2 className="text-xl font-bold mb-4">Add a Place You’ve Visited</h2> <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="e.g., Paris, France" className="border p-2 rounded w-full mb-3" /> <button onClick={handleAddPlace} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" > Add Place </button> </div> ); }

export default TravelLog;
