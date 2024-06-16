-- CreateTable
CREATE TABLE "Campus" (
    "codigo" TEXT NOT NULL,
    "iesCodigo" TEXT NOT NULL,

    CONSTRAINT "Campus_pkey" PRIMARY KEY ("codigo")
);

-- AddForeignKey
ALTER TABLE "Campus" ADD CONSTRAINT "Campus_iesCodigo_fkey" FOREIGN KEY ("iesCodigo") REFERENCES "Ies"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
