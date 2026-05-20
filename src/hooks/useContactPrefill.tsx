import { createContext, useCallback, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface Prefill {
  service: string;
  budget: string;
  version: number;
}

interface ContactPrefillContextValue {
  prefill: Prefill;
  setPrefill: (next: { service: string; budget: string }) => void;
}

const ContactPrefillContext = createContext<ContactPrefillContextValue | null>(null);

const initialPrefill: Prefill = {
  service: 'Essential Landing Page',
  budget: '',
  version: 0,
};

export function ContactPrefillProvider({ children }: { children: ReactNode }) {
  const [prefill, setPrefillState] = useState<Prefill>(initialPrefill);

  const setPrefill = useCallback((next: { service: string; budget: string }) => {
    setPrefillState((prev) => ({ ...next, version: prev.version + 1 }));
  }, []);

  return (
    <ContactPrefillContext.Provider value={{ prefill, setPrefill }}>
      {children}
    </ContactPrefillContext.Provider>
  );
}

export function useContactPrefill(): ContactPrefillContextValue {
  const ctx = useContext(ContactPrefillContext);
  if (!ctx) throw new Error('useContactPrefill must be used inside ContactPrefillProvider');
  return ctx;
}
