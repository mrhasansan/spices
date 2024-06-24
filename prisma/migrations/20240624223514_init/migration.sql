-- CreateTable
CREATE TABLE "spices" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "origin" VARCHAR(255) NOT NULL,
    "usage" VARCHAR(255) NOT NULL,
    "flavor" VARCHAR(255) NOT NULL,
    "health_Benefits" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "spices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aromas" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "spices_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "aromas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "aromas" ADD CONSTRAINT "aromas_spices_id_fkey" FOREIGN KEY ("spices_id") REFERENCES "spices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
