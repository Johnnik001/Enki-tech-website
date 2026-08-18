'use client';

export function PrintButton() {
  return <button className="button buttonGhost dark printButton" type="button" onClick={() => window.print()}>Print or save as PDF</button>;
}
