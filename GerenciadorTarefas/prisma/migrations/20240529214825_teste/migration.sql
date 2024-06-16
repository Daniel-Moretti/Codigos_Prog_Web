/*
  Warnings:

  - Added the required column `cnpj` to the `Ies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ies" ADD COLUMN     "cnpj" TEXT NOT NULL;
