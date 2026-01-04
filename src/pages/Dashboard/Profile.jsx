import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);  // use updateUser here
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setLoading(true);
    updateUser({ displayName: formData.displayName })
      .then(() => {
        alert("Profile updated!");
        setEditing(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to update profile.");
      })
      .finally(() => setLoading(false));
  };

  const handleCancel = () => {
    setFormData({
      displayName: user?.displayName || "",
      email: user?.email || "",
    });
    setEditing(false);
  };

  return (
    <div className="card bg-base-100 shadow p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-6">My Profile</h2>

      <div className="flex justify-center mb-6">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt={user?.displayName || "Profile Image"}
          className="w-32 h-32 rounded-full object-cover shadow-lg"
        />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Name:</label>
          {editing ? (
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="input input-bordered w-full"
              disabled={loading}
            />
          ) : (
            <p>{user?.displayName}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="input input-bordered w-full  cursor-not-allowed"
          />
        </div>

        <div className="flex gap-4 mt-4 justify-center flex-row items-center">
          {editing ? (
            <>
              <button
                className="btn btn-gradient"
                onClick={handleSave}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
              <button className="btn rounded-full btn-outline" onClick={handleCancel} disabled={loading}>
                Cancel
              </button>
            </>
          ) : (
            <button
              className="btn btn-gradient btn-block"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
