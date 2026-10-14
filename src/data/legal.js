// ─────────────────────────────────────────────────────────────
//  DERMOLYXA™ – Legal page content (general template wording)
//  Placeholder copy for structure only. Not legal advice.
// ─────────────────────────────────────────────────────────────
import { contact } from './siteData';

const contactLine = `You can reach us at ${contact.email} or on ${contact.phones.join(' or ')}.`;

export const privacyPolicy = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  description: 'How DERMOLYXA plans to collect, use and protect information shared with us.',
  lastUpdated: 'Last updated: [To be confirmed]',
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      blocks: [
        {
          type: 'p',
          text: 'This Privacy Policy describes, in general terms, how DERMOLYXA™ ("we", "us") may collect, use and protect information when you use this website or contact us. This is general template wording and should be reviewed and finalised by a qualified legal professional before launch.',
        },
      ],
    },
    {
      id: 'information-we-collect',
      heading: 'Information we may collect',
      blocks: [
        {
          type: 'p',
          text: 'We may collect information that you choose to provide through enquiry forms or by contacting us directly. This may include:',
        },
        {
          type: 'ul',
          items: ['Your name', 'Phone number', 'Email address', 'Your area of interest and the content of your message'],
        },
      ],
    },
    {
      id: 'how-we-use-information',
      heading: 'How we may use information',
      blocks: [
        {
          type: 'p',
          text: 'Information you provide may be used to respond to your enquiry, to share relevant updates you have asked for, and to improve the website and our communications. We do not sell your personal information.',
        },
      ],
    },
    {
      id: 'cookies',
      heading: 'Cookies and similar technologies',
      blocks: [
        {
          type: 'p',
          text: 'This website may use basic cookies or similar technologies for functionality and to understand general usage. Where required, we will seek your consent and provide more detail.',
        },
      ],
    },
    {
      id: 'sharing',
      heading: 'Sharing of information',
      blocks: [
        {
          type: 'p',
          text: 'We may share information with service providers who help operate the website or communications, subject to appropriate safeguards, or where required by law.',
        },
      ],
    },
    {
      id: 'your-choices',
      heading: 'Your choices',
      blocks: [
        {
          type: 'p',
          text: 'You may contact us to ask about the information you have shared, to update it, or to ask us to stop contacting you. Details will be confirmed in the finalised policy.',
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact',
      blocks: [{ type: 'p', text: contactLine }],
    },
  ],
};

export const termsOfUse = {
  eyebrow: 'Legal',
  title: 'Terms of Use',
  description: 'The general terms governing your access to and use of the DERMOLYXA website.',
  lastUpdated: 'Last updated: [To be confirmed]',
  sections: [
    {
      id: 'acceptance',
      heading: 'Acceptance of these terms',
      blocks: [
        {
          type: 'p',
          text: 'By accessing or using this website, you agree to these general terms. If you do not agree, please do not use the website. This is general template wording and should be reviewed and finalised by a qualified legal professional before launch.',
        },
      ],
    },
    {
      id: 'use-of-website',
      heading: 'Use of the website',
      blocks: [
        {
          type: 'p',
          text: 'You agree to use the website lawfully and not to interfere with its operation, security or availability.',
        },
      ],
    },
    {
      id: 'intellectual-property',
      heading: 'Intellectual property',
      blocks: [
        {
          type: 'p',
          text: 'Brand names, logos and content on this website are presented for the DERMOLYXA™ identity. Imagery is illustrative and licensed for general use. You may not reproduce content without permission.',
        },
      ],
    },
    {
      id: 'no-professional-advice',
      heading: 'No professional advice',
      blocks: [
        {
          type: 'p',
          text: 'Content on this website is general and educational. It is not medical, professional or legal advice, and it is not a substitute for individual consultation with a qualified professional.',
        },
      ],
    },
    {
      id: 'third-party-links',
      heading: 'Third-party links',
      blocks: [
        {
          type: 'p',
          text: 'The website may link to third-party sites. We are not responsible for their content, and links do not imply endorsement.',
        },
      ],
    },
    {
      id: 'limitation',
      heading: 'Limitation of liability',
      blocks: [
        {
          type: 'p',
          text: 'To the extent permitted by law, DERMOLYXA™ is not liable for any loss arising from use of the website. Final wording will be confirmed in the published terms.',
        },
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to these terms',
      blocks: [
        {
          type: 'p',
          text: 'These terms may be updated from time to time. Continued use of the website indicates acceptance of the updated terms.',
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact',
      blocks: [{ type: 'p', text: contactLine }],
    },
  ],
};

export const refundPolicy = {
  eyebrow: 'Legal',
  title: 'Refund Policy',
  description: 'General approach to cancellations and refunds for programs and services.',
  lastUpdated: 'Last updated: [To be confirmed]',
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      blocks: [
        {
          type: 'p',
          text: 'This Refund Policy outlines, in general terms, how cancellations and refunds may be handled for DERMOLYXA programs and services. This is general template wording and should be reviewed and finalised by a qualified legal professional before launch.',
        },
      ],
    },
    {
      id: 'scope',
      heading: 'Scope',
      blocks: [
        {
          type: 'p',
          text: 'This policy is intended to apply to fees paid for institute programs, workshops and clinical services, once these are finalised and offered. No fees are collected through this website at this time.',
        },
      ],
    },
    {
      id: 'cancellation',
      heading: 'Cancellations',
      blocks: [
        {
          type: 'p',
          text: 'Cancellation terms, notice periods and any applicable conditions will be confirmed together with finalised program details.',
        },
      ],
    },
    {
      id: 'eligibility',
      heading: 'Refund eligibility',
      blocks: [
        {
          type: 'ul',
          items: [
            'Refunds may be considered where a program or service is cancelled by us.',
            'Requests made within any applicable notice period may be considered.',
            'Specific eligibility conditions will be published with each offering.',
          ],
        },
      ],
    },
    {
      id: 'how-to-request',
      heading: 'How to request a refund',
      blocks: [
        {
          type: 'p',
          text: `To request a refund, contact us with your details and the relevant program or service. ${contactLine}`,
        },
      ],
    },
    {
      id: 'processing',
      heading: 'Processing time',
      blocks: [
        {
          type: 'p',
          text: 'Where a refund is agreed, processing times will be confirmed as part of the finalised policy.',
        },
      ],
    },
  ],
};

export const disclaimerPage = {
  eyebrow: 'Legal',
  title: 'Disclaimer',
  description: 'Important notices regarding the information presented across the DERMOLYXA website.',
  lastUpdated: 'Last updated: [To be confirmed]',
  sections: [
    {
      id: 'general-information',
      heading: 'General information',
      blocks: [
        {
          type: 'p',
          text: 'The content on this website is provided for general information and educational purposes. It is presented as part of an ongoing brand development and should not be relied upon for decisions about individual care. This is general template wording and should be reviewed and finalised by a qualified legal professional before launch.',
        },
      ],
    },
    {
      id: 'not-medical-advice',
      heading: 'Not medical advice',
      blocks: [
        { type: 'p', text: 'Educational illustration only. Not a diagnostic tool or medical advice.' },
        {
          type: 'p',
          text: 'For any individual concern, always consult a qualified professional. Nothing on this website creates a professional relationship.',
        },
      ],
    },
    {
      id: 'no-medical-licence',
      heading: 'Training and licensing',
      blocks: [
        {
          type: 'p',
          text: 'Training does not by itself confer a medical licence or authorization to practise any regulated healthcare profession.',
        },
      ],
    },
    {
      id: 'illustrative-imagery',
      heading: 'Illustrative imagery',
      blocks: [
        {
          type: 'p',
          text: 'Illustrative imagery; not actual DERMOLYXA patients, facilities or products.',
        },
      ],
    },
    {
      id: 'regulatory',
      heading: 'Regulatory status',
      blocks: [
        {
          type: 'p',
          text: 'Approval / affiliation subject to applicable regulatory requirements. No approval, accreditation or affiliation should be assumed from this website.',
        },
      ],
    },
    {
      id: 'no-guarantees',
      heading: 'No guarantees',
      blocks: [
        {
          type: 'p',
          text: 'No outcome, result or benefit is guaranteed. Any descriptions of services or products are general and subject to individual assessment and finalisation.',
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact',
      blocks: [{ type: 'p', text: contactLine }],
    },
  ],
};
