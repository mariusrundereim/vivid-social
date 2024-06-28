// import { RootState } from "@reduxjs/toolkit/query";
import { RootState } from "../../store/auth/types";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetProfileQuery } from "../../store/profiles/apiSlice";
import { Profile as ProfileType } from "../../store/profiles/types";
function Profile() {
  const { name } = useParams<{ name: string }>();
  const token = useSelector((state: RootState) => state.auth.token);
  const {
    data: profile,
    error,
    isLoading,
  } = useGetProfileQuery(name!, { skip: !token });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;
  if (!profile) return <div>No profile data found</div>;

  const { bio, avatar, banner } = profile;

  return (
    <>
      <div>
        <h1>{profile.name}</h1>
        <img src={avatar.url} alt={avatar.alt} />
        <img src={banner.url} alt={banner.alt} />
        <p>{bio}</p>
      </div>
    </>
  );
}

export default Profile;
