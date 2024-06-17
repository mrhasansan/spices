CREATE TABLE "spices" (
  "id" integer PRIMARY KEY,
  "name" varchar(255),
  "description" varchar(500),
  "origin" varchar(255),
  "usage" varchar(255),
  "flavor" varchar(255),
  "health_Benefits" varchart(255),
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "aromas" (
  "id" integer,
  "name" varchar(255),
  "spices_id" integer,
  "created_at" timestamp,
  "updated_at" timestamp
);

ALTER TABLE "aromas" ADD FOREIGN KEY ("spices_id") REFERENCES "spices" ("id");
