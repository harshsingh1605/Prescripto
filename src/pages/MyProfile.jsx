import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Harsh",
    image: assets.profile_pic,
    phone: "+1 234 567 890",
    email: "johndoe@example.com",
    address: {
      line1: "123, ABC Street",
      line2: "XYZ",
    },
    gender: "Male",
    dob: "2000-01-01",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col gap-4">
      <div className="flex flex-col items-center gap-4">
        <img
          className="w-36 h-36 rounded-full object-cover"
          src={userData.image}
          alt="Profile"
        />
        {isEdit ? (
          <input
            className="bg-gray-50 text-3xl font-medium text-center w-full border border-gray-300 rounded p-2"
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="font-medium text-3xl text-neutral-800">
            {userData.name}
          </p>
        )}
      </div>

      <hr className="border-gray-300" />

      <div className="space-y-4">
        <p className="text-neutral-500 font-semibold underline">
          Contact Information
        </p>
        <div className="grid grid-cols-2 gap-y-2 items-center text-neutral-700">
          <p>Email:</p>
          <p className="text-blue-500">{userData.email}</p>

          <p>Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-50 border border-gray-300 rounded p-2 "
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-500" >{userData.phone}</p>
          )}

          <p>Address:</p>
          {isEdit ? (
            <div className="space-y-2">
              <input
                className="bg-gray-50 border border-gray-300 rounded p-2 w-full "
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                type="text"
                placeholder="Address Line 1"
              />
              <input
                className="bg-gray-50 border border-gray-300 rounded p-2 w-full"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                type="text"
                placeholder="Address Line 2"
              />
            </div>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <hr className="border-gray-300" />

      <div className="space-y-4">
        <p className="text-neutral-500 font-semibold underline">
          Basic Information
        </p>
        <div className="grid grid-cols-2 gap-y-2 items-center text-neutral-700">
          <p>Gender:</p>
          {isEdit ? (
            <select
              className="bg-gray-50 border border-gray-300 rounded p-2"
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}

          <p>Birthday:</p>
          {isEdit ? (
            <input
              className="bg-gray-50 border border-gray-300 rounded p-2"
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600 transition"
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? "Save Info" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
