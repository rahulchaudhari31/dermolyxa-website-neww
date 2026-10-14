import LegalPage from '../components/sections/legal/LegalPage';
import { refundPolicy } from '../data/legal';

export default function RefundPolicyPage() {
  return <LegalPage {...refundPolicy} />;
}
