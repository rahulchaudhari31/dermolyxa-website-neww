import LegalPage from '../components/sections/legal/LegalPage';
import { privacyPolicy } from '../data/legal';

export default function PrivacyPolicyPage() {
  return <LegalPage {...privacyPolicy} />;
}
