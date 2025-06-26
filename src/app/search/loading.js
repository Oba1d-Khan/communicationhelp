import { Skeleton } from "@/components/ui/skeleton";
import { Search, Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background mt-20">
      {/* Loading indicator */}
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full border border-primary/20 shadow-lg">
          <Loader2 className="w-4 h-4 text-primary animate-spin" />
          <span className="text-sm font-medium text-primary">Searching...</span>
        </div>
      </div>

      <div className="container py-8 md:py-12">
        {/* Search Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <Skeleton className="h-10 w-64 mx-auto mb-6" />

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search
              size={20}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-light"
            />
            <Skeleton className="w-full h-14 rounded-xl" />
          </div>

          {/* Popular Searches */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Skeleton className="h-5 w-32 mb-3" />
              <div className="flex flex-wrap gap-2">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-8 w-20 rounded-full" />
                ))}
              </div>
            </div>
            <div>
              <Skeleton className="h-5 w-32 mb-3" />
              <div className="flex flex-wrap gap-2">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-8 w-24 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="max-w-7xl mx-auto">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
            <div>
              <Skeleton className="h-6 w-64 mb-2" />
              <Skeleton className="h-4 w-48" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-10 w-32 rounded-full" />
              <Skeleton className="h-10 w-20 rounded-lg" />
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <Skeleton className="aspect-[16/9] w-full" />
                <div className="p-4 space-y-3">
                  <Skeleton className="h-4 w-20 rounded-full" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-4/5" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-3 w-20" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
