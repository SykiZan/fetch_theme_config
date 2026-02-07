import { Star } from "lucide-react";

export default function Rating({ rate, count }: { rate: number; count: number }) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted">
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4" />
        <span>{rate.toFixed(1)}</span>
      </div>
      <span>({count})</span>
    </div>
  );
}
