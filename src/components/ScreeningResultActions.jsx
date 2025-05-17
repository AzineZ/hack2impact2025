import { generateScreeningPDF } from '../utilityFunctions/generatePdf';

export default function ScreeningResultActions({ screening, recommendations }) {
  const handleDownload = () => {
    const pdf = generateScreeningPDF(screening, recommendations);
    pdf.save(`screening-${screening.submittedAt?.toDate().toISOString()}.pdf`);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={handleDownload}>📄 Download PDF</button>
    </div>
  );
}
