"use client";
import { CourseDetails } from "@/components/cards/course-details";
import { modules } from "./data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ValueItem } from "./value-item";
import { ModuleDetail } from "./module-detail";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const CourseDetailsArea = () => {
  const [accordionOpen, setAccordionOpen] = useState<any>(null);
  const pathname = usePathname();
  const percentage = 63;

  return (
    <div className="flex flex-col gap-14 w-full lg:max-w-[800px]">
      <CourseDetails.Root>
        <div className="flex flex-col gap-6">
          <CourseDetails.Thumbnail src="/js.jpeg" alt={pathname} />
          <div className="w-full max-w-[660px] flex flex-col gap-2">
            <CourseDetails.Title content="Pixel Perfect Básico" />
            <CourseDetails.Description content="For athletes, high altitude produces two contradictory effects on performance. For explosive events For athletes, high altitude produces two contradictory effects on performance. For explosive events " />
          </div>
        </div>
        <div className="w-full max-w-[449px] flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <CourseDetails.Description
              content={`${percentage}%`}
              className="text-white"
            />
            <CourseDetails.Progress
              value={percentage}
              content="60"
              className="rounded-[8px] bg-background"
            />
          </div>
          <CourseDetails.Description
            content={`${51} - ${87} aulas assistidas por voce`}
          />
        </div>

        <div className="w-full max-w-[240px]">
          <CourseDetails.Button className="w-full bg-black text-white p-6 lg:py-8   font-semibold text-[16px] hover:text-black sm:text-[18px]">
            Assistir amostra
          </CourseDetails.Button>
        </div>
      </CourseDetails.Root>

      <div id="modules" className="flex flex-col gap-8">
        <h4 className="font-semibold text-[20px] sm:text-[24px]">
          Todos os conteúdos
        </h4>

        <Accordion
          type="single"
          collapsible
          value={accordionOpen}
          onValueChange={setAccordionOpen}
          className="flex flex-col gap-3"
        >
          {modules.map(({ id, lessons, percentage, title }) => (
            <AccordionItem
              key={id}
              value={`item-${id}`}
              className="border-none"
            >
              <AccordionTrigger
                className={`bg-secondary px-5 py-3 rounded-[8px] items-center ${
                  accordionOpen === `item-${id}`
                    ? "rounded-b-none duration-150"
                    : "rounded-[8px] duration-300"
                }`}
              >
                <div className="flex gap-6 items-center w-full">
                  <ValueItem value={id} />
                  <ModuleDetail title={title} percentage={percentage} />
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 p-6 bg-[#0e1728a8] rounded-b-[8px]">
                {lessons.map((lesson, index) => (
                  <span key={index}>- {lesson}</span>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
