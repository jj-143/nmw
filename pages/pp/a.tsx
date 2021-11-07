import { useEffect, useState } from "react"
import Block from '../../components/Block'

export default function A() {
  const [state, setState] = useState("default Value")
  useEffect(() => {
    setState("hello!")
    const fn = () => alert("hi")

    document.addEventListener("click", fn )

    return document.removeEventListener('click', fn)
  }, [])
  return <div>
    <p>
      {JSON.stringify(state, null, 2)}
    </p>
    <button onClick={() => setState('iiieruoiwue')}>{state}</button>
    <Block/>
    <Block name="block-2"/>
    <Block name="block-3423"/>
    <Block name="dkfjlkj"/>
    <Block name="dlsfkjlk"/>
    <Block name="dslkjslkiu"/>
    </div>
}