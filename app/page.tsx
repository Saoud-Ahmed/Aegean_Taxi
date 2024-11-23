import TaxiSection from './components/TaxiLocationSection/TaxiLocationsSections';
import TaxiInLocationSection from './components/TaxiSection/TaxiSection';
import LandingPage from './components/LandingSection/LandingSection'

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <LandingPage />
     
      <TaxiSection />

      <TaxiInLocationSection />
    </main>
  );
}
