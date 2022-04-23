import { Accueil } from "../pages/Accueil"
import Page from "../pages/Page"

const styles = {
    wrapper: {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
      },
    btnStyle: {
        cursor: 'pointer',
        position: 'absolute',
        bottom: '180px',
    },
    left: {
        margin: '7px -100px',
      },
      right: {
        margin: '7px 30px',
    }
}

export const Scrol = (props) => {

    const prevBtnStyle = Object.assign({}, styles.btnStyle, styles.left)
    const nextBtnStyle = Object.assign({}, styles.btnStyle, styles.right)

  return ( 
      <div style={styles.wrapper}>
        <input type="button" value="precedent" style={prevBtnStyle} onClick={props.prev}/>
        <input type="button" value="suivant" style={nextBtnStyle} onClick={props.next}/> 
      </div>
    )
}