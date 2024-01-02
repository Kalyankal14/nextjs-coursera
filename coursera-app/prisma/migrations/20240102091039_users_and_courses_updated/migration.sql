-- AlterTable
ALTER TABLE `Courses` ADD COLUMN `instructor` VARCHAR(191) NOT NULL DEFAULT 'instructor name';

-- AlterTable
ALTER TABLE `Users` ADD COLUMN `email` VARCHAR(191) NOT NULL DEFAULT 'no email';
