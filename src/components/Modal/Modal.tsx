import React from 'react'
import styles from './Modal.module.scss'
import { modalStore } from '../../store/modals'
import { observer } from 'mobx-react-lite'

export const Modal = observer(() => {
  const { setModalState, isOpen, data } = modalStore

  const closeModal = () => {
    setModalState(false)
  }

  return (
    <div className={isOpen ? styles.active : styles.modal}>
      <div className={styles.content}>
        <div className={styles.close} onClick={closeModal}>
          &#x2717;
        </div>

        <h2>{data.symbol} Information</h2>
        <p>price: {data.price}</p>
        <p>bestAskSize: {data.bestAskSize}</p>
        <p>bestAskPrice: {data.bestAskPrice}</p>
        <p>bestBidPrice: {data.bestBidPrice}</p>
      </div>
    </div>
  )
})
