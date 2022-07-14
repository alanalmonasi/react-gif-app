import { useState } from "react";

export const CopyURL = ({ url }) => {
   const [copied, setCopied] = useState(false);
   const link = url.split('?')

   const copy = () => { 
      const el = document.createElement('input');
      el.value = link[0];
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
   }
   
   return (
      <div className="copy-link">
         <button onClick={copy}>{!copied ? "Copy link" : "Copied!"}</button>
      </div>
   );
}


