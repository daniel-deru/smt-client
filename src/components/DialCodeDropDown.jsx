import { useState, useRef, useEffect, useLayoutEffect } from "react"
import { FaAngleDown } from "react-icons/fa"
import { DialDrop } from "../styled/Components/DialCodeDropDown.styled"


const DialCodeDropDown = ({countries, code: initCode, getCode: setCountryCode}) => {

    const [showCodes, setShowCodes] = useState(false)
    const [flag, setFlag] = useState(null)
    const [codeState, setCodeState] = useState(initCode)

    const displayCodeRef = useRef()

    const getCode = (country) => {
        const code = `${country?.code?.root}${country?.code?.suffixes && country?.code.suffixes[0]}`
        displayCodeRef.current.innerText = code
        setCountryCode(code)
        getFlag(codeState)
        // console.log("+"+code.join(""))
        // getFlag("+"+code.join(""))

    }

    const getFlag = (code) => {
        const country = countries.filter(country => `${country?.code?.root}${country?.code?.suffixes && country?.code.suffixes[0]}` == code)
        // console.log(country)
        setFlag(country[0]?.flag)
    }

    useEffect(() => {
        getFlag(initCode)
    }, [initCode])
    
    return (
        <DialDrop onClick={() => setShowCodes(!showCodes)} show={showCodes}>
            <div>
                <FaAngleDown />
                <span ref={displayCodeRef} id="dial-code">
                    <img src={flag} alt="" />
                    {initCode}
                </span>
            </div>
            <ul className="drop-down">
                {countries.map(country => (
                    <li key={country.name}>
                        <img src={country?.flag} alt="" />
                        <span onClick={() => getCode(country)}>{country.name} ({country?.code?.root}{country?.code?.suffixes && country?.code.suffixes[0]})</span>
                    </li>
                ))}
            </ul>
        </DialDrop>
    )
}

export default DialCodeDropDown