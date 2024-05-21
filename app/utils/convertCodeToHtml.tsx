import React from 'react'; // Make sure React is imported

type CodeToHTMLDisplayProps = {
  code: string;
};

// This is now a React component
export default function CodeToHTMLDisplay({ code }: CodeToHTMLDisplayProps) {
  // Function to HTML encode characters
  const htmlEncodedCode = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/{/g, '&#123;')
    .replace(/}/g, '&#125;');

  // Return JSX
  return (
    <pre>
      <code>
        <div dangerouslySetInnerHTML={{ __html: htmlEncodedCode }} />
      </code>
    </pre>
   
  );
}
