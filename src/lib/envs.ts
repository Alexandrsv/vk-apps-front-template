interface IEnv extends ImportMetaEnv {
  readonly VITE_API_URL: string
}

export const env = import.meta.env as IEnv
