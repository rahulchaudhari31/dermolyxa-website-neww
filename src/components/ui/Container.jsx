export default function Container({ className = '', children }) {
  return (
    <div className={['mx-auto w-full max-w-7xl px-6 lg:px-8', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}
