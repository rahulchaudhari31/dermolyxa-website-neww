import LegalPage from '../components/sections/legal/LegalPage';
import { disclaimerPage } from '../data/legal';

export default function DisclaimerPage() {
  return <LegalPage {...disclaimerPage} />;
}
