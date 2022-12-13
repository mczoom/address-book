export const getAllCards = () => {
    return fetch('http://127.0.0.1:3001', {
      headers: {
          "Content-Type": "application/json",
          }
      })
      .then(res => res.json())
      .catch((err) => console.log(err));
    };