import AuthButton from "../components/AuthButton";


async function LoginFn() {
    const result 
}


function LoginPage() {

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">

            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

                <h1 className="text-4xl font-bold text-center mb-8">
                    Login
                </h1>

                <form className="flex flex-col gap-5">

                    <div className="flex flex-col gap-2">

                        <label className="font-medium">
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Enter username"
                            className="
                                border
                                border-gray-300
                                rounded-lg
                                p-3
                                outline-none
                                focus:ring-2
                                focus:ring-blue-500
                            "
                        />

                    </div>

                    <div className="flex flex-col gap-2">

                        <label className="font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter password"
                            className="
                                border
                                border-gray-300
                                rounded-lg
                                p-3
                                outline-none
                                focus:ring-2
                                focus:ring-blue-500
                            "
                        />

                    </div>

                    <AuthButton text = "Submit" fn = {LoginFn}/>

                </form>

            </div>

        </div>
    )
}

export default LoginPage;