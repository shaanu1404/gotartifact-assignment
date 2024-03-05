### Steps to run application

- For location service to work effectively, go to [Artifact](https://www.abstractapi.com/api/ip-geolocation-api) and get Apikey and IpAddress
- Create .env file using .env.example file and add Apikey and IpAddress to respective environment variables
- Run application using command.
  ```bash
      npm run dev
  ```
- Add the user token in the local storage using the key **"token"**.
- For fetching user detail from the given [user api](https://api-staging-0.gotartifact.com/v2/users/me) (enabling CORS required), click the button **Fetch User Data** and it will fill out the details from the api else if, the api doesn't work it will fetch data from the given JSON file.
- When user is filling values in the form it will get auto-saved in the localstorage.
