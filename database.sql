-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "shoppingList" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80),
	"quantity" DECIMAL(4, 2),
	"unit" VARCHAR(20)
);

INSERT INTO "shoppingList" ("name", "quantity", "unit")
VALUES
('Cola', '2', '04.25'),
('Bread', '1', '2.75'),
('Cake', '3', '27.99');