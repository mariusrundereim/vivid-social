export function save(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}
