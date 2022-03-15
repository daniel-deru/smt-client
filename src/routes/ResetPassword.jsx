import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"

import { ResetPasswordPage } from "../styled/ResetPassword.styled"

const ResetPassword = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get("id")

    

    useEffect(() => {

    })
    return (
        <ResetPasswordPage>
            <img src="../images/smt-logo-full.png" alt="" />
            <form>
                <div className="form-field">
                    <label htmlFor="">Password</label>
                    <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="">Confirm Password</label>
                    <input type="text" />
                </div>
                <div className="form-field">
                    <button type="button">Reset</button>
                </div>
            </form>
        </ResetPasswordPage>
    )
}

export default ResetPassword