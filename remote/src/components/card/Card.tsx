// import styles from './Card.module.css'

export interface CardProps {
  title?: string
  content?: string
}

const Card = ({ title, content }: CardProps) => {
  return (
    // <div className={styles.card}>
    //   <h2 className={styles.title}>{title ?? 'Title'}</h2>
    //   <p className={styles.content}>{content ?? 'Content'}</p>
    // </div>
    <>Card Text</>
  )
}

export default Card
