import VerticalPage from '@/app/components/vertical-page';
import { marketingMetadata } from '@/app/lib/metadata';
import { hiring } from '@/config/verticals';

export const metadata = marketingMetadata('Verify before you interview.', hiring.description, '/solutions/hiring', '/social-hiring.png');

export default function HiringPage() { return <VerticalPage content={hiring} />; }
