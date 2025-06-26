import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Calendar, Clock, User, Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-primary/5 relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-8 md:pb-16 overflow-hidden">
        <div className="section-content mt-10 lg:mt-16">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <div className="mb-6 md:mb-8 ms-2">
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-full border border-primary/20 shadow-sm">
                <ArrowLeft className="w-4 h-4 mr-2 text-primary/50" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>

            {/* Cover Image Container */}
            <div className="relative mb-8 md:mb-12">
              <div className="aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/9] relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl bg-muted">
                {/* Main image skeleton */}
                <Skeleton className="w-full h-full rounded-2xl md:rounded-3xl " />

                {/* Floating Meta Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6 lg:bottom-8 lg:left-8 lg:right-8">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 border border-white/20 shadow-2xl">
                    {/* Meta Tags */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-3 md:mb-4">
                      <Skeleton className="h-6 w-24 rounded-full" />
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-muted-foreground opacity-50" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-muted-foreground opacity-50" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="space-y-2 mb-4">
                      <Skeleton className="h-6 sm:h-7 md:h-8 w-full" />
                      <Skeleton className="h-6 sm:h-7 md:h-8 w-4/5" />
                      <Skeleton className="h-6 sm:h-7 md:h-8 w-3/5" />
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-primary/10">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center"></div>
                      <div className="space-y-1">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-3 w-16" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 md:pb-16">
        <div className="section-content">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-primary/10 shadow-lg mb-8 md:mb-12">
              <div className="space-y-6">
                {/* Realistic content blocks */}
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>

                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>

                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>

                {/* Quote block placeholder */}
                <div className="border-l-4 border-primary/30 pl-6 py-4 bg-primary/5 rounded-r-lg">
                  <Skeleton className="h-5 w-full mb-2" />
                  <Skeleton className="h-5 w-4/5 mb-2" />
                  <Skeleton className="h-4 w-1/3" />
                </div>

                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>

                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="flex flex-col gap-6 p-6 md:p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl md:rounded-3xl border border-primary/10">
              {/* Share button */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 border border-primary/20 shadow-sm">
                  <div className="w-4 h-4 bg-muted rounded" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </div>

              {/* Next article */}
              <div className="flex items-center gap-4 p-4 md:p-6 bg-white/95 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-lg">
                <div className="flex-1 min-w-0 space-y-2">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-3 w-2/3 hidden md:block" />
                </div>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-muted rounded flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
        <div className="section-content">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 shadow-lg mb-6">
                <div className="w-2 h-2 bg-primary/50 rounded-full" />
                <Skeleton className="h-4 w-28" />
              </div>
              <Skeleton className="h-8 w-64 mx-auto mb-4" />
              <Skeleton className="h-5 w-96 mx-auto max-w-full" />
            </div>

            {/* Related Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/10 shadow-lg"
                >
                  {/* Image */}
                  <Skeleton className="w-full h-48" />

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <Skeleton className="h-4 w-20 rounded-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-4/5" />
                    <div className="flex items-center gap-4 pt-2">
                      <Skeleton className="h-3 w-24" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12 md:mt-16">
              <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/90 border border-primary/20 shadow-lg">
                <Skeleton className="h-5 w-32" />
                <div className="w-5 h-5 bg-muted rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20">
        <div className="section-content">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/95 via-primary/5 to-secondary/5 backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl border border-primary/20 shadow-2xl text-center">
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
