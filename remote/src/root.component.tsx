import Card from './components/card/Card'

export default function Root(props) {
  return (
    <>
      {/*<section>*/}
      {/*  {props.name} is mounted!{JSON.stringify(props)}*/}
      {/*</section>*/}
      <h1>Root component with Card component included</h1>
      <Card />
    </>
  )
}
