import React from 'react';

export const Login = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

    return (
        <section>
            <div>
                <label>Username</label>
                <input type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <p>{emailError}</p>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <p>{passwordError}</p>

                <div>
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>
                                Dont have an account?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
                            </p>
                        </>
                    ) : (
                            <>
                                <button onClick={handleSignup}>Sign Up</button>
                                <p>
                                    Have an account?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
                                </p>
                            </>
                        )
                    }

                </div>
            </div>
        </section>
    )
}