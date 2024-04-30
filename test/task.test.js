const mongoose = require('mongoose')
const request = require('supertest')
const app=require('../index')

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URL);
  });
  
  /* Dropping the database and closing connection after each test. */
  afterEach(async () => {
    // await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });
//   testing for adding  a task 

    describe("POST /create", () => {
    it("should create a task", async () => {
      const res = await request(app).post("/create")
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        title: "study",
        description: "Complete homework",
        status: 'pending'
      });
      expect(res.statusCode).toBe(201);
      expect(res.body.task.title).toBe("study");
    });
  });
//  testing for updating a task by its id
  describe("Patch update/:id", () => {
    it("should update a task", async () => {
      const res = await request(app)
        .patch("/update/6630d0321f7cf7a3d4a93a9d")
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
       
            status: "pending",
         
        });
      expect(res.statusCode).toBe(200);
      expect(res.body.task.status).toBe("pending");
    });
  })

//  testing for getting  all task by its id
  describe("GET /Task", () => {
    it("should return all task", async () => {
      const res = await request(app).get("/");
      expect(res.statusCode).toBe(200);
      expect(res.body.task.length).toBeGreaterThanOrEqual(0)
    });
  });


//   testing for getting  a task by its id
  describe("GET task/:id", () => {
    it("should return a task", async () => {
      const res = await request(app).get(
        "/task/6630d0321f7cf7a3d4a93a9d"
      );
      expect(res.statusCode).toBe(200);
      expect(res.body.task.title).toBe("study");
    });
  });

//    testing for deleting a task by its id
  describe("DELETE /delete/:id", () => {
    it("should delete a task", async () => {
      const res = await request(app).delete(
        "/delete/6630d0321f7cf7a3d4a93a9d"
      );
      expect(res.statusCode).toBe(204);
    });
  });