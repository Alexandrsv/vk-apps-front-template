interface IEnv extends ImportMetaEnv {
  readonly VITE_API_URL: string
}

export const appEnv = import.meta.env as IEnv
