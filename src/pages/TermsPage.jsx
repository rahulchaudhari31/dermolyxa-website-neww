import LegalPage from '../components/sections/legal/LegalPage';
import { termsOfUse } from '../data/legal';

export default function TermsPage() {
  return <LegalPage {...termsOfUse} />;
}
