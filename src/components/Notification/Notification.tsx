import styles from './Notification.module.scss'

interface INotification {
  notificationText: string | null
}

export const Notification = (props: INotification) => {
  return (
    <div className={props.notificationText ? styles.notification : ''}>
      <p>{props.notificationText}</p>
    </div>
  )
}
