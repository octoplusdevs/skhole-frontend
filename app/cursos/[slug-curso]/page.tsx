"use client";

import { Container } from "@/components/container";
import { CourseDetailsArea } from "./details";
import { CoursePaymentArea } from "./details/course-payment-area";

export default function CourseDetailsPage() {
  return (
    <section className="py-36">
      <Container className="flex flex-col lg:flex-row gap-12">
        <CourseDetailsArea />
        <CoursePaymentArea />
      </Container>
    </section>
  );
}
