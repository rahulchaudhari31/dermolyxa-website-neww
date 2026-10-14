import { useState } from 'react';
import { Check, Send } from 'lucide-react';
import Button from '../../ui/Button';
import { WhatsAppIcon } from '../../ui/BrandIcons';
import { courses } from '../../../data/courses';
import { contact } from '../../../data/siteData';

const defaultProgramOptions = ['General enquiry', ...courses.map((course) => course.title)];

function emptyValues(preset = '') {
  return { name: '', phone: '', email: '', program: preset || '', message: '' };
}

function Field({ label, name, error, as = 'input', className = '', children, ...props }) {
  const base =
    'w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal-800 outline-none transition-colors placeholder:text-charcoal-300 focus:ring-2';
  const state = error
    ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
    : 'border-charcoal-200 focus:border-teal-400 focus:ring-teal-100';
  const inputCls = [base, state].join(' ');

  return (
    <label className={['flex flex-col gap-1.5', className].filter(Boolean).join(' ')}>
      <span className="text-sm font-medium text-charcoal-700">{label}</span>
      {as === 'textarea' ? (
        <textarea name={name} className={inputCls} aria-invalid={Boolean(error)} {...props}>
          {children}
        </textarea>
      ) : as === 'select' ? (
        <select name={name} className={inputCls} aria-invalid={Boolean(error)} {...props}>
          {children}
        </select>
      ) : (
        <input name={name} className={inputCls} aria-invalid={Boolean(error)} {...props} />
      )}
      {error && (
        <span className="text-xs font-medium text-red-500" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}

/**
 * Reusable enquiry form with client-side validation and a success state.
 * `variant="compact"` is used inside the course enquiry modal.
 */
export default function EnquiryForm({
  variant = 'full',
  presetProgram = '',
  programLabel = 'Program of interest',
  programOptions = defaultProgramOptions,
  className = '',
}) {
  const isCompact = variant === 'compact';
  const [values, setValues] = useState(() => emptyValues(presetProgram));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const validate = () => {
    const next = {};

    if (!values.name.trim()) next.name = 'Please enter your name.';

    if (!values.phone.trim()) next.phone = 'Please enter your phone number.';
    else if (!/^[0-9+\-\s()]{7,15}$/.test(values.phone.trim()))
      next.phone = 'Please enter a valid phone number.';

    if (!values.email.trim()) next.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = 'Please enter a valid email address.';

    if (!values.program) next.program = 'Please select a program.';

    if (!isCompact && !values.message.trim()) next.message = 'Please add a short message.';

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    // No backend is connected; this simulates recording the enquiry.
    window.setTimeout(() => setStatus('success'), 700);
  };

  const reset = () => {
    setValues(emptyValues(presetProgram));
    setErrors({});
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        className={[
          'flex flex-col items-center gap-3 rounded-2xl border border-teal-100 bg-teal-50/60 p-8 text-center',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-white">
          <Check className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="font-display text-2xl text-charcoal-800">Thank you</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Your enquiry has been recorded. For a faster reply, message us on WhatsApp or call {contact.phones[0]}.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Button href={contact.whatsapp} variant="whatsapp" size="sm">
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </Button>
          <Button variant="outline" size="sm" onClick={reset}>
            Submit another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={['grid gap-4', className].filter(Boolean).join(' ')}>
      <Field
        label="Full name"
        name="name"
        value={values.name}
        error={errors.name}
        onChange={onChange}
        placeholder="Your name"
        autoComplete="name"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Phone"
          name="phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={onChange}
          placeholder="Phone number"
          autoComplete="tel"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={onChange}
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>

      <Field
        label={programLabel}
        name="program"
        as="select"
        value={values.program}
        error={errors.program}
        onChange={onChange}
      >
        <option value="">Select an option</option>
        {programOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Field>

      <Field
        label={isCompact ? 'Message (optional)' : 'Message'}
        name="message"
        as="textarea"
        rows={isCompact ? 3 : 4}
        value={values.message}
        error={errors.message}
        onChange={onChange}
        placeholder="Tell us what you would like to know"
      />

      <Button type="submit" variant="primary" className="w-full" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Submit enquiry'}
        {status !== 'submitting' && <Send className="h-4 w-4" aria-hidden="true" />}
      </Button>

      <p className="text-center text-xs leading-relaxed text-muted">
        By submitting, you agree to be contacted about your enquiry. No payment is collected through this form.
      </p>
    </form>
  );
}
