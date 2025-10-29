"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { generatePagination } from "../lib/utils";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const Pagination = ({ currentPage, totalPages }: { totalPages: number;  currentPage: number}) => {
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `/?${params.toString()}`;
  };
  const allPages = generatePagination(currentPage, totalPages);
    return (
      <div className="mx-auto mt-10 w-fit">
        <div className="inline-flex">
          <Link
            className={clsx("flex items-center me-2", {
              "pointer-events-none opacity-50": currentPage <= 1,
            })}
            href={createPageURL(currentPage - 1)}
          >
            <MoveLeft
            // isDisabled={currentPage <= 1}
            />
          </Link>
          <div className="flex -space-x-px">
            {allPages.map((page, index) => {
              let position: "first" | "last" | "single" | "middle" | undefined;

              if (index === 0) position = "first";
              if (index === allPages.length - 1) position = "last";
              if (allPages.length === 1) position = "single";
              if (page === "...") position = "middle";

              return (
                <PaginationNumber
                  key={`${page}-${index}`}
                  href={createPageURL(page)}
                  page={page}
                  position={position}
                  isActive={currentPage === page}
                />
              );
            })}
          </div>

          <Link
            className={clsx("flex items-center ms-2", {
              "pointer-events-none opacity-50": currentPage >= totalPages,
            })}
            href={createPageURL(currentPage + 1)}
          >
            <MoveRight
            // isDisabled={currentPage >= totalPages}
            />
          </Link>
        </div>
      </div>
    );
};

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean;
}) {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center text-sm border",
    {
      "rounded-l-md": position === "first" || position === "single",
      "rounded-r-md": position === "last" || position === "single",
      "z-10 bg-gray-600 border-gray-600 text-white": isActive,
      "hover:bg-gray-100": !isActive && position !== "middle",
      "text-gray-500": position === "middle",
    }
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

export default Pagination;
