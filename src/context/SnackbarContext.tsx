import React, { ReactNode, createContext, useContext, useState } from 'react'

import {
  CustomSnackbar,
  ICustomSnackbarProps,
} from '../components/popouts/CustomSnackbar'

export interface ISnackbarContextModel {
  showSnackbar: ShowSnackbar
}

const SnackbarCtx = createContext<ISnackbarContextModel>({
  showSnackbar: () => {},
})

export type ShowSnackbar = (args: Omit<ICustomSnackbarProps, 'onClose'>) => void

export const SnackbarContextProvider: React.FC<{ children: ReactNode }> = (
  props
) => {
  const [snackbarProps, setSnackbarProps] = useState<
    Omit<ICustomSnackbarProps, 'onClose'>
  >({ text: '' })

  const showSnackbar: ShowSnackbar = (props) => {
    setSnackbarProps(props)
  }

  return (
    <SnackbarCtx.Provider
      value={{
        showSnackbar,
      }}
    >
      {props.children}
      {snackbarProps.text && (
        <CustomSnackbar
          {...snackbarProps}
          onClose={() => setSnackbarProps({ text: '' })}
        />
      )}
    </SnackbarCtx.Provider>
  )
}

export const useSnackbar = () => {
  const { showSnackbar } = useContext(SnackbarCtx)
  return { showSnackbar }
}
