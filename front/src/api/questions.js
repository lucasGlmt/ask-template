import { host, checkStatus } from ".";

const questions = {
  addQuestion: (body) => {
    let fd = new FormData();
    fd.append("author", body.author);
    fd.append("question", body.question);
    fd.append("type", body.type);
    fd.append("file", body.file);

    return fetch(`${host}/questions`, {
      method: "POST",

      body: fd,
    })
      .then(checkStatus)
      .then((res) => res.json())
      .catch((err) => console.error(err));
  },
  getAll: () => {
    return fetch(`${host}/questions`, {
      method: "GET",
    })
      .then(checkStatus)
      .then((res) => res.json());
  },
  getOne: (id) => {
    return fetch(`${host}/questions/${id}`, {
      method: "GET",
    })
      .then(checkStatus)
      .then((res) => res.json());
  },
  answer: ({ id, body }) => {
    return fetch(`${host}/questions/${id}/answer`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(checkStatus)
      .then((res) => res.json());
  },
};

export default questions;
