/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Events` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Events` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `UserEvents` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `UserEvents` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Events" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ALTER COLUMN "date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "UserEvents" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
