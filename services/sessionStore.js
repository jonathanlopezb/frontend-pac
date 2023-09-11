
function storeSession(data) {
  return new Promise((resolve, reject) => {
    try {
      const session = JSON.stringify(data);
      window.sessionStorage.setItem("session", session);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

function getSession() {
  return new Promise((resolve, reject) => {
    try {
      const session = window.sessionStorage.getItem("session");
      resolve(JSON.parse(session || "{}"));
    } catch (error) {
      reject(error);
    }
  });
}

function logout() {
  return new Promise((resolve, reject) => {
    try {
      window.sessionStorage.removeItem("session");
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

function validSession() {
  return new Promise((resolve, reject) => {
    try {
      const session = window.sessionStorage.getItem("session");
      if (session) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export { storeSession, getSession, logout, validSession };
