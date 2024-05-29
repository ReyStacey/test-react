import { makeAutoObservable } from 'mobx'

class Modal {
  public data: any = {}
  public isOpen: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  public setModalState = (value: boolean) => {
    this.isOpen = value
  }

  public setModalData = (value: any) => {
    this.data = value
  }
}

export const modalStore = new Modal()
