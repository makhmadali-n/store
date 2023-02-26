const express = require("express");
const cors = require("cors");
const pool = require("./module");

const app = express();
const port = 5555;

app.use(cors());
app.use(express.json());



// --------------------------- Admin --------------------------------- //

app.get("/AdminPage", (req, res) => {
  pool.query(`SELECT * FROM admin`, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
});


// --------------------------- Phones --------------------------------- //

app.post("/create/phone", (req, res) => {
  const {
    id,
    brend,
    img1,
    img2,
    img3,
    name,
    operatingSystem,
    display,
    camera,
    selfieCamer,
    video,
    memory,
    battery,
    discreption,
    price,
    count,
    totalPrice
  } = req.body;
  pool.query(
    `INSERT INTO "phones" ("id", "brend", "img1", "img2", "img3", "name", "operatingSystem", "display", "camera", "selfieCamer", "video", "memory", "battery", "discreption", "price", "count","totalPrice",) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`,
    [
      id,
      brend,
      img1,
      img2,
      img3,
      name,
      operatingSystem,
      display,
      camera,
      selfieCamer,
      video,
      memory,
      battery,
      discreption,
      price,
      count,
      totalPrice,
    ],
    (error, result) => {
      if (error) throw error;
      res.status(201).json("OK");
    }
  );
});

app.get("/phones", (req, res) => {
  pool.query(`SELECT * FROM phones`, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
});


// --------------------------- Tablets --------------------------------- //

app.post("/create/tablet", (req, res) => {
  const {
    id,
    brend,
    img1,
    img2,
    img3,
    name,
    operatingSystem,
    display,
    operatingMemory,
    camera,
    processor,
    selfi,
    memory,
    battery,
    discreption,
    price,
    count,
    totalPrice
  } = req.body;
  pool.query(
    `INSERT INTO "tablets" ("id", "brend", "img1", "img2", "img3", "name", "operatingSystem", "display", "operatingMemory", "camera", "processor", selfi, "memory", "battery", "discreption", "price", "count", "totalPrice") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)`,
    [
      id,
      brend,
      img1,
      img2,
      img3,
      name,
      operatingSystem,
      display,
      operatingMemory,
      camera,
      processor,
      selfi,
      memory,
      battery,
      discreption,
      price,
      count,
      totalPrice
    ],
    (error, result) => {
      if (error) throw error;
      res.status(201).json("OK");
    }
  );
});

app.get("/tablets", (req, res) => {
  pool.query(`SELECT * FROM tablets`, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
});


// --------------------------- Watches --------------------------------- //

app.post("/create/watch", (req, res) => {
  const {
    id,
    brend,
    img1,
    img2,
    img3,
    name,
    operatingSystem,
    processor,
    display,
    operatingMemory,
    memory,
    battery,
    activeHours,
    dimensions,
    discreption,
    price,
    count,
    totalPrice
  } = req.body;
  pool.query(
    `INSERT INTO "watches" ("id", "brend", "img1", "img2", "img3", "name", "operatingSystem", "processor", "display", "operatingMemory", "memory", battery, "activeHours", "dimensions", "discreption", "price", "count", "totalPrice") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)`,
    [
      id,
      brend,
      img1,
      img2,
      img3,
      name,
      operatingSystem,
      processor,
      display,
      operatingMemory,
      memory,
      battery,
      activeHours,
      dimensions,
      discreption,
      price,
      count,
      totalPrice
    ],
    (error, result) => {
      if (error) throw error;
      res.status(201).json("OK");
    }
  );
});


app.get("/watches", (req, res) => {
  pool.query(`SELECT * FROM watches`, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
});


// --------------------------- Laptops --------------------------------- //

app.post("/create/laptop", (req, res) => {
  const {
    id,
    brend,
    img1,
    img2,
    img3,
    name,
    operatingSystem,
    processor,
    processorCores,
    operatingMemory,
    display,
    videoCard,
    battery,
    ssd,
    discreption,
    price,
    count,
    totalPrice
  } = req.body;
  pool.query(
    `INSERT INTO "laptops" ("id", "brend", "img1", "img2", "img3", "name", "operatingSystem", "processor", "processorCores", "operatingMemory", "display", battery, "videoCard", "ssd", "discreption", "price", "totalPrice", "count") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)`,
    [
      id,
      brend,
      img1,
      img2,
      img3,
      name,
      operatingSystem,
      processor,
      processorCores,
      operatingMemory,
      display,
      videoCard,
      battery,
      ssd,
      discreption,
      price,
      count,
      totalPrice
    ],
    (error, result) => {
      if (error) throw error;
      res.status(201).json("OK");
    }
  );
});

app.get("/laptops", (req, res) => {
  pool.query(`SELECT * FROM laptops`, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
});


app.listen(port, () => {
  console.log("Server started");
});
