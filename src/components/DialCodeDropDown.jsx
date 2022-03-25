import { useState, useRef } from "react"
import { FaAngleDown } from "react-icons/fa"
import { DialDrop } from "../styled/Components/DialCodeDropDown.styled"


const DialCodeDropDown = ({countries, code, getCode: setCountryCode}) => {
    const [showCodes, setShowCodes] = useState(false)

    const displayCodeRef = useRef()

    const getCode = (e) => {
        const string = e.target.innerText
        const code = string.match(/[0-9]*/gi)
        displayCodeRef.current.innerText = "+"+code.join("")
        // console.log(code.join(""))
        setCountryCode("+"+code.join(""))

    }
    return (
        <DialDrop onClick={() => setShowCodes(!showCodes)} show={showCodes}>
            <div>
                <FaAngleDown />
                <span ref={displayCodeRef} id="dial-code">{code}</span>
            </div>
            <ul className="drop-down">
                {countries.map(country => (
                    <li key={country.name}>
                        <img src={country?.flag} alt="" />
                        <span onClick={e => getCode(e)}>{country.name} ({country?.code?.root}{country?.code?.suffixes && country?.code.suffixes[0]})</span>
                    </li>
                ))}
            </ul>
        </DialDrop>
    )
}

export default DialCodeDropDown