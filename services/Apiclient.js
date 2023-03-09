
const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/`;

export const REGISTER = BASE_URL + "invests";
export const SESION = BASE_URL + "sesion";
export const UPDATE_PROJECT = BASE_URL + "update-project";
export const PROJECT = BASE_URL + "project";
export const PROJECT_TITLE = BASE_URL + "register-project";
export const COUNTRIES = 'https://restcountries.eu/rest/v2/all';


class ApiClient {
  async post(url, data) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async get(url) {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }

  async delete(url) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }
}

export default new ApiClient();