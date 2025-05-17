import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export function generateScreeningPDF(screening, recommendations) {
  const doc = new jsPDF();
  const margin = 15;
  let y = margin;

  // Color theme based on score
  const color = screening.totalScore > 55 ? '#e74c3c'   // red
              : screening.totalScore > 30 ? '#f39c12'   // orange
              : '#2ecc71';                              // green

  // Title
  doc.setFontSize(18);
  doc.setTextColor(color);
  doc.setFont('helvetica', 'bold');
  doc.text('Autism Screening Report', margin, y);
  y += 10;

  // Reset font
  doc.setFontSize(12);
  doc.setTextColor(0);
  doc.setFont('helvetica', 'normal');
  doc.text(`Child: ${screening.profileName || 'N/A'}`, margin, y); y += 6;
  doc.text(`Date: ${screening.submittedAt?.toDate().toLocaleDateString()}`, margin, y); y += 6;
  doc.text(`Total Score: ${screening.totalScore}/80`, margin, y); y += 10;

  // Answers table
  const answerRows = Object.entries(screening.answers).map(([question, value]) => [question, value]);

  autoTable(doc, {
    startY: y,
    head: [['Question', 'Answer']],
    body: answerRows,
    styles: { fontSize: 9, cellPadding: 2 },
    headStyles: { fillColor: [33, 150, 243], textColor: 255 },
    margin: { left: margin, right: margin },
    theme: 'striped'
  });

  y = doc.lastAutoTable.finalY + 10;

  // Recommendations
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('Recommendations', margin, y);
  y += 8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);

  recommendations.forEach((rec) => {
    const cleanRec = rec.replace(/[^\x00-\x7F]/g, ''); // strip emojis/symbols
    const lines = doc.splitTextToSize(`• ${cleanRec}`, 180);
    doc.text(lines, margin, y);
    y += lines.length * 6;

    if (y > 270) {
      doc.addPage();
      y = margin;
    }
  });

  return doc;
}
