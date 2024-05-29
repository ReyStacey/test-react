import { makeAutoObservable } from 'mobx'

class Modal {
  data: any = {}
  isOpen: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  setModalState = (value: boolean) => {
    this.isOpen = value
  }

  setModalData = (value: any) => {
    this.data = value
  }
}

export const modalStore = new Modal()
