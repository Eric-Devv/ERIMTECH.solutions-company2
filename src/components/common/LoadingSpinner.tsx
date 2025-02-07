import { Loader2 } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-dark/80 backdrop-blur-sm">
      <Loader2 className="w-8 h-8 text-neon-cyan animate-spin" />
    </div>
  );
}