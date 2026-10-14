import VerticalPage from '@/app/components/vertical-page';
import { marketingMetadata } from '@/app/lib/metadata';
import { research } from '@/config/verticals';

export const metadata = marketingMetadata('Verify that participants actually qualify.', research.description, '/solutions/research', '/social-research.png');

export default function ResearchPage() { return <VerticalPage content={research} />; }
