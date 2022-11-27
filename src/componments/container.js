import React from "react";

export const Container = () => {
  async function postData(url = "", data = {}) {
    const data = {
      token: "2sGMxTwKeClnILXa3aK2",
      environment: "uat",
      image: "atomportal_frontend",
      tag: "develop",
    };

    fetch("https://example.com/profile", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    s;
  }

  return <div>container</div>;
};
