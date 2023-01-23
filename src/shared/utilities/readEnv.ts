export function readEnv(name: string): string {
  const envResult = process.env[name];

  if (!envResult) {
    throw new Error(`${name} env not found`);
  }

  return envResult;
}
