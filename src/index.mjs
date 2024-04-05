// https://youtu.be/nH9E25nkk3I?t=1808

import express, { request, response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "anson", displayName: "Anson" },
  { id: 2, username: "jack", displayName: "Jack" },
  { id: 3, username: "adam", displayName: "Adam" },
];

app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hellooo" });
});

app.get("/api/users", (request, response) => {
  response.send(mockUsers);
});

app.get("/api/users/:id", (request, response) => {
  // console.log(request.params);
  const parseId = parseInt(request.params.id);

  if (isNaN(parseId))
    return response.status(400).send({ msg: "Bad request.  Invalid ID" });

  const findUser = mockUsers.find((user) => user.id === parseId);

  if (!findUser) return response.sendStatus(404);

  return response.send(findUser);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
