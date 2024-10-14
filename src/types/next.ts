export type SearchParams = { [key: string]: string | string[] | undefined }

export type PageProps<
  TParams extends Record<string, string> | undefined = undefined,
> = {
  params: TParams
  searchParams: SearchParams
}

export type LayoutProps = { children: React.ReactNode }

export type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}
