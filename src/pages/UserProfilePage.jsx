import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import Image from "../components/Image";
import {
  USER_DATA_LS_KEY,
  saveDataToLocal,
  getDataFromLocal,
} from "../utils/savedata";
import { fetchLocation } from "../utils/locationService";
import { fetchUser, loadStaticDataFromFile } from "../utils/userService";

const genderOptions = [
  { value: "male", option: "Male" },
  { value: "female", option: "Female" },
  { value: "other", option: "Other" },
];

const initialData = {
  name: "",
  age: "",
  gender: "male",
  location: "",
  interest1: "",
  interest2: "",
  email: "",
  username: "",
  displayName: "",
  avatarUri: "",
};

const setInitialData = () => {
  const data = getDataFromLocal(USER_DATA_LS_KEY);
  if (!data) return initialData;
  return data;
};

const UserProfilePage = () => {
  const [formData, setFormData] = useState(setInitialData);
  const [userFetchLoading, setUserFetchLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);

  useEffect(() => {
    // Auto save data to localstorage
    saveDataToLocal(USER_DATA_LS_KEY, formData);
  }, [formData]);

  const handleInput = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getCurrentLocation = async () => {
    try {
      setLocationLoading(true);
      const location = await fetchLocation();
      setFormData((prev) => ({ ...prev, location }));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLocationLoading(false);
    }
  };

  const onFetchUserData = async () => {
    try {
      setUserFetchLoading(true);
      const userData = await fetchUser();
      setFormData((prev) => ({ ...prev, ...userData }));
    } catch (error) {
      // Loading static data from json file
      const userData = loadStaticDataFromFile();
      setFormData((prev) => ({ ...prev, ...userData }));
      toast.error(`${error.message}. Loading data from static file.`);
    } finally {
      setUserFetchLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    for (let key in formData) {
      formData[key] = formData[key].trim();
    }

    saveDataToLocal(USER_DATA_LS_KEY, formData);
    toast.success("Saved data successfully");
  };

  return (
    <div className="max-w-xl mx-auto p-4 rounded-md space-y-4 bg-white shadow-md">
      <h1 className="text-xl font-medium">User Profile</h1>
      <Image src={formData.avatarUri} alt={formData.displayName} />
      <div>
        <form onSubmit={handleFormSubmit} className="space-y-2">
          <Input
            id="name"
            type="text"
            name="name"
            label="Name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInput}
          />
          <Input
            id="age"
            type="number"
            name="age"
            label="Age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleInput}
          />
          <Select
            id="gender"
            name="gender"
            label="Choose gender"
            options={genderOptions}
            value={formData.gender}
            onChange={handleInput}
          />
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <Input
                id="location"
                type="text"
                name="location"
                label="Location"
                placeholder="Enter your location"
                value={formData.location}
                onChange={handleInput}
              />
            </div>
            <Button onClick={getCurrentLocation} showLoading={locationLoading}>
              Get Location
            </Button>
          </div>
          <Input
            id="interest1"
            type="text"
            name="interest1"
            label="Interest 1"
            placeholder="Enter your first interest"
            value={formData.interest1}
            onChange={handleInput}
          />
          <Input
            id="interest2"
            type="text"
            name="interest2"
            label="Interest 2"
            placeholder="Enter your second interest"
            value={formData.interest2}
            onChange={handleInput}
          />
          <Input
            id="email"
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInput}
          />
          <Input
            id="username"
            type="text"
            name="username"
            label="Username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleInput}
          />
          <Input
            id="displayName"
            type="text"
            name="displayName"
            label="Display name"
            placeholder="Enter your display name"
            value={formData.displayName}
            onChange={handleInput}
          />
          <Input
            id="avatarUri"
            type="url"
            name="avatarUri"
            label="Avatar"
            placeholder="Enter your avatar url"
            value={formData.avatarUri}
            onChange={handleInput}
          />
          <div className="flex items-center justify-end space-x-4">
            <Button onClick={onFetchUserData} showLoading={userFetchLoading}>
              Fetch User Data
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfilePage;
