'use client';

import { Lang } from "@/utils/language";
import { Realization } from "@/utils/realizations";
import RealizationCard from "@/components/realizations/realization";

interface AllRealizationsProps extends Lang {
  realizationsData: Realization[];
  lang?: 'pl' | 'en';
}

export default function AllRealizations({ 
  realizations, 
  realizationsData,
  language = 'pl',
  lang 
}: AllRealizationsProps) {
  const currentLang = lang || (language as 'pl' | 'en') || 'pl';

  return (
    <section className="px-6 md:px-14 pb-3">
      <div className="space-y-4">
        <h1 className="max-md:text-2xl md:text-3xl lg:text-4xl">{realizations?.title}</h1>
        <div className="flex flex-col lg:grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {realizationsData.map((realization, index: number) => {
            return (
              <RealizationCard 
                key={realization.id || index} 
                realization={realization}
                lang={currentLang}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
