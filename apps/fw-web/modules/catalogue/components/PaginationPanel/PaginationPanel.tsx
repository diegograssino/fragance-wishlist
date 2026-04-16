"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { PaginationPanelProps } from "../../types/components";

const PaginationPanel = ({ pageParam, perPageParam }: PaginationPanelProps) => {
  // All of this values should come from constants, the page url handling should be a helper and has debounce
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(pageParam);
  const [perPage, setPerPage] = useState(perPageParam);
  // TODO Check if values are correct or add a proper fallback
  const defatultPageValue = searchParams.get("page") || "1";
  const defatultPerPageValue = searchParams.get("perPage") || "10";

  const handlePagination = (term: "page" | "perPage", termValue: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(term, termValue);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <label>Page (actual: {page})</label>
      <select
        onChange={(e) => {
          handlePagination("page", e.target.value);
          setPage(e.target.value);
        }}
        defaultValue={defatultPageValue}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <label>Per page (actual: {perPage})</label>
      <select
        onChange={(e) => {
          handlePagination("perPage", e.target.value);
          setPerPage(e.target.value);
        }}
        defaultValue={defatultPerPageValue}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  );
};

export default PaginationPanel;
