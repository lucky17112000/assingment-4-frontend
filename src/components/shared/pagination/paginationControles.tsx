"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
// import { useRouter } from "next/router";
interface PaginationControlesProps {
  meta: {
    limit: number;
    page: number;
    total: number;
    totalPages: number;
  };
}
const PaginationControles = ({ meta }: PaginationControlesProps) => {
  const { limit, page, total, totalPages } = meta;
  const serachparams = useSearchParams();

  //pagination implemantation baki 35-9

  const router = useRouter();

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(serachparams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => page > 1 && navigateToPage(page - 1)}
              className={
                page <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"
              }
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              onClick={() => page < totalPages && navigateToPage(page + 1)}
              className={
                page >= totalPages
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationControles;
