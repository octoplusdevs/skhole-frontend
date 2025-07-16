import { IPaymentsDetails } from "@/components/render-courses/interface";

export const verifyCourseAcess = (
  course: any,
  enrollments: IPaymentsDetails[] = []
) => {
  let courseStatus = course?.status;
  let buttonContent = course?.price === "0" ? "Gratuito" : "Inscrever-se";
  enrollments.map((enrollment: any) => {
    const isEnrolled = enrollment.courseId === course?.id;
    const isPaymentCompleted =
      enrollment.paymentsStatus.includes("COMPLETED") &&
      enrollment.amount >= Number(course?.price);
    const isPaymentPending = enrollment.paymentsStatus.includes("PENDING");

    if (isEnrolled) {
      if (isPaymentCompleted) {
        courseStatus = "ENROLLED";
        buttonContent = "Assistir";
      } else if (isPaymentPending) {
        courseStatus = "PENDING";
        buttonContent = "Pendente";
      } else {
        courseStatus = "ACTIVE";
        buttonContent = "Inscrever-se";
      }
    }
  });

  return { courseStatus, buttonContent };
};
