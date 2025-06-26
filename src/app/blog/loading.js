import { Skeleton } from "@/components/ui/skeleton";
import { Search, Filter, Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Loading indicator */}
      <div className="fixed top-30 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full border border-primary/20 shadow-lg">
          <Loader2 className="w-4 h-4 text-primary animate-spin" />
          <span className="text-sm font-medium text-primary">
            Almost there...
          </span>
        </div>
      </div>

      {/* Hero Slider Section */}
      <section className="section-wrapper mt-16">
        <div className="relative overflow-hidden ">
          {/* Main slider skeleton */}
          <div className="aspect-[16/9] md:aspect-[21/9] relative">
            <Skeleton className="w-full h-[70vh] md:h-full " />

            {/* Overlay content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl md:rounded-3xl" />

            {/* Content overlay */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 lg:bottom-12 lg:left-12 lg:right-12">
              <div className="max-w-2xl">
                <Skeleton className="h-4 w-24 mb-4 rounded-full" />
                <Skeleton className="h-8 md:h-10 lg:h-12 w-full mb-2" />
                <Skeleton className="h-8 md:h-10 lg:h-12 w-4/5 mb-4" />
                <Skeleton className="h-5 w-3/4 mb-6" />
                <div className="flex items-center gap-4">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white/50 rounded-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-wrapper">
        <div className="section-content py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            {/* Search and Filters Bar */}
            <div className="bg-gradient-to-tl from-white/90 via-primary/5 to-secondary/5 backdrop-blur-sm  p-6 md:p-4 mb-8 border border-primary/10 shadow-md">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative w-full lg:w-auto lg:min-w-[320px]">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <div className="w-full pl-12 pr-10 py-3 md:py-2 border-2 border-primary/20 rounded-full bg-white">
                    <Skeleton className="h-4 w-48" />
                  </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground font-medium">
                      Filter by:
                    </span>
                  </div>

                  {/* Topic Filter */}
                  <div className="w-[180px] border-2 border-primary/30 rounded-full bg-white px-4 py-2">
                    <Skeleton className="h-4 w-24" />
                  </div>

                  {/* Sort Filter */}
                  <div className="w-[160px] border-2 border-primary/30 rounded-full bg-white px-4 py-2">
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="mb-6">
              <Skeleton className="h-5 w-64" />
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/10 shadow-lg group"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Skeleton className="w-full h-full" />

                    {/* Topic badge overlay */}
                    <div className="absolute top-4 left-4">
                      <Skeleton className="h-6 w-20 rounded-full" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-sm">
                      <Skeleton className="h-3 w-20" />
                      <Skeleton className="h-3 w-16" />
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-6 w-4/5" />
                    </div>

                    {/* Excerpt */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                      <Skeleton className="w-8 h-8 rounded-full" />
                      <div className="space-y-1">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-3 w-16" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/90 border border-primary/20 shadow-lg">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-4 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-16 md:py-20">
        <div className="section-content">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/90 via-primary/5 to-secondary/5 backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl border border-primary/20 shadow-2xl text-center">
              <Skeleton className="h-8 w-64 mx-auto mb-4" />
              <Skeleton className="h-5 w-96 mx-auto mb-8 max-w-full" />

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 max-w-md mx-auto">
                <Skeleton className="flex-1 h-12 rounded-full" />
                <Skeleton className="h-12 w-32 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
