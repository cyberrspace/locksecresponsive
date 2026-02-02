"use client";

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import ContentWrapper from "@/components/common/ContentWrapper";
import SignNav from "@/components/NavOne/SignNav";
import ResetForm from "@/components/ResetForm";

export default function resetPage() {
  return (
    <ContentWrapper>
      <main className="flex flex-col w-full relative">
        <div className="w-full max-w-[100vw] overflow-x-hidden">
          <SignNav />
        </div>

        <div className="flex flex-col items-center space-y-[16px] sm:space-y-[24px] w-full max-w-[512px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/9 mx-auto justify-center">
          <Suspense fallback={null}>
            <ResetForm />
          </Suspense>
        </div>
      </main>
    </ContentWrapper>
  );
}
