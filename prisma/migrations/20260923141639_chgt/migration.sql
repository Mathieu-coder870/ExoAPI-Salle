/*
  Warnings:

  - You are about to drop the column `Label` on the `role` table. All the data in the column will be lost.
  - Added the required column `label` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `role` DROP COLUMN `Label`,
    ADD COLUMN `label` VARCHAR(191) NOT NULL;
