"use client";

import { useEffect, useState, useCallback, createContext, useContext, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Types ─── */
export type ToastVariant = "success" | "error" | "warning" | "info";

export interface ToastData {
  id: string;
  message: string;
  variant: ToastVariant;
  duration?: number;
}

interface ToastContextValue {
  toast: (message: string, variant?: ToastVariant, duration?: number) => void;
}

/* ─── Context ─── */
const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}

/* ─── Styling ─── */
const variantStyles: Record<ToastVariant, string> = {
  success: "bg-emerald-500 text-white",
  error: "bg-red-500 text-white",
  warning: "bg-amber-500 text-white",
  info: "bg-blue-500 text-white",
};

const icons: Record<ToastVariant, string> = {
  success: "✓",
  error: "✕",
  warning: "⚠",
  info: "ℹ",
};

/* ─── Individual Toast ─── */
function ToastItem({ toast: t, onDismiss }: { toast: ToastData; onDismiss: (id: string) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(t.id), t.duration ?? 4000);
    return () => clearTimeout(timer);
  }, [t.id, t.duration, onDismiss]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      role="alert"
      className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg min-w-[280px] max-w-[400px] ${variantStyles[t.variant]}`}
    >
      <span className="text-lg font-bold shrink-0" aria-hidden="true">{icons[t.variant]}</span>
      <span className="text-sm font-medium flex-1">{t.message}</span>
      <button
        onClick={() => onDismiss(t.id)}
        className="shrink-0 p-1 rounded-md hover:bg-white/20 transition-colors"
        aria-label="Dismiss"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 3l8 8M11 3l-8 8" />
        </svg>
      </button>
    </motion.div>
  );
}

/* ─── Provider ─── */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback((message: string, variant: ToastVariant = "info", duration?: number) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setToasts((prev) => [...prev, { id, message, variant, duration }]);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}

      {/* Toast container */}
      <div
        className="fixed bottom-6 right-6 z-[100] flex flex-col-reverse gap-2 pointer-events-none"
        aria-live="polite"
      >
        <AnimatePresence mode="popLayout">
          {toasts.map((t) => (
            <div key={t.id} className="pointer-events-auto">
              <ToastItem toast={t} onDismiss={dismiss} />
            </div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
