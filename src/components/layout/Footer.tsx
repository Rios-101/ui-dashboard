/**
 * Footer — site-wide footer.
 * Dark background per brand guidelines.
 */
export default function Footer() {
  return (
    <footer className="border-t border-brand-surface bg-brand-dark-2 py-8">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-brand-muted">
        &copy; {new Date().getFullYear()} ClarityNet. All rights reserved.
      </div>
    </footer>
  );
}
