import { Skeleton } from "@/components/ui/skeleton";
import { Search, Grid, List, Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen root-layout bg-background mt-20">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Skeleton className="h-9 w-32 mb-6 ms-2" />

              <div className="space-y-3 bg-gradient-to-tr from-slate-100 to-slate-100/40 backdrop-blur-md pt-4 rounded-2xl">
                {/* All Topics Button */}
                <div className="w-full p-4 rounded-xl">
                  <div className="flex items-center w-full">
                    <div className="w-3 h-3 rounded-full bg-primary/20 mr-3" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-[55%] mb-1" />
                      <Skeleton className="h-3 w-[30%]" />
                    </div>
                  </div>
                </div>

                {/* Individual Topic Buttons */}
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-full p-4 rounded-xl">
                    <div className="flex items-center w-full">
                      <div className="w-3 h-3 rounded-full bg-primary/20 mr-3" />
                      <div className="flex-1">
                        <Skeleton className="h-4 w-[58%]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Skeleton */}
          <div className="lg:col-span-3">
            {/* Search and Controls */}
            <div className="flex flex-col sm:flex-row gap-4 px-3 sm:px-0 sm:items-center justify-between mb-10">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50 w-5 h-5" />
                <div className="w-full pl-10 pr-4 py-2 border border-primary/40 rounded-full bg-background">
                  <Skeleton className="h-4 w-[55%]" />
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center sm:justify-start items-center gap-2">
                {/* Sort Dropdown */}
                <div className="w-[160px] border border-primary/50 rounded-full bg-primary/5 px-4 py-2">
                  <Skeleton className="h-4 w-[55%]" />
                </div>

                {/* View Mode Toggle */}
                <div className="flex border border-primary/20 bg-primary/5 rounded-lg overflow-hidden">
                  <div className="px-3 py-2">
                    <Grid className="w-4 h-4 text-primary/50" />
                  </div>
                  <div className="px-3 py-2">
                    <List className="w-4 h-4 text-primary/50" />
                  </div>
                </div>
              </div>
            </div>

            {/* Topic Header */}
            <div className="mb-6">
              <Skeleton className="h-10 w-64 mb-2" />
              <Skeleton className="h-5 w-96 max-w-full" />
            </div>

            {/* Blog Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-primary/5 rounded-xl shadow-sm overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Skeleton className="w-full h-full" />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Topic Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <Skeleton className="h-6 w-20 rounded-full" />
                    </div>

                    {/* Title */}
                    <div className="space-y-2 mb-2">
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-5 w-4/5" />
                    </div>

                    {/* Excerpt */}
                    <div className="space-y-2 mb-4">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between">
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
    </div>
  );
}
