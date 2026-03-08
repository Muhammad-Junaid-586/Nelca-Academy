// app/admissions/page.js

import Admissions from "@/components/Admissions";
import PageHero from "@/components/PageHero";

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero
      title="Admissions at NELCA"
      description="Begin your journey to a better future. Our simple 5-step process gets you enrolled quickly and easily."
      breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions" },
        ]}
      
    />
      <Admissions />
    </main>
  );
}
