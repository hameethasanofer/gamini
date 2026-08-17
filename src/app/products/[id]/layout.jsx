export function generateStaticParams() {
  return [
    { id: 'p1' },
    { id: 'p2' },
    { id: 'p3' },
    { id: 'p4' },
    { id: 'p5' },
    { id: 'p6' },
  ];
}

export default function ProductLayout({ children }) {
  return children;
}
