-- CreateTable
CREATE TABLE "teachers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "terms" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "terms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teachers_name_key" ON "teachers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "terms_number_key" ON "terms"("number");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");
