"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="sx-faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className={`sx-faq-item${isOpen ? " is-open" : ""}`} key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {item.q}
                <span className="sx-faq-icon" aria-hidden="true">
                  <Plus size={18} />
                </span>
              </button>
            </h3>
            <div
              id={`faq-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className="sx-faq-panel"
            >
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
