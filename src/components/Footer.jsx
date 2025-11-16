export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} Virtual Agent Agency — Built by Eduard van Deventer
        </p>
      </div>
    </footer>
  );
}
