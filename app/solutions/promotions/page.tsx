import VerticalPage from '@/app/components/vertical-page';
import { marketingMetadata } from '@/app/lib/metadata';
import { promotions } from '@/config/verticals';

export const metadata = marketingMetadata('Verify the purchase behind the claim.', promotions.description, '/solutions/promotions', '/social-promotions.png');

export default function PromotionsPage() { return <VerticalPage content={promotions} />; }
