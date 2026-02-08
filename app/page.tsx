import { FunnelContainer } from '@/components/funnel';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="pt-16">
        <FunnelContainer />
      </div>
    </main>
  );
}
