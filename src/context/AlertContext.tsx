import React, { ReactNode, createContext, useState } from 'react'

import { Alert, AlertActionInterface } from '@vkontakte/vkui'

interface IAlert {
  header: ReactNode
  text: ReactNode
  actions?: AlertActionInterface[]
  onClose?: VoidFunction
}
export interface IAlertContextModel {
  activeAlert: ReactNode | null
  setActiveAlert: (alertContent: IAlert | null) => void
}

const AlertCtx = createContext<IAlertContextModel>({
  activeAlert: null,
  setActiveAlert: () => {},
})

export const AlertContextProvider: React.FC<{ children: ReactNode }> = (
  props
) => {
  const [activeAlert, setupActiveAlert] = useState<JSX.Element | null>(null)

  const setActiveAlert = (alertContent: IAlert | null) => {
    if (alertContent) {
      setupActiveAlert(
        <Alert
          actions={alertContent.actions}
          actionsLayout="horizontal"
          onClose={
            alertContent.onClose
              ? alertContent.onClose
              : () => setActiveAlert(null)
          }
          header={alertContent.header}
          text={alertContent.text}
        />
      )
    } else {
      setupActiveAlert(null)
    }
  }

  return (
    <AlertCtx.Provider
      value={{
        activeAlert,
        setActiveAlert,
      }}
    >
      {props.children}
    </AlertCtx.Provider>
  )
}

export const useAlert = () => React.useContext(AlertCtx)
