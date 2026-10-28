import VerticalPage from '@/app/components/vertical-page';
import { marketingMetadata } from '@/app/lib/metadata';
import { government } from '@/config/verticals';

export const metadata = marketingMetadata('Verify once. Reuse across government programs.', government.description, '/solutions/government', '/social-government.png');

export default function GovernmentPage() { return <VerticalPage content={government} />; }
