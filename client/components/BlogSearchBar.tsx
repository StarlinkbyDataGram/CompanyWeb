import React from "react";
import { Search, X } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
  totalCount: number;
  isFiltering: boolean;
};

export default function BlogSearchBar({ value, onChange, resultCount, totalCount, isFiltering }: Props) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <Search className="h-5 w-5 text-gray-500" />
        </div>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search blog posts..."
          className="flex-1 px-4 py-2 h-10 border border-gray-200 rounded-md bg-white text-foreground placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#0040FF]"
        />
        {value.length > 0 && (
          <button
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="text-gray-500 hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isFiltering && (
        <div className="mt-2 text-sm text-gray-500">
          Showing {resultCount} of {totalCount} posts
        </div>
      )}

      {isFiltering && resultCount === 0 && (
        <div className="mt-8 text-center text-gray-500">
          <div>No posts found for '{value}'</div>
          <div className="text-sm mt-2">Try a shorter search term or browse by category</div>
        </div>
      )}
    </div>
  );
}
