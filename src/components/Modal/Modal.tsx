import React, { useEffect } from 'react'
import { ITickerData } from '../../api/ticker'
import styles from './Modal.module.scss'
import { tickersStore } from '../../store/tickers'

interface IModalProps {
  modalActive: boolean
  setActive: (modalActive: boolean) => void
  selectedTicker?: ITickerData | null
}

export const Modal = (props: IModalProps) => {
  const { modalActive, setActive, selectedTicker } = props
  const { setModalIsOpen } = tickersStore

  useEffect(() => {
    setModalIsOpen(modalActive)
  }, [setModalIsOpen, modalActive])

  return (
    <div className={modalActive ? styles.active : styles.modal}>
      <div className={styles.content}>
        <div className={styles.close} onClick={() => setActive(false)}>
          &#x2717;
        </div>

        <h2>{selectedTicker?.symbol} Information</h2>
        <p>price: {selectedTicker?.price}</p>
        <p>bestAskSize: {selectedTicker?.bestAskSize}</p>
        <p>bestAskPrice: {selectedTicker?.bestAskPrice}</p>
        <p>bestBidPrice: {selectedTicker?.bestBidPrice}</p>
      </div>
    </div>
  )
}
