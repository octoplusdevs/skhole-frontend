export const formatEnrollment = (enrolllmentsFound: [] = []) => {
  const enrollments = enrolllmentsFound.map((enroll: any) => {
    return {
      courseId: enroll?.courseId,
      paymentsStatus: enroll.payments?.map((p: any) => p.status),
      amount: enroll.payments?.reduce((acc: number, curr: any) => {
        return (acc += Number(curr.amount));
      }, 0),
    };
  });

  return { enrollments };
};
