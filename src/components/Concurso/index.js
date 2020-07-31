import React from 'react'
import Button from '../Button'
import './styles.css'
import logo from '../../assets/img/fotofilm.png'
import getCategory from '../../utils/fotofilm';

class Concurso extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    const category = getCategory(this.props.category)
    return (
      <div className="concurso">
        <section className="concurso-header column">
          <img src={logo} alt="sena" width="300" />
          <h1>{category.title}</h1>
          <p>
            {category.description}
          </p>
        </section>
        <section className="concurso-content column">
          <h2>Bases del concurso</h2>
          {category.content.map((content) => (
            <div className="concurso-detail">
              <p className="title">{content.title}</p>
              <p>{content.text}</p>
            </div>
          ))}
          <Button link="https://forms.gle/xX547NHQ6QY8Zvmd7">
            INSCRÍBETE AQUÍ
          </Button>
        </section>
      </div>
    )
  }
}

export default Concurso
