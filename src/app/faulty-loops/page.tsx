import PageHeader from "@/components/organisms/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faulty Loops | Neckera Studio",
};

export default function FaultyLoopsPage() {
  return (
    <main className="bg-background min-h-screen">
      <PageHeader title="Faulty Loops" description="" />
    </main>
  );
}
