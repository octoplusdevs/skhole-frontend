import { useSearchParams, useRouter } from "next/navigation";

const usePaginationParams = (defaultLimit = 8) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || defaultLimit);

  const updateParams = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));
    params.set("limit", String(limit));
    router.push(`?${params.toString()}`);
  };

  return { page, limit, updateParams };
};

export { usePaginationParams };
