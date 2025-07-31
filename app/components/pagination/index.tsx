import { IPagination } from "./interfaces";

export function Pagination({ page, totalPages, onPageChange }: IPagination) {
  const renderButtons = () => {
    const start = Math.max(1, page - 1);
    const end = Math.min(totalPages, page + 1);

    return Array.from({ length: end - start + 1 }, (_, index) => {
      const pageNumber = start + index;
      const isActive = pageNumber === page;

      return (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`px-3 py-1 rounded-md border text-sm ${
            isActive
              ? "bg-primary text-black"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {pageNumber}
        </button>
      );
    });
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      <button
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="px-3 py-1 border rounded-md text-sm disabled:opacity-50"
      >
        Anterior
      </button>

      {page > 2 && totalPages > 4 && <span className="text-sm">...</span>}

      {renderButtons()}

      {page < totalPages - 1 && totalPages > 4 && (
        <span className="text-sm">...</span>
      )}

      <button
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="px-3 py-1 border rounded-md text-sm disabled:opacity-50"
      >
        Próxima
      </button>
    </div>
  );
}
