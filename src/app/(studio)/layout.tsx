import Footer from "@/components/organisms/Footer";

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
