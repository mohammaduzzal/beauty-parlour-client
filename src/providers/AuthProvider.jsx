import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const axiosPublic = useAxiosPublic()
    const googleProvider = new GoogleAuthProvider()
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signinWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // const updateUserProfile = (name,photo) =>{
    //     return updateProfile(auth.currentUser, {
    //         displayName: name,
    //         photoURL: photo
    //     })
    // }

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        if(currentUser){
            // get token and store client
            const userInfo = {email : currentUser.email}
            axiosPublic.post('/jwt', userInfo)
            .then(res =>{
                if(res.data.token){
                    localStorage.setItem('access-token', res.data.token)
                  
                }
            })

        }else{
            localStorage.removeItem('access-token')
        
        }
        setLoading(false); // Set loading false immediately after setting user
        })
        return () =>{
            unsubscribe()
        }
    },[axiosPublic])

    const authInfo ={
        createUser,
        signInUser,
        signinWithGoogle,
        logout,
        // updateUserProfile,
        loading,
        user

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;