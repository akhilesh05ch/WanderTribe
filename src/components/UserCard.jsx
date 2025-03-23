import React from "react";

function UserCard({ name, interests }) { return ( <div className="p-4 bg-white rounded-xl shadow-md border hover:shadow-lg transition duration-200"> <h3 className="text-lg font-semibold text-gray-800">{name}</h3> <p className="text-sm text-gray-500 mt-1"> Interests: {interests && interests.join(", ")} </p> <button className="mt-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-700"> Connect </button> </div> ); }

export default UserCard;
