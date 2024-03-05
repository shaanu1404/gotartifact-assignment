import fakedata from "../fakedata.json";

const userProfileUrl = "https://api-staging-0.gotartifact.com/v2/users/me";
const TOKEN_LS_KEY = "token";

export const fetchUser = async () => {
  const token = localStorage.getItem(TOKEN_LS_KEY);

  const response = await fetch(userProfileUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch user data");

  const data = await response.json();
  if (!data.success) throw new Error(data.error);

  return {
    email: data.profile.email,
    username: data.profile.username,
    displayName: data.profile.display_name,
    avatarUri: data.profile.avatar_uri,
  };
};

export const loadStaticDataFromFile = () => {
  return {
    email: fakedata.profile.email,
    username: fakedata.profile.username,
    displayName: fakedata.profile.display_name,
    avatarUri: fakedata.profile.avatar_uri,
  };
};
