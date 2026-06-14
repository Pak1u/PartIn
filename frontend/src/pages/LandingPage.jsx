import AuthButton from '../components/AuthButton'

function LandingPage() {
    return (

        <div className="min-h-screen flex items-center justify-center p-5">

            <div className="flex flex-col items-center gap-5 text-center">

                <h1 className="text-6xl md:text-8xl font-bold">
                    Welcome Back
                </h1>

                <p className="text-lg md:text-2xl text-gray-500">
                    Build something amazing.
                </p>

                <div className="flex gap-4 flex-wrap justify-center">
                    <AuthButton text="Login" fn= {() => navigation('/login')} />
                    <AuthButton text="Sign Up" fn = {() => navigation('/login')} />

                </div>

            </div>

        </div>
    )
}

export default LandingPage;