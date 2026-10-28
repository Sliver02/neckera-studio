import PageHeader from "@/components/organisms/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faulty Loops Press Kit | Neckera Studio",
};

export default function FaultyLoopsPressKitPage() {
  return (
    <main className="bg-background min-h-screen">
      <PageHeader title="Faulty Loops — Press Kit" description="" />
    </main>
  );
}
