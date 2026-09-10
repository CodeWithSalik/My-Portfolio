import Hero from '@/components/home/Hero';
import SelectedWork from '@/components/home/SelectedWork';
import KashmirStagFeature from '@/components/home/KashmirStagFeature';
import EngineeringHighlight from '@/components/home/EngineeringHighlight';
import AchievementsPreview from '@/components/home/AchievementsPreview';
import AcademicJourney from '@/components/home/AcademicJourney';
import HowIBuild from '@/components/home/HowIBuild';
import JourneyTimeline from '@/components/home/JourneyTimeline';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SelectedWork />
      <KashmirStagFeature />
      <EngineeringHighlight />
      <AchievementsPreview />
      <AcademicJourney />
      <HowIBuild />
      <JourneyTimeline />
      <ContactCTA />
    </div>
  );
}
