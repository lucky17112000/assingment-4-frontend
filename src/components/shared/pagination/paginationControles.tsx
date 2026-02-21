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
import { useSearchParams } from "next/navigation";
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
  //   console.log(serachparams.get("page"));
  //   console.log(limit, page, total, totalPages);\
  //pagination implemantation baki 35-9

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationControles;
