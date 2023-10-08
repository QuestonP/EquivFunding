import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          Navbar
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            Main Body
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            Services
            Apply 
            Team and Bio
            Markets
            footer
          </div>
        </div>

      </div>
    </div>
  )
}

export default App