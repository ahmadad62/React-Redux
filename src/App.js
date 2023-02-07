import { useDispatch, useSelector } from "react-redux"


export default function App() {
  const dispatch = useDispatch();
  //accsses to re
  const { adad } = useSelector(
    state => ({

      adad: state.calc.adad

    }))

  return (
    <div>
      APP
      <h2>{adad} </h2>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT_ADAD"
          })}
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT_ADAD"
          })}
      >
        -
      </button>
    </div>
  )
}
