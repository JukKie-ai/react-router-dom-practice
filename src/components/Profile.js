import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  let { username } = useParams();
  return (
    <div>
      This is the profile page of {username}.
      <br />
      <strong>Hint:</strong> Add any text to URL to see changes.
      <br />
      <strong>Example:</strong> http://localhost:3000/profile/Jules
    </div>
  );
};

export default Profile;
