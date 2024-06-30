/*
  Warnings:

  - You are about to drop the `aromas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `spices` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "aromas" DROP CONSTRAINT "aromas_spices_id_fkey";

-- DropTable
DROP TABLE "aromas";

-- DropTable
DROP TABLE "spices";

-- CreateTable
CREATE TABLE "spice" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "origin" VARCHAR(255) NOT NULL,
    "usage" VARCHAR(255) NOT NULL,
    "flavor" VARCHAR(255) NOT NULL,
    "health_Benefits" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "spice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aroma" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "spice_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "aroma_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "aroma" ADD CONSTRAINT "aroma_spice_id_fkey" FOREIGN KEY ("spice_id") REFERENCES "spice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
