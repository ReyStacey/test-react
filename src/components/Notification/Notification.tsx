import styles from './Notification.module.scss'

interface INotification {
  notificationText: string | null
}
export const Notification = ({ notificationText }: INotification) => {
  return (
    <div className={notificationText ? styles.notification : ''}>
      <p>{notificationText}</p>
    </div>
  )
}
