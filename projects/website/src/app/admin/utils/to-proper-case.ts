export function toProperCase(s: string) {
  return s.replace(
    /\w\S*/g,
    (x) => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase()
  );
}
