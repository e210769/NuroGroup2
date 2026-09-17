export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
export const localPath = (path: string) => path.startsWith('/') && !path.startsWith('//') ? `${basePath}${path}` : path;
export function withBasePaths<T>(value: T): T {
  if (typeof value === 'string') return localPath(value) as T;
  if (Array.isArray(value)) return value.map(withBasePaths) as T;
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k,v]) => [k, withBasePaths(v)])) as T;
  return value;
}
