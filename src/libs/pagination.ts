/**
 * Shared pagination logic used by all listing pages.
 */

import { ITEMS_PER_PAGE } from './consts';

export interface PaginationInput<T> {
  items: T[];
  page: number;
  perPage?: number;
  baseUrl: string;
  params?: Record<string, string>;
}

export interface PaginationResult<T> {
  paginatedItems: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  prevUrl: string | undefined;
  nextUrl: string | undefined;
  /** Params to pass to the Pagination component (preserves filters). */
  paginationParams: Record<string, string>;
}

function buildUrl(baseUrl: string, params: Record<string, string>): string {
  const searchParams = new URLSearchParams(params);
  const qs = searchParams.toString();
  return qs ? `${baseUrl}?${qs}` : baseUrl;
}

export function paginate<T>(input: PaginationInput<T>): PaginationResult<T> {
  const perPage = input.perPage ?? ITEMS_PER_PAGE;
  const totalItems = input.items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const currentPage = Math.min(Math.max(1, input.page), totalPages);
  const startIndex = (currentPage - 1) * perPage;
  const paginatedItems = input.items.slice(startIndex, startIndex + perPage);

  const params = input.params ?? {};

  const prevUrl = currentPage > 1
    ? buildUrl(input.baseUrl, { ...params, page: String(currentPage - 1) })
    : undefined;

  const nextUrl = currentPage < totalPages
    ? buildUrl(input.baseUrl, { ...params, page: String(currentPage + 1) })
    : undefined;

  return {
    paginatedItems,
    currentPage,
    totalPages,
    totalItems,
    prevUrl,
    nextUrl,
    paginationParams: params,
  };
}
