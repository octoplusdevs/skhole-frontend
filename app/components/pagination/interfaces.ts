interface IPagination {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export type { IPagination };
