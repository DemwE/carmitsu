'use client';

import { Button, Link } from "@nextui-org/react";
import { Lang } from "@/utils/language";
import { Realization } from "@/utils/realizations";
import RealizationCard from "@/components/realizations/realization";

interface RealizationsSectionProps extends Lang {
  realizationsData: Realization[];
  lang?: 'pl' | 'en';
}

export default function Realizations({ 
  realizations, 
  realizationsData, 
  language = 'pl',
  lang 
}: RealizationsSectionProps) {
  const currentLang = lang || (language as 'pl' | 'en') || 'pl';
  
  return (
    <section id="Realizations" className="px-6 md:px-14 pt-24 flex flex-col items-center space-y-5">
      <div className="container space-y-4">
        <h1 className="max-md:text-2xl md:text-3xl lg:text-4xl">{realizations?.title}</h1>
        <div className="flex flex-col lg:grid gap-4 lg:grid-cols-2">
          {realizationsData.slice(0, 4).map((realization, index: number) => {
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
      <Button className="w-full px-10 lg:w-auto text-md" href="/realizations" as={Link}>
        {realizations?.more}
      </Button>
    </section>
  );
}
