'use client';

import { useState } from 'react';

const DOCS_URL = 'https://docs.reclaimprotocol.org';

export default function CopyDocsLinkButton() {
  const [copied, setCopied] = useState(false);

  async function copyDocsLink() {
    await navigator.clipboard.writeText(DOCS_URL);
    setCopied(true);
  }

  return (
    <button type="button" className="btn btn-ghost" onClick={copyDocsLink} aria-live="polite">
      {copied ? 'Copied!' : 'Copy docs link'}
    </button>
  );
}
