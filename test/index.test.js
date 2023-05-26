const app = require("../src/app");
const session = require("supertest");
const agent = session(app); //promesa para testear rutas

const character = {
  id: 932,
  name: "yo",
  species: "human",
  origin: {
    name: "Earth (C-137)",
  },
  image: "image.jpg",
  gender: "Male",
  status: "alive",
};

describe("test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(response.statusCode).toBe(200);
    });

    it("Responde un objeto con las porpiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
      const response = (await agent.get("rickandmorty/character/1")).body;
      expect(response).toHaveProperty("id");
      expect(response).toHaveProperty("name");
      expect(response).toHaveProperty("species");
      expect(response).toHaveProperty("gender");
      expect(response).toHaveProperty("status");
      expect(response).toHaveProperty("origin");
      expect(response).toHaveProperty("image");

      // const response = await agent.get("/rickandmorty(character/1");
      // for (const prop in character) {
      // }

      // const props = [
      //   "id",
      //   "name",
      //   "species",
      //   "gender",
      //   "status",
      //   "origin",
      //   "image",
      // ];
      // props.forEach((prop) => {
      //   expect(response.body).toHaveProperty(prop);
      // });

      //1 forma de recorrer
      // const obj = {
      //   id: 932,
      //   name: "yo",
      //   species: "human",
      //   origin: {
      //     name: "Earth (C-137)",
      //   },
      //   image: "image.jpg",
      //   gender: "Male",
      //   status: "alive",
      // };
      //       for (const prop in response.body) {
      //   expect(response.body).toHaveProperty(prop);
      // }
    });

    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty(character/3209j").expect(500);
      // const response = await agent.get("/rickandmorty(character/3209j");
      // expect(response.statusCode).toBe(500);
    });
  });

  //EJE 5
  describe("GET /rickandmorty/login", () => {
    it("La informacion de login es valida", async () => {
      const response = (
        await agent.get(
          "/rickandmorty/login?email=rami@gmail.com&password=1234qwerty"
        )
      ).body;
      expect(response.access).toEqual(true);
      // const access = { access: true };
      // expect(response.body).toEqual(access);
    });

    it("La informacion de login es invalida", async () => {
      const response = (
        await agent.get(
          "/rickandmorty/login?email=pepito@gmail.com&password=123344qwerty"
        )
      ).body;
      expect(response.access).toEqual(false);
      // const access = { access: false };
      // expect(response.body).toEqual(access);
    });
  });

  //EJE6
  describe("POST /rickandmorty/fav", () => {
    //6.1
    const character1 = { id: "1", name: "Ramiro" };
    const character2 = { id: "2", name: "Octavio" };
    it("Debe guardar al personaje en favoritos", async () => {
      const response = await agent.post("/rickandmorty/fav").send(character1);
      expect(response.body).toContainEqual(character1);
    });
    //6.2
    it("Debe agregar personajes a favoritos sin eliminar los que ya existian", async () => {
      character.id = 1923;
      character.name = "Ft 37";
      const response = await agent.post("/rickandmorty/fav").send(character);
      expect(response.body.length).toBe(2);
    });
  });

  //EJE 7
  describe("DELETE /rickandmorty/fav/:id", () => {
    const character1 = { id: "1", name: "Ramiro" };
    const character2 = { id: "2", name: "Octavio" };
    it("Si el ID solicitado no existe, deberia retornar un arreglo con todoslos favoritos", async () => {
      const response = (await agent.delete("/rickandmorty/fav/3457")).body;
      expect(response).toContainEqual(character1);
      expect(response).toContainEqual(character2);
    });

    it("Si el ID enviado existe, debería eliminarlo de favoritos", async () => {
      const response = (await agent.delete("/rickandmorty/fav/1")).body;
      expect(response).toContainEqual(character1);
    });
  });
});
