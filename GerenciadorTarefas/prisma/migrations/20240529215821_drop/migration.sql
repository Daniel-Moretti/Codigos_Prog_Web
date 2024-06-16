/*
  Warnings:

  - You are about to drop the `Campus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Campus" DROP CONSTRAINT "Campus_iesCodigo_fkey";

-- DropTable
DROP TABLE "Campus";
