import './Counter.css'


export const Counter = ({ count }) => {

  return (
    <div className= {count === 0 ? "counter__container--none" : "counter__container"}>
        <p className='counter__item'>{count}</p>
    </div>
  )
}
